import React from "react";
import img1 from "../assets/photo1.jpg";
import img2 from "../assets/photo2.jpg";
import img3 from "../assets/photo3.jpg";
import { Link, useParams } from "react-router-dom";
import { MainButton } from "../custom/MainButton";
export default function DetailsProductSection() {
  const products = [
    {
      id: 1,
      img: img1,
      title: "First slide label",
      subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 120,
    },
    {
      id: 2,
      img: img2,
      title: "Second slide label",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 90,
    },
    {
      id: 3,
      img: img3,
      title: "Third slide label",
      subTitle:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      price: 150,
    },
    {
      id: 4,
      img: img1,
      title: "First slide label",
      subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 200,
    },
    {
      id: 5,
      img: img2,
      title: "Second slide label",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 75,
    },
    {
      id: 6,
      img: img3,
      title: "Third slide label",
      subTitle:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      price: 130,
    },
    {
      id: 7,
      img: img1,
      title: "First slide label",
      subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 220,
    },
    {
      id: 8,
      img: img2,
      title: "Second slide label",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 85,
    },
    {
      id: 9,
      img: img3,
      title: "Third slide label",
      subTitle:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      price: 160,
    },
  ];
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.img} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.subTitle}</p>
          <h4>${product.price}</h4>
          <Link to="/cart">
            {" "}
            <MainButton>Add to Cart</MainButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
