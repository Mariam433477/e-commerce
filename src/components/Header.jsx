import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItemCom from "./CarouselItemCom";
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
      <Carousel data-bs-theme="dark">
        {info.map((slide, index) => (
          <Carousel.Item key={index} style={{ height: "50vh" }}>
            <CarouselItemCom slide={slide} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
