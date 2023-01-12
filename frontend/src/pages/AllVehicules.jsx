import React, { useState, useEffect } from "react";
import VehiculeCard from "@components/VehiculeCard";

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
    <div>
      <h1 className="text-center text-2xl mt-5 mb-5 font-bold">
        Nos Véhicules
      </h1>
      <div className="ourVehicules">
        {vehicules.map((vehicule) => (
          <VehiculeCard vehicule={vehicule} key={vehicule.nameV} />
        ))}
      </div>
    </div>
  );
}

export default AllVehicules;