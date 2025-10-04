import React from "react";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { toggleFavorite } from "../store/slices/favSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function CardProduct({
  id,
  img,
  title,
  subTitle,
  price,
  stock,
}) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const favorites = useSelector((state) => state.favorites) || [];

  const itemInCart = cartItems.find((item) => item.id === id);
  const qtyInCart = itemInCart ? itemInCart.qty : 0;

  const isFavorite = favorites.some((item) => item?.id === id);

  // إضافة للسلة
  const handleAddToCart = () => {
    if (qtyInCart < stock) {
      dispatch(addToCart({ id, img, title, price, stock }));
      MySwal.fire({
        icon: "success",
        title: "تمت الإضافة!",
        text: `${title} تمت إضافته إلى السلة`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: "عذراً!",
        text: "وصلت للحد الأقصى من المخزون",
        confirmButtonText: "حسناً",
      });
    }
  };

  return (
    <Card
      className="shadow-sm border-0 position-relative h-100 product-card"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderRadius: "10px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
       <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleFavorite({ id, img, title, subTitle, price, stock }));
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
          color: isFavorite ? "red" : "#999",
          fontSize: "1.5rem",
          zIndex: 10,
          userSelect: "none",
        }}
      >
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </div>

      {/* الصورة */}
      <div
        style={{
          height: "220px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          alt={title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* الجسم */}
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fs-5 fw-semibold text-truncate" title={title}>
            {title}
          </Card.Title>
          <Card.Text
            className="text-muted small"
            style={{
              maxHeight: "40px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {subTitle}
          </Card.Text>

          <div className="mt-2">
            {stock > 0 ? (
              <span className="badge bg-success">
                المتوفر: {stock - qtyInCart}
              </span>
            ) : (
              <span className="badge bg-danger">غير متوفر</span>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <h6 className="fw-bold mb-0 text-primary">${price}</h6>
          <div className="d-flex gap-3 align-items-center">
            <Link to={`/home/product/${id}`} className="text-dark">
              <FaEye
                size={22}
                style={{ cursor: "pointer", transition: "color 0.2s" }}
              />
            </Link>

            <IoMdAdd
              size={26}
              style={{
                cursor: qtyInCart < stock ? "pointer" : "not-allowed",
                opacity: qtyInCart < stock ? 1 : 0.5,
              }}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
