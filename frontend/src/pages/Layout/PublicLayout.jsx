import { Outlet } from "react-router-dom";
import Nav from "@components/Nav/Nav";
import Footer from "@components/Footer/Footer";

function PublicLayout() {
  return (
    <div className="">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
