import React, { useState } from "react";
// import { Button, Modal } from "react-bootstrap";
import "./Proyecto.scss";
import proyectImage from "../../assets/img/proyecto-image.jpeg";
// import promotionalVideo from "../../assets/video/video_promocional.mp4";

const Proyecto = () => {
  // const [showVideoModal, setShowVideoModal] = useState(false);
  // // const promotionalVideo =
  // //   "https://player.vimeo.com/video/765422384?h=35c046b135&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
  // const handleClose = () => {
  //   setShowVideoModal(false);
  // };

  return (
    <section id="proyecto" className="container">
      {/* <Modal show={showVideoModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <video width="100%" height="auto" controls>
            <source src={promotionalVideo} type="video/mp4" />
            Tu navegador no soporta los vídeos de HTML5
          </video>
        </Modal.Body>
        <Modal.Footer id="galleryModalFooter">
          <Button variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal> */}
      <div id="contentContainer">
        <div id="textContainer">
          <h2 id="title">Sobre el proyecto</h2>
          <h5>
            Proyecto Fundo Armadillo es un proyecto con 70 parcelas ubicadas a
            orillas del río Simpson, en el valle del mismo nombre, a solo 30
            minutos del aeropuerto y 25 del centro de la ciudad de Coyhaique.
            <br /> <br />
            Cuenta con parcelas planas, y con vista al valle las cuales te
            permiten apreciar toda la vista de la maravillosa patagonia.
            <br /> <br />
            Se encuentra a minutos de los principales lagos de pesca de la zona,
            los cuales son visitados año a año por turistas nacionales e
            internacionales que recorren la maravillosa carretera austral.
          </h5>
          {/* <Button
            id="videoButton"
            variant="dark"
            size="lg"
            onClick={() => setShowVideoModal(true)}
          >
            Ver video del proyecto
          </Button> */}
        </div>
        <img id="imagenProyecto" src={proyectImage} alt="imagen-proyecto" />
      </div>
    </section>
  );
};

export { Proyecto };
