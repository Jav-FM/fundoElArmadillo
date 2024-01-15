import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "./Formulario.scss";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Formulario = ({ setOnCharge, setError, showWhenField }) => {
  const form = useRef();

  const navigate = useNavigate();
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cellphoneRegex = /^(\+56)(\s?)(0?9)(\s?)[98765432]\d{7}$/;

  const onSubmit = (e) => {
    setOnCharge(true);
    try {
      emailjs
        .sendForm(
          "service_r2k4pev",
          "template_hrmcmbh",
          form.current,
          "HuYmnh6BR78QRlI2p"
        )
        .then(
          (result) => {
            reset();
            setOnCharge(false);
            navigate("/gracias");
            // setSuccess(true);
            // setTimeout(() => {
            //   setSuccess(false);
            // }, 5000);
          },
          (error) => {
            setOnCharge(false);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 5000);
          }
        );
    } catch {
      setOnCharge(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} id="form">
      <Form.Group className="mb-3">
        <Form.Label>Nombre y apellido *</Form.Label>
        <Controller
          rules={{ required: "Este campo es requerido" }}
          name="user_name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              {...field}
              name="user_name"
              type="text"
              placeholder="Ingresa tu nombre y apellido"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="user_name"
          render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico *</Form.Label>
        <Controller
          rules={{
            required: true,
            pattern: emailRegex,
          }}
          name="user_email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              {...field}
              name="user_email"
              type="text"
              placeholder="Ingresa tu correo"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="user_email"
          render={() => (
            <p style={{ color: "red" }}>
              {errors?.user_email?.type === "required"
                ? "Este campo es requerido"
                : "Ingresa un correo válido"}
            </p>
          )}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono de contacto *</Form.Label>
        <Controller
          rules={{
            required: true,
            pattern: cellphoneRegex,
          }}
          name="user_phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              {...field}
              name="user_phone"
              type="text"
              placeholder="Ingresa un teléfono de contacto"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="user_phone"
          render={() => (
            <p style={{ color: "red" }}>
              {errors?.user_phone?.type === "required"
                ? "Este campo es requerido"
                : "Ingresa un número de celular chileno válido (incluye +56)"}
            </p>
          )}
        />
      </Form.Group>
      {showWhenField && (
        <Form.Group className="mb-3">
          <Form.Label>¿Cuándo tienes pensado comprar? *</Form.Label>
          <Controller
            rules={{ required: "Este campo es requerido" }}
            name="user_when"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Select
                {...field}
                name="user_when"
                aria-label="¿Cuándo tienes pensado comprar?"
              >
                <option value=""></option>
                <option value="Quiero agendar una visita">
                  Quiero agendar una visita
                </option>
                <option value="Este mes">Este mes</option>
                <option value="En los próximos 3 meses">
                  En los próximos 3 meses
                </option>
                <option value="Aún no lo tengo definidos">
                  Aún no lo tengo definido
                </option>
              </Form.Select>
            )}
          />
          <ErrorMessage
            errors={errors}
            name="user_when"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Mensaje *</Form.Label>
        <Controller
          rules={{ required: "Este campo es requerido" }}
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Form.Control
              {...field}
              name="message"
              type="text"
              as="textarea"
              rows={4}
              placeholder="Ingresa aquí tu mensaje"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
        />
      </Form.Group>
      <div id="buttonContainer">
        <Button size="lg" variant="dark" type="submit" id="formButton">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export { Formulario };
