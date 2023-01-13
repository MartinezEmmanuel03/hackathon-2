import { Link } from "react-router-dom";

export default function NavP() {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col h-screen px-6 py-5 border-b justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-5">
            <Link
              to="Information"
              className="flex hover:text-amber-500 focus:text-amber-500 text-white px-3 py-2 w-full"
            >
              <p className="text-base leading-4">Information</p>
            </Link>
            <Link
              to="Commentary"
              className="flex hover:text-amber-500 focus:text-amber-500 text-white px-3 py-2 w-full"
            >
              <p className="text-base leading-4">Commentary</p>
            </Link>
            <Link
              to="AddVehicule"
              className="flex hover:text-amber-500 focus:text-amber-500 text-white px-3 py-2 w-full"
            >
              <p className="text-base leading-4">Ajouter un véhicule</p>
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/"
            className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2  w-full"
          >
            <p className="text-base leading-4">Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
