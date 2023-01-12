import VehiculeProfilCard from "@components/VehiculeProfilCard";
import instance from "@services/apiConnexion";
import React, { useEffect, useState } from "react";

function Profil() {
  const [vehicule, setVehicules] = useState([]);

  useEffect(() => {
    instance
      .get("./vehicule/random")
      .then((res) => setVehicules(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-12 md:flex md:w-full md:content-center">
      <section className=" m-3 mr-3 p-6 md:m-8 md:mt-10 md:mb-5  bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 md:w-1/3 md:h-11/12 md:my-0">
        <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">
          Formulaire Profil
        </h1>
        <form>
          <div className="grid grid-cols-1 ">
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
                Age
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
                pays
              </label>
              <input
                id="pays"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2  focus:outline-none focus:ring "
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> */}
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
