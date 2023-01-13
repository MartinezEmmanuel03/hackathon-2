import img1 from "../assets/404.jpg";
import img2 from "../assets/magnum.gif";

function Page404() {
  return (
    <div>
      <div className="pt-12 bg-black ">
        <img alt="404" src={img1} className="w-full" />
      </div>
      <div>
        <p className="text-2xl md:text-7xl  font-bold absolute bottom-3/4 md:bottom-1/2 text-white text-center bg-black bg-opacity-30">
          Désolé le modèle 404 n'est pas disponible
        </p>
      </div>
      <div className="md:hidden">
        <img alt="gif magnum" src={img2} />
      </div>
    </div>
  );
}

export default Page404;
