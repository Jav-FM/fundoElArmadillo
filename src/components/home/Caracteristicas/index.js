import React from "react";
import "./Caracteristicas.scss";
import { BsFillTreeFill } from "react-icons/bs";
import { BrochureLink } from "../../common/BrochureLink";
import { Map } from "../../common/Map";

const Caracteristicas = () => {
  const features = [
    { text: "A 20 minutos del aeropuerto de Balmaceda" },
    { text: "Entrega inmediata" },
    { text: "Parcelas desde 5000 m2" },
    { text: "Acceso en cualquier tipo de vehículo" },
    { text: "Parcelas con orilla de camino y vistas privilegiadas" },
    { text: "Topografía plana y semiplana" },
    { text: "Factibilidad real de Agua y Electricidad (poste)" },
    { text: "A 15 minutos de más de 6 lagos de la región" },
    { text: "A 25 minutos de la ciudad de Coyhaique. (Sector Valle Simpson)" },
    { text: "A 60 Minutos de Parque Nacional Cerro Castillo" },
    { text: " 90 minutos de Puerto Ingeniero Ibañes" },
  ];

  return (
    <section id="caracteristicas" className="container">
      <h2 id="title">Características y Ubicación</h2>
      <BrochureLink />
      <div id="contentContainer">
        <div id="mapContainer">
          <Map />
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
