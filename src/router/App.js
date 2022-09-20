import "../App.scss";
import { Routes, Route } from "react-router-dom";
import { CustomNavbar } from "../utils/elements/CustomNavbar";
import { Home } from "../domain/Home";

const App = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
