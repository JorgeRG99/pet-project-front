import Facebook from "@/icons/Facebook";
import Instagram from "@/icons/Instagram";
import QuoteLeft from "@/icons/QuoteLeft";
import Twitter from "@/icons/Twitter";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-20 bg-primary-extra-light flex sm:flex-row flex-col relative sm:gap-0 gap-32 justify-between">
      <div className="sm:w-[200px] space-y-4 flex flex-col items-center">
        <div className="flex items-center gap-6">
          <div className="w-[30%] flex">
            <img
              width="100%"
              src="./images/pet4you-logo.png"
              alt="Logo pet4you basado en un gato
      "
            />
          </div>
          <h1 className="font-alegreya font-semibold text-2xl">
            PET <span className="text-primary-dark text-5xl">4</span> YOU
          </h1>
        </div>
        <div className="w-[80%] h-[2px] bg-primary-dark"></div>
        <Link className="font-alegreya font-medium text-2xl hover:underline">
          CONTÁCTENOS
        </Link>
      </div>

      <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] space-y-4 flex-col items-center">
        <QuoteLeft />
        <p className="font-alegreya text-xl">
          {" "}
          Los animales son confiables, están llenos de amor, afectivos,
          predecibles en sus acciones, agradecidos y leales. Normas difíciles de
          seguir para las personas
        </p>
        <h3 className="italic font-alegreya text-xl">Alfred A. Montapert</h3>
      </div>

      <div className="flex sm:justify-start justify-evenly sm:flex-col space-x-3 sm:space-x-0 sm:space-y-3 sm:items-start items-center">
        <div className="font-alegreya space-y-2">
          <h3 className="text-xl font-medium text-primary-dark">Servicios</h3>
          <nav className="flex flex-col gap-2">
            <Link className="hover:underline">Hotel</Link>
            <Link className="hover:underline">Adiestramiento</Link>
            <Link className="hover:underline">Educación</Link>
          </nav>
        </div>
        <div className="sm:flex space-y-2 font-alegreya items-center gap-8">
          <h3 className="text-xl font-medium text-primary-dark">Conócenos</h3>
          <nav className="flex sm:flex-row flex-col sm:gap-4 gap-2">
            <Link>
              <Facebook />
            </Link>
            <Link>
              <Twitter />
            </Link>
            <Link>
              <Instagram />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
