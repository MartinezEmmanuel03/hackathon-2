import React from "react";

function VehiculeProfilCard({ vehicule }) {
  const { photo, nameV } = vehicule;

  return (
    <div className="flex justify-center md:mb-5">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg md:justify-center md:flex-wrap">
        <img
          className=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded "
          src={`${import.meta.env.VITE_BACKEND_URL}/${photo}`}
          alt="car"
        />
        <div className="p-6 flex flex-col justify-start">
          <p className="text-gray-700 text-base mb-4">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{nameV}</h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Rerum
            voluptatem vero ut molestias expedita temporibus, qui distinctio,
            laudantium iusto culpa cumque. Expedita omnis dicta consectetur
            eveniet blanditiis, voluptatem atque nisi?
            <textarea
              id="commentaire"
              type=""
              required
              placeholder="Commentaire"
              className="block w-full h-32 px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md -300 dark:border-gray-600 focus:border-blue-500  focus:outline-none focus:ring md:h-40"
            />
          </p>
          <p className="text-gray-600 text-xs" />
          <button
            type="button"
            className="rounded-md border-r w-32 m-auto bg-gray-500  hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4 "
          >
            envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default VehiculeProfilCard;
