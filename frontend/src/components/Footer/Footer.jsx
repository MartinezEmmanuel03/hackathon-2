import React from "react";
import { Link } from "react-router-dom";
import linkedin from "@assets/linkedin.png";
import twitter from "@assets/twitter.png";
import facebook from "@assets/facebook.png";
import youtube from "@assets/youtube.png";
import instagram from "@assets/instagram.png";

function Footer() {
  return (
    <div className="bg-gray-300 text-black">
      <div className="flex flex-col  md:flex-row">
        <div className="flex  md:w-1/2">
          <div className="flex  md:flex-col pl-12 justify-around mt-6">
            <Link to="/">
              <h2 className="  text-base md:text-xl font-bold hover:text-white m-2">
                Accueil
              </h2>
            </Link>
            <Link to="/profil">
              <h2 className="text-base md:text-xl font-bold hover:text-white m-2">
                Profil
              </h2>
            </Link>
            <Link to="/catalogue">
              <h2 className="text-base md:text-xl font-bold hover:text-white m-2">
                Catalogue
              </h2>
            </Link>
            <Link to="/dashboard">
              <h2 className=" text-base md:text-xl font-bold hover:text-white m-2">
                Administration
              </h2>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-8">
          <a href="https://www.linkedin.com">
            <img
              src={linkedin}
              alt="logo linkedin"
              className="w-12 m-3 lg:m-5"
            />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="logo twitter" className="w-12 m-3 lg:m-5" />
          </a>
          <a href="https://www.facebook.com">
            <img
              src={facebook}
              alt="logo facebook"
              className="w-12 m-3 lg:m-5"
            />
          </a>
          <a href="https://www.youtube.com">
            <img src={youtube} alt="logo youtube" className="w-12 m-3 lg:m-5" />
          </a>
          <a href="https://www.instagram.com">
            <img
              src={instagram}
              alt="logo instagram"
              className="w-12 m-3 lg:m-5"
            />
          </a>
        </div>
        <div className="flex flex-row justify-center items-center mb-4 md:w-1/3" />
        <div className=" text-center md: md:text-right md:pr-10">
          <p className="font-bold text-xl mt-10">Contact</p>
          <div className="mb-7 font-medium">
            <br />
            Tél. 08 20 30 45 78
            <br />
            Mail : fr
            <br />
            Adresse : 1 rue des Acacias 78000
            <br />
            Versailles – France
          </div>
        </div>
      </div>
      <p className="text-center font-medium">
        Copyright - 2022 - Tous droits réservés
      </p>
    </div>
  );
}

export default Footer;
