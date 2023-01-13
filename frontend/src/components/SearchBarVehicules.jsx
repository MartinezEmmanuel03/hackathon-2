import React, { useState, useEffect } from "react";
import apiConnexion from "../services/apiConnexion";

function SearchBarVehicules() {
  const [vehicules, setVehicules] = useState();
  const [searchVehicules, setSearchVehicules] = useState("");

  useEffect(() => {
    if (searchVehicules !== "") {
      apiConnexion
        .get(`/vehicules/?searchVehicules=${searchVehicules}`)
        .then((res) => {
          setSearchVehicules(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      setVehicules();
    }
  }, [searchVehicules]);

  const handleSearchVehicules = (e) => {
    const { value } = e.target;
    setSearchVehicules(value);
  };

  return (
    <div>
      <div className="searchBar">
        <input
          className="rounded-lg w-full border-gray-900"
          type="text"
          onChange={handleSearchVehicules}
        />
      </div>
      <div className="searchResults absolute">
        {vehicules &&
          vehicules.map((vehicule) => {
            return (
              <button
                type="button"
                className="searchResult flex w-full bg-gray-300 p-2"
                key={vehicule.id}
              >
                {vehicule.film}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBarVehicules;
