import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page1 from "@pages/Page1";
import Dashboard from "@pages/Layout/Dashboard";
import PublicLayout from "@pages/Layout/PublicLayout";
import Information from "@pages/Back-office/Information";
import Commentary from "@pages/Back-office/Commentary";
import AddVehicule from "@pages/Back-office/AddVehicule";
import Profil from "@pages/Profil";
import AllVehicules from "@pages/AllVehicules";
import Connexion from "@components/Connexion";
import Page404 from "@pages/Page404";
import OneVehicule from "@pages/OneVehicule";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="profil" element={<Profil />} />
          <Route path="vehicules/:id" element={<OneVehicule />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Information" element={<Information />} />
          <Route path="Commentary" element={<Commentary />} />
          <Route path="AddVehicule" element={<AddVehicule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
