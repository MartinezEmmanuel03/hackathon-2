import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import Page3 from "@pages/Page3";
import Page4 from "@pages/Page4";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
