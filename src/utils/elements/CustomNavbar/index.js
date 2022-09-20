import React from "react";
import "./CustomNavbar.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const CustomNavbar = () => {
  return (
    <Navbar
      id="navbar"
      expand="lg"
      collapseOnSelect
      className="navbar"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          Marca
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Nav.Link href="#proyecto">
              Proyecto
            </Nav.Link>
            <Nav.Link href="#caracteristicas">
              Características
            </Nav.Link>
            <Nav.Link>
              Tour Virtual
            </Nav.Link>
            <Nav.Link>
              La Patagonia
            </Nav.Link>
            <Nav.Link>
              Contacto
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/register">
              <h3>
                <AiFillInstagram />
              </h3>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <h3>
                <AiFillFacebook />
              </h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { CustomNavbar };
