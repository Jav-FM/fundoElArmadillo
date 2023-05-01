import "./MuchasGracias.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MuchasGracias = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div id="muchasGracias">
      <div id="contentContainer">
        <h2>Muchas gracias</h2>
        <h4>Estás un paso más cerca de tu parcela en la Patagonia.</h4>
        <h4>Te contactaremos a la brevedad.</h4>
        <Button
          onClick={handleGoBack}
          className="homeButton"
          variant="dark"
          size="lg"
        >
          Volver
        </Button>
      </div>
    </div>
  );
};

export default MuchasGracias;
