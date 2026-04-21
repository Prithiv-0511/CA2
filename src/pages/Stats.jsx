import React from "react";
import { useOrder } from "../context/OrderContext";
import StatsCard from "../components/StatsCard";

function Stats() {
  const {
    totalOrders,
    deliveredOrders,
    cancelledOrders,
  } = useOrder();

  return (
    <div>
      <h1>Orders Dashboard</h1>

      <StatsCard
        title="Total Orders"
        value={totalOrders}
        testid="total-orders"
      />

      <StatsCard
        title="Delivered Orders"
        value={deliveredOrders}
        testid="delivered-orders"
      />

      <StatsCard
        title="Cancelled Orders"
        value={cancelledOrders}
        testid="cancelled-orders"
      />
    </div>
  );
}

export default Stats;