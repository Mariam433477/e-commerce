import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { MdDelete } from "react-icons/md";
// import img1 from "../assets/photo1.jpg";
// import img2 from "../assets/photo2.jpg";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { MainButton } from "../custom/MainButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../store/slices/cartSlice";
export default function CartCom() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Cart</h2>
      {Array.isArray(cartItems) &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className="d-flex justify-content-between align-items-center border rounded p-3 mb-3 shadow-sm"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                className="rounded"
              />
              <div>
                <h5 className="mb-1">{item.title}</h5>
                <p className="mb-1 text-muted">Price: ${item.price}</p>
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => dispatch(decrementQty(item.id))}
                  >
                    <FaMinus />
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => dispatch(incrementQty(item.id))}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h5 className="mb-2">${item.price * item.qty}</h5>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

      <div className="text-center mt-5">
        <h4 className="mb-3">Total: ${totalPrice}</h4>
        <Link to="/buy">
          <MainButton>Buy Now</MainButton>
        </Link>
      </div>
    </div>
  );
}
