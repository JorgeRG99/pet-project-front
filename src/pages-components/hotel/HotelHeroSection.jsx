import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HotelHeroSection() {
  return (
    <section className="md:h-[70vh] sm:h-[95vh] flex flex-col gap-6 items-center justify-center sm:px-16 px-10 relative">
      <h1 className="font-alegreya font-bold text-primary-dark text-5xl">
        Hotel de mascotas
      </h1>
      <p className="font-alegreya font-medium text-xl">
        Selecciona el tipo de servicio y deja tu mascota bajo los mejores
        cuidados.
      </p>
      <Link>
        <Button className="text-white bg-primary-dark hover:opacity-80 transition duration-200 active:scale-90">Elige un servicio</Button>
      </Link>

      <div className="w-[80px] h-[80px] rounded-full bg-primary-dark absolute top-[10%] left-[8%]"></div>
      <div className="w-[50px] h-[50px] rounded-full bg-primary-dark absolute top-[10%] right-[25%]"></div>
      <div className="w-[70px] h-[70px] rounded-full bg-primary absolute top-[20%] right-[17%]"></div>
      <div className="w-[50px] h-[50px] rounded-full bg-primary-dark absolute bottom-[10%] right-[25%]"></div>
      <div className="w-[90px] h-[90px] rounded-full bg-primary absolute bottom-[25%] right-[20%]"></div>
      <div className="w-[80px] h-[80px] rounded-full bg-primary-dark absolute top-[10%] left-[8%]"></div>
      <div className="w-[150px] h-[150px] rounded-full bg-primary absolute bottom-[25%] left-[13%]"></div>
      <div className="w-[40px] h-[40px] rounded-full bg-primary-dark absolute top-[7%] left-[16%]"></div>
    </section>
  );
}
