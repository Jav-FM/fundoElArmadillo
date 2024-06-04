import React from "react";
import "./CustomNavbar.scss";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import logo from "../../../assets/img/logo_blanco.png";
import { downloadBrochure } from "../../../utils/commonFunctions";

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
          <img id="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="linksContainer me-auto">
            <Nav.Link href="#proyecto">Proyecto</Nav.Link>
            <Nav.Link href="#video">Video</Nav.Link>
            <Nav.Link href="#caracteristicas">Características</Nav.Link>
            <Nav.Link href="#tourVirtual">Tour Virtual</Nav.Link>
            <Nav.Link href="#sector">La Patagonia</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://caminopatagon.blogspot.com/"
            >
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            <div id="navbarSocials">
              <a
                className="socialLink"
                target="_blank"
                href="https://www.instagram.com/fulcrumg_/"
              >
                <AiFillInstagram />
              </a>
              <a
                className="socialLink"
                target="_blank"
                href="https://web.facebook.com/fulcrumg"
              >
                <AiFillFacebook />
              </a>
              <a
                className="socialLink"
                target="_blank"
                href="https://www.youtube.com/@fulcrumgparcelascoyhaique"
              >
                <AiFillYoutube />
              </a>
            </div>
          </Nav>
          <Nav>
            <div>
              <Button variant="light" onClick={downloadBrochure}>
                Descargar Brochure
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { CustomNavbar };
