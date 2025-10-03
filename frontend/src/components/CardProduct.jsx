import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

import { MdFavoriteBorder } from "react-icons/md";
import { MainButton } from "../custom/MainButton";
import { Link } from "react-router-dom";

export default function CardProduct({ id, img, title, subTitle, price }) {
  return (
    <>
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
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
                <FaEye size={22} style={{ cursor: "pointer" }} />
                <IoMdAdd size={24} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}
