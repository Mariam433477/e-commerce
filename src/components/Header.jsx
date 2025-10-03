import React from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/photo1.jpg";

import img2 from "../assets/photo2.jpg";
import img3 from "../assets/photo3.jpg";

export default function Header() {
  const info = [
    {
      img: img1,
      title: "First slide label",
      subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: img2,
      title: "Second slide label",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: img3,
      title: "Third slide label",
      subTitle:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];
  return (
    <>
      <Carousel interval={3000} controls indicators>
        {info.map((slide, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={slide.img}
              alt={slide.title}
              style={{
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h5>{slide.title}</h5>
              <p>{slide.subTitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
