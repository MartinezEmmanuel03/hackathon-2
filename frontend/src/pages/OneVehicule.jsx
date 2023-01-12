import React from "react";
// import apiConnexion from "../services/apiConnexion";

function OneVehicule() {
  // const [vehicule, setVehicule] = useState();

  // useEffect(() => {
  //   apiConnexion
  //     .get(`/vehicule/:id`)
  //     .then((res) => {
  //       setVehicule(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      <div className="rentButton flex justify-center">
        <button
          type="button"
          className="relative w-36 mt-10 mb-10 h-12 ml-4 overflow-hidden font-semibold rounded-xl bg-gray-700 text-white hover:bg-gray-900"
        >
          Rent Me
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-green-500">
            Free
          </span>
        </button>
      </div>
      <div className="vehicule md:flex md:ml-5">
        <div className="vehiculePics md:w-full">
          <img
            src="https://media.discordapp.net/attachments/1022804708122968154/1062762258641469491/latest.png"
            alt="vehicule"
            className="md:w-full"
          />
        </div>
        <div className="description w-8/12 ml-2 mr-2">
          <h1 className="text-center mt-5 mb-5 font-bold">
            Ford Explorer 4X4 Jurassic Park
          </h1>
          <ul className="mt-10 md:ml-5">
            <li className="mb-5">
              Description:
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur error veniam quia quisquam iure. Vitae beatae
                cupiditate veniam, ad tempora ea nihil ex accusamus id dolores
                non molestiae illo amet?
              </p>
            </li>
            <li className="mb-5">
              Kilometer:
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li className="mb-5">
              Technical sheets:
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate, tempore exercitationem provident veniam ex porro
                perferendis recusandae voluptatem ea harum inventore deserunt
                esse fugit blanditiis quasi magnam voluptatum natus at nostrum.
                Voluptatibus est provident assumenda laboriosam nostrum! Impedit
                consectetur voluptatum accusantium quas fugiat dicta dolorem.
                Magnam eius eligendi tempora dolore.
              </p>
            </li>
            <li className="mb-5">
              Location:
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="mb-5">Availablity dates:</li>
            <li className="mb-5">
              Remark:
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                mollitia enim quas incidunt sit provident pariatur recusandae
                officia asperiores, iure odio. Unde provident, nam sint dicta
                fugit blanditiis natus fugiat.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OneVehicule;
