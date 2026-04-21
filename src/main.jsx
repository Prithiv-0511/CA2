import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter";
import { OrderProvider } from "./context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderProvider>
      <AppRouter />
    </OrderProvider>
  </React.StrictMode>
);