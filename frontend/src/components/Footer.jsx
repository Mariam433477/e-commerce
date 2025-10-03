import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <Container>
        <Row className="gy-4">
          
          <Col md={4}>
            <h5 className="mb-3">E-Commerce</h5>
            <p>
              Best online shop for your needs. Discover a wide variety of
              products at the best prices.
            </p>
          </Col>
 
          <Col md={4}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          
          <Col md={4}>
            <h5 className="mb-3">Contact Us</h5>
            <p>Email: support@ecommerce.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

      
        <div className="text-center pb-3">
          <small>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
}
