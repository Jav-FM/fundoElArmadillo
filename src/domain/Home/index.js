import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Home.scss";
import { Proyecto } from "../Proyecto";
import { Video } from "../Video";
import { Caracteristicas } from "../Caracteristicas";
import { TourVirtual } from "../TourVirtual";
import { Sector } from "../Sector";
import { Galeria } from "../Galeria";
import { Contacto } from "../Contacto";
import homeVideo from "../../assets/video/header-armadillo.MOV";
import videoPoster from "../../assets/img/video-poster-img.jpg";
import { CustomModal } from "../../utils/elements/CustomModal";

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <React.Fragment>
      <CustomModal show={showModal} setShow={setShowModal} />
      <div id="home" className="container">
        <video id="background-video" autoPlay loop muted poster={videoPoster}>
          <source src={homeVideo} />
        </video>
        <h1 id="title">
          <span id="preTitle">Fundo</span>
          <br />
          Armadillo
        </h1>
        <h4 id="subtitle">Con acceso a orilla de río Simpson</h4>
        <Button
          className="homeButton"
          variant="outline-light"
          size="lg"
          href="#caracteristicas"
        >
          Más información
        </Button>
        <Button
          className="homeButton"
          variant="dark"
          size="lg"
          href="#contacto"
        >
          Contáctanos
        </Button>
        <div id="homeCardsContainer" className="container">
          <div className="homeCard">
            <h3>Parcelas Agrícolas de 5000 m2</h3>
            <p>
              Proyecto El Armadillo es un proyecto ubicado en la Patagonia
              Chilena, rodeado de los sectores más bellos del sur de chile, el
              cual buscará preservar todo el sentido natural para que tú y tu
              familia puedan disfrutar de nuestra tierra.
            </p>
          </div>
          <div className="homeCard">
            <h3>Cerca de Todo</h3>
            <p>
              Gracias a su cercanía con el aeropuerto y el centro de la ciudad,
              encontrarás lo que necesites a sólo minutos. Podrás obtener el
              lugar que buscas para conectarte con la tierra en un hermoso
              entorno patagón, a minutos de las principales zonas de pesca y la
              famosa ruta de la carretera austral.
            </p>
          </div>
          <div className="homeCard">
            <h3>Acceso privado a Río Simpson</h3>
            <p>
              El proyecto contará con acceso privado al terreno colindante de 17
              hectareas, el cual incluye Bosque Nativo y 450 metros de orilla
              del Río Simpson para actividades al aire libre.
            </p>
          </div>
        </div>
        <div id="homeGeneralCard">
          <h3>Parcelas Agrícolas de 5000 m2</h3>
          <p>
            Proyecto El Armadillo es un proyecto ubicado en la Patagonia
            Chilena, rodeado de los sectores mas bellos del sur de chile, el
            cual buscará preservar todo el sentido natural para que tu y tu
            familia puedan disfrutar de nuestra tierra.
          </p>
          <h3 className="generalTitle">Cerca de Todo</h3>
          <p>
            Gracias a su cercanía con el aeropuerto y al centro de la ciudad,
            encontrarás lo que necesitas a sólo minutos. Podrás obtener el lugar
            que buscas para conectarte con la tierra en un hermoso entorno
            patagón, a minutos de las principales zonas de pesca y la famosa
            ruta de la carretera austral.
          </p>
          <h3 className="generalTitle">Acceso privado a Río Simpson</h3>
          <p>
            El proyecto contará con acceso privado al terreno colindante de 17
            hectareas, el cual incluye Bosque Nativo y 450 metros de orilla del
            Río Simpson para actividades al aire libre.
          </p>
        </div>
      </div>
      <Proyecto />
      <Video />
      <Caracteristicas />
      <TourVirtual />
      <Sector />
      <Galeria />
      <Contacto />
    </React.Fragment>
  );
};

export { Home };
