import React from "react";
import "./Caracteristicas.scss";
import { BsFillTreeFill } from "react-icons/bs";
import { GoogleMap } from "./GoogleMap";

const Caracteristicas = () => {
  return (
    <section id="caracteristicas" className="container">
      <h2 id="title">Características y Ubicación</h2>
      <div id="contentContainer">
        <GoogleMap />
        <div id="caracteristicasContainer">
          <div className="caracteristicaContainer">
            <h4 className="caracteristicaIcon">
              <BsFillTreeFill />
            </h4>
            <h5>CARACTERISTICA ASDASDSA DASD ASDASDASD ASDASD</h5>
          </div>
          <div className="caracteristicaContainer">
            <h4 className="caracteristicaIcon">
              <BsFillTreeFill />
            </h4>
            <h5>CARACTERISTICA ASDASDSA DASD ASDASDASD ASDASD</h5>
          </div>
          <div className="caracteristicaContainer">
            <h4 className="caracteristicaIcon">
              <BsFillTreeFill />
            </h4>
            <h5>CARACTERISTICA ASDASDSA DASD ASDASDASD ASDASD</h5>
          </div>
          <div className="caracteristicaContainer">
            <h4 className="caracteristicaIcon">
              <BsFillTreeFill />
            </h4>
            <h5>CARACTERISTICA ASDASDSA DASD ASDASDASD ASDASD</h5>
          </div>
          <div className="caracteristicaContainer">
            <h4 className="caracteristicaIcon">
              <BsFillTreeFill />
            </h4>
            <h5>CARACTERISTICA ASDASDSA DASD ASDASDASD ASDASD</h5>
          </div>
          <div className="caracteristicaContainer">
            <h4 className="caracteristicaIcon">
              <BsFillTreeFill />
            </h4>
            <h5>CARACTERISTICA ASDASDSA DASD ASDASDASD ASDASD</h5>
          </div>
          <div className="caracteristicaContainer">
            <h4 className="caracteristicaIcon">
              <BsFillTreeFill />
            </h4>
            <h5>CARACTERISTICA ASDASDSA DASD ASDASDASD ASDASD</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Caracteristicas };
