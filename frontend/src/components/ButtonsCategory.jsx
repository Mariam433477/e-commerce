import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainButton } from "../custom/MainButton";
import { useSelector } from "react-redux";
export default function ButtonsCategory({
  selectedCategory,
  onSelectCategory,
}) {
  const { products = [] } = useSelector((state) => state.productSlice);
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return (
    <Container className="my-4">
      <Row className="g-2 justify-content-center">
        <Col xs={12} sm={4} md={3} className="d-flex justify-content-center">
          <MainButton
            variant={selectedCategory === "All" ? "success" : "outline-success"}
            onClick={() => onSelectCategory("All")}
          >
            All
          </MainButton>
        </Col>
        <Col xs={12} sm={4} md={3} className="d-flex justify-content-center">
          {categories.map((cat) => (
            <MainButton
              variant={selectedCategory === cat ? "success" : "outline-success"}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </MainButton>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
