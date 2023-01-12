import React from "react";
import img1 from "../assets/jurassic.png";

function CatalogueCard() {
  return (
    <div>
      <div className="w-5/6 md:w-3/12 border mx-auto border-black rounded-lg flex flex-col items-center mb-5">
        <h1 className="text-2xl font-bold text-center">Jurassic Park</h1>
        <h2 className="text-2xl text-center"> Ford Explorer 4X4 </h2>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default CatalogueCard;
