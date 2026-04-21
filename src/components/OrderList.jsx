import React from "react";
import OrderCard from "./OrderCard";

function OrderList({ orders }) {
  return (
    <div style={styles.container}>
      {orders.map(order => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

export default OrderList;