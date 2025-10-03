import React from "react";
import Carousel from "react-bootstrap/Carousel";
import defaultImg from "../assets/photo1.jpg";
export default function CarouselItemCom({ img, title, subTitle }) {
   const safeImg = img || defaultImg;
  const safeTitle = title || "Slide";
  const safeSubTitle = subTitle || "";

  return (
  <>
      <img
        className="d-block w-100"
        src={safeImg}
        alt={safeTitle}
        style={{ height: "50vh", objectFit: "cover" }}
      />
      {(safeTitle || safeSubTitle) && (
        <div className="carousel-caption d-none d-md-block">
          {safeTitle && <h5>{safeTitle}</h5>}
          {safeSubTitle && <p>{safeSubTitle}</p>}
        </div>
      )}
    </>
  );
}
