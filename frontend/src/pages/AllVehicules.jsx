import React, { useState, useEffect } from "react";
import VehiculeCard from "@components/VehiculeCard";
import SearchBarVehicules from "@components/SearchBarVehicules";

import apiConnexion from "../services/apiConnexion";

function AllVehicules() {
  const [vehicules, setVehicules] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/vehicules`)
      .then((res) => {
        setVehicules(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center ">
        <h1 className="text-center text-2xl mb-5 font-bold  mt-20">
          Nos Véhicules
        </h1>
        <div className="w-6/12 md:w-3/12 mb-5">
          <SearchBarVehicules />
        </div>
      </div>
      <div className="ourVehicules md:flex md:flex-wrap md:justify-center md:gap-10 bg-gray-200">
        {vehicules.map((vehicule) => (
          <VehiculeCard vehicule={vehicule} />
        ))}
      </div>
    </div>
  );
}

export default AllVehicules;
