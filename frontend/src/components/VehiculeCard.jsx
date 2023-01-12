import React from "react";
import { Link } from "react-router-dom";

import "./VehiculeCard.css";

function VehiculeCard({ vehicule }) {
  const { id, photo, nameV, film } = vehicule;
  return (
    <Link to={`/vehicules/${id}`} className="pb-2">
      <div className="card w-5/6 md:w-72 border h-72 mx-auto border-black rounded-lg flex flex-col justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-center">{nameV}</h1>
          <h2 className="text-center">{film}</h2>
        </div>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${photo}`}
          alt="car"
          className="objet-cover"
        />
      </div>
    </Link>
  );
}

export default VehiculeCard;
