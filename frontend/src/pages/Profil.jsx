import VehiculeProfilCard from "@components/VehiculeProfilCard";
import instance from "@services/apiConnexion";
import React, { useEffect, useState } from "react";

function Profil() {
  const [vehicule, setVehicule] = useState([]);

  useEffect(() => {
    instance
      .get("./vehicule/random")
      .then((res) => setVehicule(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-12 md:flex md:w-full md:content-center">
      <section className=" ml-5 mr-5 mt-5 mb-5 p-6 md:m-8 md:mt-10 md:mb-5 bg-gray-600 rounded-md shadow-md dark:bg-gray-800 md:w-1/3 md:h-11/12 md:my-0">
        <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">
          Formulaire Profil
        </h1>
        <form>
          <div className="grid grid-cols-1">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="nom">
                Nom
              </label>
              <input
                id="nom"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="prenom">
                Prénom
              </label>
              <input
                id="prenom"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="age">
                Âge
              </label>
              <input
                id="age"
                type="date"
                required
                className="block  w-full px-4 py-2 mt-2  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="adresse"
              >
                Adresse
              </label>
              <input
                id="adresse"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="code-postal"
              >
                Code postal
              </label>
              <input
                id="code-postal"
                type="number"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="ville">
                Ville
              </label>
              <input
                id="ville"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring "
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="pays">
                Pays
              </label>
              <input
                id="pays"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring "
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="telephone"
              >
                Téléphone
              </label>
              <input
                id="telephone"
                type="number"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring "
              />
            </div>
            <div className="justify-center mt-6">
              <button
                type="button"
                className="w-32 ml-20 bg-gray-500 mt-5 rounded-md md:bg-gray-500  hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4 md:w-64"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </section>
      <div className="md:flex ">
        <div className=" md:mb-5 md:mt-20 md:ml-80">
          {vehicule.map((vehicules) => (
            <VehiculeProfilCard vehicule={vehicules} key={vehicules.id} />
          ))}
        </div>
        <div className="md:mb-5 md:mt-20" />
      </div>
    </div>
  );
}

export default Profil;
