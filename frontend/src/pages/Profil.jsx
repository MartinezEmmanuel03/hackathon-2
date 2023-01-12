import React from "react";

function Profil() {
  return (
    <div className="pt-12 md:flex md:w-full md:content-center">
      <section className="formprofil m-3 mr-3 p-6 md:m-8 md:mt-10 w-2/5 bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 md:w-1/3 md:h-11/12 md:my-0">
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Profil;
