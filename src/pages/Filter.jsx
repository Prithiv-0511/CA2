import React, { useState } from "react";
import { useOrder } from "../context/OrderContext";
import OrderList from "../components/OrderList";

function Filter() {
  const { validOrders } = useOrder();
  const [search, setSearch] = useState("");

  const filtered = validOrders.filter((order) =>
    order.restaurant
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Filter Orders</h1>

      <input
        data-testid="filter-input"
        type="text"
        placeholder="Search Restaurant"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {search === "" ? (
        <h3>Enter restaurant name</h3>
      ) : filtered.length === 0 ? (
        <h3>No results found</h3>
      ) : (
        <OrderList orders={filtered} />
      )}
    </div>
  );
}

export default Filter;