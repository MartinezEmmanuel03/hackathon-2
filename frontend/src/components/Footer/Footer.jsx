import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-300 text-black">
      <div className="flex flex-col md:flex-row">
        <div className="flex md:w-1/3">
          <div className="flex md:flex-col pl-10 justify-around mt-6">
            <Link to="/">
              <h2 className="text-xl font-bold hover:text-white m-2">
                Nos offres
              </h2>
            </Link>
            <Link to="/">
              <h2 className="text-xl font-bold hover:text-white m-2">
                A propos
              </h2>
            </Link>
            <Link to="/">
              <h2 className="text-xl font-bold hover:text-white m-2">
                Nos véhicules
              </h2>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mb-4 md:w-1/3" />
        <div className=" text-center md:w-1/3 md:text-right md:pr-10">
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
