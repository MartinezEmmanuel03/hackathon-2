import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "@services/apiConnexion";
import VehiculeCard from "@components/VehiculeCard";
import icon1 from "@assets/loupe.png";
import img1 from "../assets/kitt2.jpg";
import "@pages/home.css";

export default function Home() {
  const [vehicules, setVehicules] = useState([]);

  useEffect(() => {
    instance
      .get("./vehicule/random")
      .then((res) => setVehicules(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-center bg-gray-100 pb-3">
      <div className="w-full flex justify-center">
        <div className="absolute bottom-3/4 md:bottom-1/4 flex flex-col justify-center">
          <h2 className="text-center text-white md:text-4xl">
            Mettez une voiture de rêve dans votre vie
          </h2>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="rounded bg-white text-black w-1/2 font-bold md:text-4xl md:mt-8 md:hidden"
            >
              Reservez
            </button>
            <form className="md:flex items-end mt-4 w-screen justify-center hidden">
              <input
                type="text"
                placeholder="Adresse de départ et de retour"
                className="w-1/4 rounded-lg ml-4 pl-2 text-xl"
              />
              <input
                type="date"
                name="Date_depart"
                placeholder="Date de départ"
                className="w-1/4 rounded-lg ml-4 pl-2 text-xl"
              />
              <input
                type="date"
                name="Date_retour"
                placeholder="Date de retour"
                className="w-1/4 rounded-lg ml-4 pl-2 text-xl"
              />
              <button
                type="submit"
                className="bg-white rounded-full w-8 h-8 flex justify-center items-center ml-2"
              >
                <img className="h-4" alt="loupe" src={icon1} />
              </button>
            </form>
          </div>
        </div>
        <img className="w-full" alt="" src={img1} />
      </div>
      <h2 className="md:text-3xl font-bold mb-4 mt-4 text-center">
        Ces voitures vous ont toujours fait rêver? Ne cherchez pas plus loin!
        Nous les avons!
      </h2>
      <div className="md:flex md:justify-around md:w-5/6 md:mx-auto">
        {vehicules.map((vehicule) => (
          <VehiculeCard vehicule={vehicule} key={vehicule.id} />
        ))}
      </div>
      <Link to="/vehicules" className="">
        <div className="button learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
          </span>
          <span className="button-text">Voir tout</span>
        </div>
      </Link>
    </div>
  );
}
