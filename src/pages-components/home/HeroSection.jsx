import { Button } from "@/components/ui/button";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { UserSessionContext } from "@/context/userSession";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { userSession } = useContext(UserSessionContext)
  const isAuthenticated = userSession.token ? true : false
  
  return (
    <section className="md:h-[90vh] sm:h-[80vh] h-[60vh] flex items-center sm:px-16 px-10 relative">
      <div className="mobile-landscape:w-[100px] xl:w-[180px] md:w-[130px] sm:w-[120px] w-[100px] absolute top-[8%] lg:left-[30%] sm:left-[20%] left-[15%] bg-primary rounded-[50%] overflow-hidden">
        <img
          src="./images/home/hero-section3.png"
          alt="Pequeño perro blanco tumbado tranquilamente sobre una superficie suave, luciendo relajado y sereno"
        />
      </div>
      <article className="space-y-8 lg:pt-0 sm:pt-20 pt-10">
        <h1 className="xl:text-5xl lg:text-4xl text-3xl font-alegreya font-bold xl:w-[580px] md:w-[480px] sm:w-[400px] [word-spacing:10px]">
          Pet
          <span className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-primary">
            4
          </span>
          You, donde cada animal encuentra su familia perfecta.
        </h1>
        <div className="space-x-8">
          <Link to={isAuthenticated ? PAGES_URLS.profile : PAGES_URLS.login}>
            <Button
              variant="secondary"
              size="lg"
              className="text-primary-dark border-primary hover:text-primary-dark bg-primary-extra-light"
            >
              {isAuthenticated ? "Mi cuenta" : "Acceder"}
            </Button>
          </Link>
          <Link to={isAuthenticated ? PAGES_URLS.hotel : PAGES_URLS.register}>
            <Button className="text-white bg-primary-medium" size="lg">
              {isAuthenticated ? "Hotel" : "Registrarse"}
            </Button>
          </Link>
        </div>
      </article>
      <div className="mobile-landscape:w-[120px] xl:w-[250px] lg:w-[220px] md:w-[200px] sm:w-[180px] w-[120px] absolute top-[7%] sm:right-[30%] right-[10%] bg-primary-dark rounded-[50%] overflow-hidden">
        <img
          src="./images/home/hero-section1.png"
          alt="Pequeño perro blanco tumbado tranquilamente sobre una superficie suave, luciendo relajado y sereno"
        />
      </div>
      <div className="mobile-landscape:w-[140px] xl:w-[300px] lg:w-[250px] md:w-[220px] sm:w-[200px] w-[140px] absolute sm:top-[65%] md:top-[45%] top-[79%] lg:right-[10%] right-[5%] bg-primary-light rounded-full overflow-hidden">
        <img
          src="./images/home/hero-section2.png"
          width="100%"
          alt="Perro amistoso acostado mientras un gato descansa cómodamente sobre su espalda"
        />
      </div>
    </section>
  );
}
