const OrderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: Array.isArray(action.payload)
          ? action.payload
          : [],
        loading: false,
      };

    case "MARK_DELIVERED":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload &&
          order.status === "Pending"
            ? {
                ...order,
                status: "Delivered",
              }
            : order
        ),
      };

    default:
      console.warn(
        "Unknown action:",
        action.type
      );
      return state;
  }
};

export default OrderReducer;