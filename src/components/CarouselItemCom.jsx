import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function CarouselItemCom({ img, title, subTitle }) {
  return (
    <>
      <img className="d-block w-100" src={img} alt={title} />
      <Carousel.Caption>
        <h5>{title}</h5>
        <p>{subTitle}</p>
      </Carousel.Caption>
    </>
  );
}
