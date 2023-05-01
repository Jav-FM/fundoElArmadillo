import "../App.scss";
import { Routes, Route } from "react-router-dom";
import { CustomNavbar } from "../components/common/CustomNavbar";
import { CustomFooter } from "../components/common/CustomFooter";
import { Home } from "../domain/Home";
import MuchasGracias from "../domain/MuchasGracias";

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
      </Routes>
    </div>
  );
};

export default App;
