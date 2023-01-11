import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="absolute flex flex-wrap items-center justify-between px-2 py-3 bg-transparent w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Home
            </Link>
            <button
              className="btn text-white cursor-pointer text-xl leading-none px-1 pb-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="icon pb-4">
                <svg viewBox="0 0 175 80" width="40" height="40">
                  <rect width="80" height="15" fill="#f0f0f0" rx="10" />
                  <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10" />
                  <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10" />
                </svg>
              </span>
              <span className="text">MENU</span>
            </button>
          </div>
          <div
            className={`lg:flex justify-end${navbarOpen ? " flex" : " hidden"}`}
            id="example-navbar-danger"
          >
            <Link
              to="/page1"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span className="ml-2">Page1</span>
            </Link>
            <Link
              to="/profil"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span className="ml-2">Profil</span>
            </Link>

            <Link
              to="/page3"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span className="ml-2">Page3</span>
            </Link>
            <Link
              to="/Dashboard/Information"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span className="ml-2">Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
