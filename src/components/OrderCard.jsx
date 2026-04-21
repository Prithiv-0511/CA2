import React from "react";
import { Link } from "react-router-dom";

function OrderCard({ order }) {
  return (
    <div data-testid="order-item" style={styles.card}>
      <h3>{order.customerName || "Unknown"}</h3>
      <p>{order.restaurant}</p>
      <p>Status: {order.status}</p>
      <p>Total: ₹{order.totalAmount}</p>

      {order.rating && <p> {order.rating}</p>}

      <Link to={`/orders/${order.orderId}`}>View Details</Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    width: "250px"
  }
};

export default OrderCard;