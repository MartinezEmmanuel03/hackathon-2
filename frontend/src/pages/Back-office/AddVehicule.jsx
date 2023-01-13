import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "@services/apiConnexion";
import "react-toastify/dist/ReactToastify.css";
import "@pages/Back-office/AddVehicule.css"

const toastifyConfig = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

function AddVehicule() {
const avatar = "";
const [vehicule, setVehicule] = useState({
  lieu: "",
  dateDispo: "",
  disp: "1",
  typeV: "",
  prix: "",
  nameV: "",
  film: "",
  km: "",
  id_users: "3",
});

const handleClick = event => {
  inputRef1.current.click();
};
const handleClick2 = event => {
  inputRef2.current.click();
};

const handleVehicule = (place, value) => {
  const newVehicule = { ...vehicule };
  newVehicule[place] = value;
  setVehicule(newVehicule);
};

const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const sendForm = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("images", inputRef1.current.files[0]);
  formData.append("ft", inputRef2.current.files[0]);
  formData.append("data", JSON.stringify(vehicule));
  apiConnexion
    .post("/vehicules", formData)
    .then(() => {
      toast.success(
        `Bonjour votre inscription a bien été enregistrée.`,
        toastifyConfig
      );
    })
    .catch((err) => {
      toast.error(
        `Veuillez vérifier vos champs, votre inscription n'a pas été validée`,
        toastifyConfig
      );
      console.warn(err);
    });
};

// La fonction previewPicture
const previewPicture = (evt, style) => {
  console.log(evt.target.files)
  const image =
    style === "photo"
      ? document.getElementById("images")
      : document.getElementById("pdf");
  const [picture] = evt.target.files;
  if (picture && style === "photo") {
    const reader = new FileReader();
    reader.onload = (event) => {
      image.src = event.target.result;
    };
    reader.readAsDataURL(picture);
  } else {
    // image.src = cvupload;
  }
};

  return (
    <div className = "p-9 flex justify-center">
      <form
      encType="multipart/form-data"
      onSubmit={(e) => sendForm(e)}
      className="flex justify-center">
      <div >
        <div className="flex justify-end">
          <img src={avatar} id="image" alt="image" className=" mt-5 md:w-44" />
        </div>
        <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
          <p className="mt-5">Photo :</p>
          <button className="bg-gray-900 rounded-full text-white w-32 mt-5 mb-2" onClick={handleClick}>
          Charger
          </button>
          <input
            className="hidden"
            type="file"
            ref={inputRef1}
            name="photo"
            style={{ display: 'none' }}
            accept=".jpg, .png, .gif"
            value={vehicule.photo}
            onChange={(evt) => previewPicture(evt, "photo")}
          />
        </div>
        <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
          <p className="mt-5">Fiche technique :</p>
          <button className="bg-gray-900 rounded-full text-white w-32 mt-5 mb-2" onClick={handleClick2}>
          Charger
          </button>
          <input
            className="hidden"
            type="file"
            ref={inputRef2}
            name="ficheTech"
            style={{ display: 'none' }}
            accept=".pdf"
            value={vehicule.ficheTech}
            onChange={(evt) => previewPicture(evt, "pdf")}
          />
        </div>

          <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
            <p>Name :</p>
            <input
            required
            type="text"
            name="nameV"
            className="border-black rounded"
            value={vehicule.nameV}
            onChange={(e) => handleVehicule(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
            <p>Film :</p>
            <input
            required
            type="text"
            name="film"
            className="border-black rounded"
            value={vehicule.film}
            onChange={(e) => handleVehicule(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
            <p>Kilométre :</p>
            <input
            required
            type="text"
            name="km"
            className="border-black rounded"
            value={vehicule.km}
            onChange={(e) => handleVehicule(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
            <p>type :</p>
            <input
            required
            type="text"
            name="typeV"
            className="border-black rounded"
            value={vehicule.typeV}
            onChange={(e) => handleVehicule(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
            <p>Lieu :</p>
            <input
            required
            type="text"
            name="lieu"
            className="border-black rounded"
            value={vehicule.lieu}
            onChange={(e) => handleVehicule(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
            <p>Prix (€/h) :</p>
            <input
            required
            type="text"
            name="prix"
            className="border-black rounded"
            value={vehicule.prix}
            onChange={(e) => handleVehicule(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5 ml-2 mr-2 mb-5">
            <p>Date de disponibilité :</p>
            <input
            required
            type="date"
            name="dateDispo"
            className="border-black rounded"
            value={vehicule.dateDispo}
            onChange={(e) => handleVehicule(e.target.name, e.target.value)}
            />
          </div>

          <div className="name flex justify-between ml-2 mr-2 mb-5">
            <select>
              <option value="Available">Disponible</option>
              <option value="Not available">Non disponible</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-900 rounded-full text-white w-32 mt-5 mb-2"
            >
              Ajout vehicule
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default AddVehicule;
