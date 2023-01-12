import VehiculeCard from "@components/VehiculeCard";
import img1 from "../assets/kitt2.jpg";

export default function Home() {
  return (
    <div>
      <img className="w-full" alt="" src={img1} />
      <h2 className="text-4xl font-bold ml-8 mb-4 mt-4">Nos Voitures</h2>
      <VehiculeCard />
    </div>
  );
}
