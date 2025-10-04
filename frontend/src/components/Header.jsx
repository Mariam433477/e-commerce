import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarousel } from "../store/slices/carouselSlice";
import CarouselItemCom from "./CarouselItemCom";

export default function Header() {
  const dispatch = useDispatch();
  const { slides } = useSelector((state) => state.carousel);

  useEffect(() => {
    dispatch(fetchCarousel());
  }, [dispatch]);

  return (
    <Carousel interval={3000} controls indicators>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <CarouselItemCom slide={slide} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
