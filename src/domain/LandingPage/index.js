import "./LandingPage.scss";
import { Button, Spinner, Alert } from "react-bootstrap";
import logoArmadillo from "../../assets/img/logo_negro.png";
import logoFulcrum from "../../assets/img/logo-fulcrum.png";
import landingPoster from "../../assets/img/landing-page-poster.png";
import { Formulario } from "../../components/common/Formulario";
import { useState } from "react";
import { Map } from "../../components/common/Map";

const LandingPage = () => {
  const [onCharge, setOnCharge] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div id="landingPage">
      <img id="logoFulcrum" src={logoFulcrum} alt="logo_fulcrum" />
      <img id="logoArmadillo" src={logoArmadillo} alt="logo_armadillo" />
      <div id="contentContainer">
        <h2>Venta Online - Stock Limitado</h2>
        <h4>
          Sólo 7 unidades a 20M pagando al contado
          <br />
          compra con 50% de descuento sobre tasación
        </h4>
        <h5>
          *Precio sólo sobre unidades seleccionadas. ** Tasación referencial
          39M.
        </h5>
        <img id="landingPoster" src={landingPoster} alt="landing_poster" />
        <a href="#landingcontacto">
          <Button className="mt-2" variant="dark" size="lg">
            Quiero información para comprar
          </Button>
        </a>
        <a id="locationButton" href="#landingubicacion">
          <Button className="mt-2" variant="dark" size="lg">
            Ver ubicación
          </Button>
        </a>
        <h3 className="subtitle">Revisa las unidades seleccionadas</h3>
        <h4>9 - 17 - 32 - 43 - 51 - 52 - 56</h4>
        <a
          href="https://digitaldesign.cl/360/Santa_Elena/tour.html"
          rel="noreferrer"
          target="_blank"
        >
          <Button variant="dark" size="lg">
            Ver Masterplan
          </Button>
        </a>
        <h3 className="subtitle" id="landingcontacto">
          Contacto
        </h3>
        {error && (
          <Alert key={"danger"} variant={"danger"}>
            Hubo un error al enviar tu mensaje, por favor inténtalo nuevamente
          </Alert>
        )}

        {onCharge ? (
          <Spinner animation="border" variant="dark" id="spinner" />
        ) : (
          <div id="formContainer">
            <Formulario setOnCharge={setOnCharge} setError={setError} />
          </div>
        )}
        <h3 className="subtitle" id="landingubicacion">
          Ubicación
        </h3>
        <h4>
          Conoce la ubicación privilegiada de Fundo Armadillo,
          <br /> a 20 minutos de Coyhaique.
        </h4>
        <div id="mapContainer">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
