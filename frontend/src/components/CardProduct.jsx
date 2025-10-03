import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

import { MdFavoriteBorder } from "react-icons/md";
import { MainButton } from "../custom/MainButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

export default function CardProduct({ id, img, title, subTitle, price }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ id, img, title, price }));  
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            color: "gray",
            fontSize: "1.5rem",
          }}
        >
          <MdFavoriteBorder />
        </div>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{subTitle}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <MainButton>click</MainButton>

            <div className="d-flex gap-3">
              <Link to={`/product/${id}`}>
                {" "}
                <FaEye size={22} style={{ cursor: "pointer" }} />
              </Link>
              <IoMdAdd
                size={24}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart();
                }}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
