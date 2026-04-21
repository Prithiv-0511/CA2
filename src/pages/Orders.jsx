import React from "react";
import { useOrder } from "../context/OrderContext";
import OrderList from "../components/OrderList";

function Orders() {
  const { loading, validOrders } = useOrder();

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>All Orders</h1>
      <OrderList orders={validOrders} />
    </div>
  );
}

export default Orders;