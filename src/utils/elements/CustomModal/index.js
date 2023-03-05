import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./CustomModal.scss";
import logo from "../../../assets/img/logo_blanco.png";

const CustomModal = ({ show, setShow, goToContact }) => {
  const handleClose = () => {
    setShow(false);
  };

  const handleWantAReservation = () => {
    window.location.href = "#contacto";
    handleClose();
  };

  return (
    <Modal
      backdrop="static"
      id="customModal"
      show={show}
      onHide={() => setShow(false)}
      size="md"
    >
      <Modal.Header id="modalHeader" closeButton closeLabel="Cerrar" />

      <Modal.Body>
        <div id="modalBody">
          <img id="modalLogo" src={logo} alt="logo" />
          <h2 id="modalTitle">Exito de Ventas</h2>
          <div id="modalMiddleContent">
            <p>Ultimas unidades a precio de Preventa.</p>
            <p>Visita y elige tu parcela en el Tour Virtual.</p>
            <p id="slogan">¡Acceso privado a río Simpson!</p>
          </div>

          <div id="modalBottomContent">
            <p>* Consulta promociones al contado.</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer id="modalFooter">
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
      </Modal.Footer>
    </Modal>
  );
};

export { CustomModal };
