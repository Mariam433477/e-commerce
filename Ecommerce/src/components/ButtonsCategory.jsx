import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainButton } from "../custom/MainButton";
export default function ButtonsCategory() {
  return (
    <Container className="my-4">
      <Row className="g-2 justify-content-center">
        <Col xs={12} sm={4} md={3} className="d-flex justify-content-center">
          <MainButton>Mobile</MainButton>
        </Col>
        <Col xs={12} sm={4} md={3} className="d-flex justify-content-center">
          <MainButton>Clothes</MainButton>
        </Col>
        <Col xs={12} sm={4} md={3} className="d-flex justify-content-center">
          <MainButton>Accessories</MainButton>
        </Col>
      </Row>
    </Container>
  );
}
