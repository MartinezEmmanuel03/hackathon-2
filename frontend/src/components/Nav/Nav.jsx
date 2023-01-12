import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/logo.svg";
import "./Nav.css";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="absolute flex flex-wrap items-center justify-between px-2 pl-3 pr-0 bg-transparent w-full">
        <div className="container ps-12 mx-auto flex justify-end flex-wrap items-center md:justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-xl font-bold leading-relaxed inline-block ml-4 py-2 whitespace-nowrap uppercase text-white"
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
              <span className="text-sm flex justify-end">MENU</span>
            </button>
          </div>
          <div
            className={`lg:flex justify-end${
              navbarOpen ? " flex-col" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <Link
              to="/vehicules"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span className="ml-2 md:text-xl">Catalogue</span>
            </Link>
            <Link
              to="/profil"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />

              <span className="ml-2 md:text-xl">Profil</span>
            </Link>

            <Link
              to="/page3"
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span className="ml-2 md:text-xl">Page3</span>
            </Link>
            <Link
              to="/Dashboard/Information"
              className="px-3 py-2 md:pr-8 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
              <span className="ml-2 md:text-xl">Dashboard</span>
            </Link>
            <Link to="/login">
              <img
                className="inline place-content-center m-1"
                src={Logo}
                alt="login"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
