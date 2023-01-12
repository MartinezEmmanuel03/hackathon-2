import React from "react";
import { Link } from "react-router-dom";

function VehiculeCard({ vehicule }) {
  const { id, photo, nameV, film } = vehicule;
  return (
    <Link to={`/vehicules/${id}`}>
      <div className=" mb-5 w-5/6 md:w-3/12 border mx-auto md:mx-none border-black rounded-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">{nameV}</h1>
        <h2>{film}</h2>
        <img src={`${import.meta.env.VITE_BACKEND_URL}/${photo}`} alt="" />
      </div>
    </Link>
  );
}

export default VehiculeCard;
