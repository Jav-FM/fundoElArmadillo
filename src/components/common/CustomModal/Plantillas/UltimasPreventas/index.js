import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import logo from "../../../../../assets/img/logo_blanco.png";

const Body = () => {
  return (
    <Fragment>
      <div id="modalBody">
        <img id="modalLogo" src={logo} alt="logo" />
        <h2 id="modalTitle">Exito de Ventas</h2>
        <div id="modalMiddleContent">
          <p>Ultimas unidades a precio de Preventa.</p>
          <p>Visita y elige tu parcela en el Tour Virtual.</p>
          <p id="slogan">¡Acceso a rivera de Río Simpson!</p>
        </div>

        <div id="modalBottomContent">
          <p>* Consulta promociones al contado.</p>
        </div>
      </div>
    </Fragment>
  );
};

const Footer = ({ handleClose, handleWantAReservation }) => {
  <Fragment>
    <Button
      size="lg"
      variant="outline-dark mx-2"
      onClick={handleWantAReservation}
    >
      Quiero más información
    </Button>
    <Button size="lg" variant="dark mx-2" onClick={handleClose}>
      Cerrar
    </Button>
  </Fragment>;
};

export { Body, Footer };
