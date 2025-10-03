import React from "react";
import CardProduct from "./CardProduct";
import img1 from "../assets/photo1.jpg";
import img2 from "../assets/photo2.jpg";
import img3 from "../assets/photo3.jpg";
import { Container, Row, Col } from "react-bootstrap";
import ButtonsCategory from "./ButtonsCategory";
 

export default function OurProducts() {
  
  const info =[
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

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <ButtonsCategory />

      <Row className="g-4 justify-content-center">
        {info.map((item, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <CardProduct
              id={index + 1}
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
              price={item.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
