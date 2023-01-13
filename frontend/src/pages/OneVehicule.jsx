import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

function OneVehicule() {
  const { id } = useParams();
  const [vehicule, setVehicule] = useState([]);
  const { lieu, photo, ficheTech, dateDispo, km, nameV, film } = vehicule;

  useEffect(() => {
    apiConnexion
      .get(`/vehicule/${id}`)
      .then((res) => {
        setVehicule(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="md:flex md:flex-col-reverse">
      <div className="rentButton flex justify-center">
        <button
          type="button"
          className="relative w-36 mt-10 mb-10 h-12 ml-4 overflow-hidden font-semibold rounded-xl bg-gray-700 text-white hover:bg-gray-900"
        >
          Louez moi
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-green-500">
            Dispo
          </span>
        </button>
      </div>
      <div className="vehicule md:flex md:ml-5 md:items-center">
        <div className="vehiculePics md:w-full md:flex md:h-2/3 bg-black">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${photo}`}
            alt="vehicule"
            className="md:w-full"
          />
        </div>
        <div className="description w-screen ml-2 mr-2">
          <h1 className="text-center mt-5 mb-5 font-bold">{nameV}</h1>
          <h2 className="text-center">{film}</h2>
          <ul className="mt-10 md:ml-5 text-center">
            <li className="mb-5">
              <p className="text-start">Description:</p>

              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur error veniam quia quisquam iure. Vitae beatae
                cupiditate veniam, ad tempora ea nihil ex accusamus id dolores
                non molestiae illo amet?
              </p>
            </li>
            <li className="flex justify-between mb-5">
              <p className="text-start">Kilométrage:</p>
              <p>{km}</p>
            </li>
            <li className="flex justify-between mb-5">
              <p className="text-start">Fiche technique:</p>
              <p>{ficheTech}</p>
            </li>
            <li className="flex justify-between mb-5">
              <p className="text-start">Localisation:</p>
              <p>{lieu}</p>
            </li>
            <li className="flex justify-between mb-5">
              <p className="text-start">Dates de disponibilitées:</p>
              <p>{dateDispo}</p>
            </li>
            <li className="mb-5">
              <p className="text-start">Commentaires:</p>
              <p className="text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                mollitia enim quas incidunt sit provident pariatur recusandae
                officia asperiores, iure odio. Unde provident, nam sint dicta
                fugit blanditiis natus fugiat.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OneVehicule;
