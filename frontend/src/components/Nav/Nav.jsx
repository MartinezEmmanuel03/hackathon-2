import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/Dashboard/Information">Dashboard</Link>
      <Link to="/page4">Page4</Link>
    </div>
  );
}

export default Nav;
