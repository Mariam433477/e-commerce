import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MainButton } from "../custom/MainButton";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.loggedInUser);

  const handleLogout = () => {
    dispatch(logout());
  };
const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center gap-3">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/cart" className="nav-link">
                Cart
              </NavLink>

              <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
                {user ? (
                  <>
                    <span className="me-2 align-self-center">
                      Hello, {user.name}
                    </span>
                    <MainButton onClick={handleLogout}>Logout</MainButton>
                  </>
                ) : (
                  <>
                    <Link to="register">
                      <MainButton>Register</MainButton>
                    </Link>
                    <Link to="login">
                      <MainButton>Login</MainButton>
                    </Link>
                  </>
                )}
              </div>
              <Link
                to="/cart"
                className="position-relative d-flex align-items-center text-decoration-none text-dark ms-lg-3 mt-3 mt-lg-0"
                style={{ width: "fit-content" }}
              >
                <FaShoppingCart size={28} />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                  style={{
                    fontSize: "12px",
                    minWidth: "18px",
                    minHeight: "18px",
                  }}
                >
                  {totalQuantity}
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
