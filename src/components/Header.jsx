import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/photo1.jpg";
import CarouselItemCom from "./CarouselItemCom";
import img2 from "../assets/photo2.jpg";
import img4 from "../assets/photo4.jpg";

export default function Header() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <CarouselItemCom
          img={img1}
          title="First slide label"
          subTitle="Nulla vitae elit libero, a pharetra augue mollis interdum."
        />
        <CarouselItemCom
          img={img2}
          title="Second slide label"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CarouselItemCom
          img={img4}
          title="Third slide label"
          subTitle="Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        />
      </Carousel>
    </>
  );
}
