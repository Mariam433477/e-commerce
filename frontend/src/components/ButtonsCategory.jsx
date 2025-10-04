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

  const getButtonStyle = (category) => {
    const isActive = selectedCategory === category;
    return {
      backgroundColor: isActive ? "#198754" : "transparent",
      color: isActive ? "#fff" : "#198754",
      border: "2px solid #198754",
      fontWeight: isActive ? "bold" : "normal",
      padding: "8px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    };
  };

  return (
    <Container className="my-4">
      <Row className="g-2 justify-content-center flex-wrap">
        <Col xs="auto" className="mb-2">
          <button
            style={getButtonStyle("All")}
            onClick={() => onSelectCategory("All")}
          >
            All
          </button>
        </Col>

        {categories.map((cat, index) => (
          <Col xs="auto" key={index} className="mb-2">
            <button
              style={getButtonStyle(cat)}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
