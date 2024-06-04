import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { TiLocation } from "react-icons/ti";
import "./CustomFooter.scss";

const CustomFooter = () => {
  return (
    <Navbar className="navbar  py-5" variant="dark" id="footer">
      <Container fluid>
        <Nav
          id="footer-content"
          className="d-flex align-items-center justify-content-evenly"
        >
          <Nav.Item className="footer-item">
            <h3>
              <TiLocation />
            </h3>
            <h3 className="locationTitle">UBICACIÓN</h3>
            <p>
              Augusto Leguia Norte 65 <br /> Oficina 4 - Las Condes
            </p>
          </Nav.Item>
          <Nav.Item className="footer-item">
            Fundo Armadillo © 2024 <br />
            Todos los derechos reservados
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export { CustomFooter };
