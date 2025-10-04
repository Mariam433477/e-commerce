import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container className="mt-4 mb-5">
      <h2 className="text-center mb-4">🛒 My Cart</h2>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded shadow-sm p-3 mb-3 bg-white"
            >
              <Row className="align-items-center g-3">
                {/* صورة المنتج */}
                <Col xs={12} sm={4} md={3} className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{
                      maxWidth: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                </Col>

                {/* تفاصيل المنتج */}
                <Col
                  xs={12}
                  sm={5}
                  md={6}
                  className="text-center text-sm-start"
                >
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p className="text-muted mb-2">Price: ${item.price}</p>
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => dispatch(decrementQty(item.id))}
                    >
                      <FaMinus />
                    </button>
                    <span className="fw-bold">{item.qty}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => dispatch(incrementQty(item.id))}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </Col>

                {/* السعر وزر الحذف */}
                <Col
                  xs={12}
                  sm={3}
                  md={3}
                  className="text-center text-sm-end mt-3 mt-sm-0"
                >
                  <h5 className="text-primary fw-bold mb-2">
                    ${item.price * item.qty}
                  </h5>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <FaTrash />
                  </button>
                </Col>
              </Row>
            </div>
          ))}

          {/* الإجمالي */}
          <div className="text-center mt-5">
            <h4 className="fw-bold mb-3">Total: ${totalPrice}</h4>
            <Link to="/home/buy">
              <MainButton>Buy Now</MainButton>
            </Link>
          </div>
        </>
      ) : (
        <h5 className="text-center text-muted mt-5">Your cart is empty 🛍️</h5>
      )}
    </Container>
  );
}
