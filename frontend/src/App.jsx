import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "@components/Nav/Nav";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import Dashboard from "@pages/Layout/Dashboard";
import Information from "@pages/Back-office/Information";
import Commentary from "@pages/Back-office/Commentary";
import Rental from "@pages/Back-office/Rental";
import OneVehicule from "@pages/OneVehicule";
import Footer from "@components/Footer/Footer";

import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/vehicule" element={<OneVehicule />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Information" element={<Information />} />
          <Route path="Commentary" element={<Commentary />} />
          <Route path="Rental" element={<Rental />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
