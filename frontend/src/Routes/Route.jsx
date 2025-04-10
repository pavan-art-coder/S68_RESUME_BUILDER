import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { Login } from "../components/Login";
import SelectAddress from "../pages/SelectAddress";
import OrderConfirmation from "../pages/OrderConfirmation";
import PrivateRouter from "./PrivateRouter";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Private routes */}
      <Route element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/select-address" element={<SelectAddress />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
