import "./BrochureLink.scss";
import { downloadBrochure } from "../../../utils/commonFunctions";

const BrochureLink = ({ color = "black" }) => {
  const colorClass = color === "white" ? "whiteClass" : "blackClass";

  return (
    <a id="brochureLink" class={colorClass} onClick={downloadBrochure}>
      Descargar Brochure
    </a>
  );
};

export { BrochureLink };
