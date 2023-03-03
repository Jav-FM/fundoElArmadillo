import React from "react";
import { Button, Image } from "react-bootstrap";
import "./Caracteristicas.scss";
import { BsFillTreeFill } from "react-icons/bs";
import mapImage from "../../assets/img/mapa.JPG";

const Caracteristicas = () => {
  const features = [
    { text: "Rol propio" },
    { text: "Parcelas desde 5000 m2" },
    { text: "Autorizadas acorde a normativa legal" },
    { text: "Fácil Acceso" },
    { text: "Parcelas con orilla de camino" },
    { text: "Terrenos con vistas privilegiadas" },
    { text: "Topografía plana y semiplana" },
    { text: "Factibilidad real de Agua y Electricidad (poste)" },
    { text: "Ubicado a 30 minutos del aeropuerto de Balmaceda. " },
    { text: "A 25 minutos de la ciudad de Coyhaique. (Sector Valle Simpson) " },
    { text: "A 60 Minutos de Parque Nacional Cerro Castillo" },
    { text: " 90 minutos de Puerto Ingeniero Ibañes " },
    {
      text: "Zona de Internacional de Pesca: Lago Elizalde, La Paloma, Lago  Caro",
    },
    { text: "A 3 minutos del río Simpson" },
    { text: "Carretera Austral" },
  ];

  return (
    <section id="caracteristicas" className="container">
      <h2 id="title">Características y Ubicación</h2>
      <div id="contentContainer">
        <div id="mapContainer">
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
        </div>
        <div id="caracteristicasContainer">
          {features.map((f, i) => (
            <div key={i} className="caracteristicaContainer">
              <h4 className="caracteristicaIcon">
                <BsFillTreeFill />
              </h4>
              <h5>{f.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Caracteristicas };
