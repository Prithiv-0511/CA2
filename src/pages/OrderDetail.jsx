import React from "react";
import { useParams } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

function OrderDetail() {
  const { id } = useParams();
  const { orders, markDelivered } = useOrder();

  const order = orders.find(
    (item) => item.orderId === Number(id)
  );

  if (!order) return <h2>Order not found</h2>;

  return (
    <div>
      <h1>Order #{order.orderId}</h1>
      <h3>{order.customerName || "Unknown"}</h3>
      <p>{order.restaurant}</p>
      <p>Status: {order.status}</p>

      <h3>Items</h3>

      {order.items?.map((item, index) => (
        <div key={index}>
          {item.name} - ₹
          {item.price * item.quantity}
        </div>
      ))}

      {order.status === "Pending" && (
        <button
          onClick={() =>
            markDelivered(order.orderId)
          }
        >
          Mark Delivered
        </button>
      )}
    </div>
  );
}

export default OrderDetail;