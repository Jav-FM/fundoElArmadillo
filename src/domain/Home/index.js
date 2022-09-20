import React from "react";
import { Button } from "react-bootstrap";
import "./Home.scss";
import { Proyecto } from "../Proyecto";
import { Caracteristicas } from "../Caracteristicas";
import homeVideo from "../../assets/video/juanovideo.mp4";

const Home = () => {
  return (
    <React.Fragment>
      <div id="home" className="container">
        <video id="background-video" autoPlay loop muted>
          <source src={homeVideo} />
        </video>
        <h1 id="title">
          <span style={{ fontSize: 100 }}>Fundo</span>
          <br />
          El Armadillo
        </h1>
        <h4 id="subtitle">Tesoro de la Patagonia</h4>
        <Button className="homeButton" variant="outline-light" size="lg">
          Más información
        </Button>
        <Button className="homeButton" variant="dark" size="lg">
          Contáctanos
        </Button>
        <div id="homeCardsContainer" className="container">
          <div className="homeCard">
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo necessitatibus perferendis expedita enim, ut dicta unde
              temporibus ducimus dignissimos! Animi possimus nulla voluptatibus
              doloremque velit magni minus consectetur cumque distinctio.
            </p>
          </div>
          <div className="homeCard">
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo necessitatibus perferendis expedita enim, ut dicta unde
              temporibus ducimus dignissimos! Animi possimus nulla voluptatibus
              doloremque velit magni minus consectetur cumque distinctio.
            </p>
          </div>
          <div className="homeCard">
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo necessitatibus perferendis expedita enim, ut dicta unde
              temporibus ducimus dignissimos! Animi possimus nulla voluptatibus
              doloremque velit magni minus consectetur cumque distinctio.
            </p>
          </div>
        </div>
      </div>
    <Proyecto />
    <Caracteristicas />
    </React.Fragment>
  );
};

export { Home };
