import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function CarouselItemCom({ slide }) {
  const { img, title, subTitle } = slide;
  return (
    <>
      <img
        className="d-block w-100"
        src={img}
        alt={title}
        style={{ height: "60vh", objectFit: "cover" }}
      />
      <Carousel.Caption>
        <h5>{title}</h5>
        <p>{subTitle}</p>
      </Carousel.Caption>
    </>
  );
}
