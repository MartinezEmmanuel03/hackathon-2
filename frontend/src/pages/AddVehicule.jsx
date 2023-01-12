import React from "react";
import img1 from "../assets/jurassic.png";

function AddVehicule() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={img1} alt="vehicule" className="w-10/12 h-52 mt-5 md:w-44" />
      </div>
      <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
        <p>Name:</p>
        <input type="text" className="border-black rounded" />
      </div>
      <div className="name flex justify-between ml-2 mr-2 mb-5">
        <p>Kilometer:</p>
        <input type="text" className="border-black rounded" />
      </div>
      <div className="name flex justify-between ml-2 mr-2 mb-5">
        <p>Technical sheet:</p>
        <textarea type="text" className="border-black rounded" />
      </div>
      <div className="name flex justify-between ml-2 mr-2 mb-5">
        <p>Availablity dates:</p>
        <input type="text" className="border-black rounded" />
      </div>
      <div className="name flex justify-between ml-2 mr-2 mb-5">
        <select>
          <option value="Available">Available</option>
          <option value="Not available">Not available</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-gray-900 rounded-full text-white w-32 mt-5 mb-2"
        >
          Delete vehicule
        </button>
      </div>
    </div>
  );
}

export default AddVehicule;
