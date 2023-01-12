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
    <div className="pt-16 bg-gray-200">
      <div className="flex md:justify-evenly">
        <h1 className="text-center text-2xl mb-5 mr-auto font-bold  mt-20">
          Nos Véhicules
        </h1>
        <SearchBarVehicules />
      </div>
      <div className="ourVehicules md:flex md:flex-wrap md:justify-center md:gap-10">
        {vehicules.map((vehicule) => (
          <VehiculeCard vehicule={vehicule} />
        ))}
      </div>
    </div>
  );
}

export default AllVehicules;
