import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page3 from "@pages/Page3";
import Dashboard from "@pages/Layout/Dashboard";
import PublicLayout from "@pages/Layout/PublicLayout";
import Information from "@pages/Back-office/Information";
import Commentary from "@pages/Back-office/Commentary";
import Rental from "@pages/Back-office/Rental";
import Profil from "@pages/Profil";
import AllVehicules from "@pages/AllVehicules";

import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="vehicules" element={<AllVehicules />} />
          <Route path="profil" element={<Profil />} />
          <Route path="page3" element={<Page3 />} />
        </Route>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Information" element={<Information />} />
          <Route path="Commentary" element={<Commentary />} />
          <Route path="Rental" element={<Rental />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
