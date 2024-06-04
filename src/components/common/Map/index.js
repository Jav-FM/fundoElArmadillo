import React from "react";
import { Button, Image } from "react-bootstrap";
import "./Map.scss";
import mapImage from "../../../assets/img/mapa.JPG";

const Map = () => {
  return (
    <>
      <Image id="mapImage" src={mapImage} alt="mapa" />
      <a
        href="https://maps.app.goo.gl/d7UC1dnUCpAvaP7N7"
        rel="noreferrer"
        target="_blank"
      >
        <Button variant="dark" size="lg">
          Abrir en Google Maps
        </Button>
      </a>
    </>
  );
};

export { Map };
