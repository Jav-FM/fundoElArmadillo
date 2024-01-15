import React, { useState } from "react";
import { Image, Alert, Spinner } from "react-bootstrap";
import "./Contacto.scss";
import imagenContacto from "../../../assets/img/imagen-contacto.jpg";
import { BrochureLink } from "../../common/BrochureLink";
import { Formulario } from "../../common/Formulario";

const Contacto = () => {
  const [onCharge, setOnCharge] = useState(false);
  const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);

  return (
    <section id="contacto" className="container">
      <div id="contactoTitleConteinar">
        <h2>Contacto</h2>
        <BrochureLink />
      </div>
      {/* {success && (
        <Alert key={"success"} variant={"success"}>
          Tu mensaje fue enviado con éxito, pronto te contactaremos.
        </Alert>
      )} */}
      {error && (
        <Alert key={"danger"} variant={"danger"}>
          Hubo un error al enviar tu mensaje, por favor inténtalo nuevamente
        </Alert>
      )}
      <div id="contentContainer">
        <div id="formContainer">
          {onCharge ? (
            <Spinner animation="border" variant="dark" id="spinner" />
          ) : (
            <Formulario
              setOnCharge={setOnCharge}
              setError={setError}
              showWhenField={true}
            />
          )}
        </div>
        <div id="imageContainer">
          <Image
            id="imagenContacto"
            src={imagenContacto}
            alt="Imagen contacto"
          />
        </div>
      </div>
    </section>
  );
};

export { Contacto };
