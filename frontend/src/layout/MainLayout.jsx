import React from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SharedLayout from "./SharedLayout";
import Home from "../pages/Home";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import BuyNowSuccess from "../pages/BuyNowSuccess";
import ProtectedRoute from "./ProtectedRoute";

export default function MainLayout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="buy" element={<BuyNowSuccess />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
