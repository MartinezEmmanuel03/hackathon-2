import React from "react";
import img1 from "../assets/jurassic.png";

function VehiculeCard() {
  return (
    <div className="w-5/6 md:w-3/12 border mx-auto border-black rounded-lg flex flex-col items-center mb-5">
      <h1 className="text-2xl font-bold text-center">
        Ford Explorer 4X4 Jurassic Park
      </h1>
      <img src={img1} alt="" />
      <button
        type="button"
        className="text-lg font-bold bg-black text-white w-full "
      >
        Voir plus
      </button>
    </div>
  );
}

export default VehiculeCard;
