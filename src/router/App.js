import "../App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { CustomNavbar } from "../components/common/CustomNavbar";
import { CustomFooter } from "../components/common/CustomFooter";
import { Home } from "../domain/Home";
import MuchasGracias from "../domain/MuchasGracias";
import LandingPage from "../domain/LandingPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CustomNavbar />
              <div id="main">
                <Home />
              </div>
              <CustomFooter />
            </>
          }
        />
        <Route path="/gracias" element={<MuchasGracias />} />
        <Route path="/promo-invierno" element={<LandingPage />} />
        <Route
          path="/promo-verano"
          element={<Navigate to="/promo-invierno" />}
        />
      </Routes>
      <a
        href="https://wa.me/56923856973"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default App;
