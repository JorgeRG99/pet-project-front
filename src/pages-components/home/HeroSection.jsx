import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex justify-evenly xl:pt-24 md:pt-16">
      <article className="h-[65vh] flex flex-col items-start justify-end gap-6 relative pb-16">
        <div className="xl:w-[180px] lg:w-[130px] md:w-[80px] z-10 sm:w-[20px] w-[100px] absolute top-[-10%] left-[60%] bg-primary rounded-[50%] overflow-hidden">
          <img
            src="./images/home/hero-section3.png"
            alt="Pequeño perro blanco tumbado tranquilamente sobre una superficie suave, luciendo relajado y sereno"
          />
        </div>
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl font-alegreya font-bold xl:w-[580px] lg:w-[480px] md:w-[380px] [word-spacing:10px]">
          <span className="text-primary">
            Pet<span className="xl:text-7xl lg:text-6xl md:text-5xl">4</span>You
          </span>
          , donde cada animal encuentra su familia perfecta.
        </h1>
        <div className="space-x-8">
          <Button variant="secondary" size="lg" color="primary-light">
            Servicios
          </Button>
          <Button className="text-white" size="lg">
            Registro
          </Button>
        </div>
      </article>
      <article className="relative w-[45%]">
        <div className="xl:w-[300px] lg:w-[250px] md:w-[200px] z-10 sm:w-[150px] w-[100px] absolute top-4 left-[20%] bg-primary rounded-[50%] overflow-hidden">
          <img
            src="./images/home/hero-section1.png"
            alt="Pequeño perro blanco tumbado tranquilamente sobre una superficie suave, luciendo relajado y sereno"
          />
        </div>
        <div className="xl:w-[300px] lg:w-[250px] md:w-[200px] z-10 sm:w-[150px] w-[100px] absolute top-80 right-0 bg-primary-light rounded-full overflow-hidden">
          <img
            src="./images/home/hero-section2.png"
            width="100%"
            alt="Perro amistoso acostado mientras un gato descansa cómodamente sobre su espalda"
          />
        </div>
      </article>
    </section>
  );
}
