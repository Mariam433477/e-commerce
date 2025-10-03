import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MainButton } from '../custom/MainButton';

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

             
              <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
                <MainButton>Register</MainButton>
                <MainButton>Login</MainButton>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
