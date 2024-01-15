import React from "react";
import { Button, Image } from "react-bootstrap";
import "./Map.scss";
import mapImage from "../../../assets/img/mapa.JPG";

const Map = () => {
  return (
    <>
      <Image id="mapImage" src={mapImage} alt="mapa" />
      <a
        href="https://goo.gl/maps/cA9MTQhWFDDGjZj8A"
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
