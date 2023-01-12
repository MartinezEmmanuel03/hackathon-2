import VehiculeCard from "@components/VehiculeCard";
import icon1 from "@assets/loupe.png";
import img1 from "../assets/kitt2.jpg";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="absolute bottom-3/4 md:bottom-1/4 flex flex-col justify-center">
          <h2 className="text-center text-white md:text-4xl">
            Mettez une voiture de rêve dans votre vie
          </h2>
          <div className="flex justify-center">
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
                placeholder="Date de départ"
                className="w-1/4 rounded-lg ml-4 pl-2 text-xl"
              />
              <input
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
        Nous lesavons!
      </h2>
      <VehiculeCard />
    </div>
  );
}
