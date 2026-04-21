import { createContext, useContext, useReducer, useEffect } from "react";
import OrderReducer from "../reducer/OrderReducer";
import { getToken, getDataset } from "../api/api";

const initialState = {
  orders: [],
  loading: true,
};

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        
        const tokenRes = await getToken({
          studentId:"E0123025",
          password:"720619",
          set:"setA",
        });

        const orders = await getDataset(
          tokenRes.token,
          tokenRes.dataUrl
        );

        dispatch({
          type: "SET_ORDERS",
          payload: orders,
        });
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchOrders();
  }, []);

  const markDelivered = (id) =>
    dispatch({
      type: "MARK_DELIVERED",
      payload: id,
    });

  const validOrders = state.orders.filter(
    (order) =>
      order.items &&
      order.items.length > 0 &&
      order.items.every(
        (item) => item.quantity > 0
      ) &&
      order.totalAmount > 0
  );

  const totalOrders = validOrders.length;

  const deliveredOrders = validOrders.filter(
    (order) =>
      order.status?.toLowerCase() ===
      "delivered"
  ).length;

  const cancelledOrders = validOrders.filter(
    (order) =>
      order.status?.toLowerCase() ===
      "cancelled"
  ).length;

  window.appState = {
    totalOrders,
    deliveredOrders,
    cancelledOrders,
  };

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        loading: state.loading,
        validOrders,
        totalOrders,
        deliveredOrders,
        cancelledOrders,
        markDelivered,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () =>
  useContext(OrderContext);