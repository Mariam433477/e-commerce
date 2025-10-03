import React from "react";

export default function OrderShipped() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="p-4 rounded shadow bg-success text-white fw-bold text-center">
        ✅ Order Shipped Successfully!
      </div>
    </div>
  );
}
