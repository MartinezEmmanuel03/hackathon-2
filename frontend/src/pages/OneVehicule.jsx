import React from "react";

function OneVehicule() {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">NAME</h1>
      <div className="vehicule md:flex md:ml-5">
        <div className="vehiculePics md:w-6/12">
          <img
            src="https://media.discordapp.net/attachments/1022804708122968154/1062762258641469491/latest.png"
            alt="vehicule"
            className="md:w-full"
          />
        </div>
        <div className="description">
          <ul className="mt-10 md:ml-5">
            <li className="mb-5">Availablity:</li>
            <li className="mb-5">Description:</li>
            <li className="mb-5">Kilometer:</li>
            <li className="mb-5">Technical sheet:</li>
            <li className="mb-5">Location:</li>
            <li className="mb-5">Availablity dates:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OneVehicule;
