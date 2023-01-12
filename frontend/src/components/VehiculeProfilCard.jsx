import React from "react";
import img1 from "../assets/jurassic.png";

function VehiculeProfilCard() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg md:justify-center md:flex-wrap">
        <img
          className=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={img1}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <p className="text-gray-700 text-base mb-4">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Nom de la voiture :
            </h5>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            <textarea
              id="commentaire"
              type=""
              required
              placeholder="Commentaire"
              className="block w-full h-32 px-4 py-2 mt-2  bg-white border border-gray-300 rounded-md -300 dark:border-gray-600 focus:border-blue-500  focus:outline-none focus:ring md:h-40"
            />
          </p>
          <p className="text-gray-600 text-xs" />
        </div>
      </div>
    </div>
  );
}

export default VehiculeProfilCard;
