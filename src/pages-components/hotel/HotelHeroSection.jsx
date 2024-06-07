import { Button } from "@/components/ui/button";

export default function HotelHeroSection({pricesRef}) {
  const gotTo = () => pricesRef.current.scrollIntoView({ behavior: "smooth" });
  
  return (
    <section className="md:h-[70vh] h-[90vh] flex flex-col gap-6 items-center justify-center sm:px-16 px-10 relative">
      <h1 className="font-alegreya font-bold text-primary-dark sm:text-5xl text-4xl">
        Hotel de mascotas
      </h1>
      <p className="font-alegreya font-medium sm:text-xl text-md text-center">
        Selecciona el tipo de servicio y deja tu mascota bajo los mejores
        cuidados.
      </p>
      <Button
        onClick={gotTo}
        className="text-white bg-primary-dark hover:opacity-80 transition duration-200 active:scale-90"
      >
        Elige un servicio
      </Button>

      <div className="mobile-landscape:left-[5%] mobile-landscape:w-[80px] w-[80px] h-[80px] rounded-full bg-primary-dark absolute lg:top-[10%] top-[13%] left-[8%]"></div>
      <div className="mobile-landscape:right-[20%] mobile-landscape:w-[50px] w-[50px] h-[50px] rounded-full bg-primary-dark absolute top-[10%] right-[25%]"></div>
      <div className="mobile-landscape:right-[5%] mobile-landscape:w-[70px] w-[70px] h-[70px] rounded-full bg-primary absolute top-[20%] right-[17%]"></div>
      <div className="mobile-landscape:hidden w-[50px] h-[50px] rounded-full bg-primary-dark absolute bottom-[10%] right-[25%]"></div>
      <div className="mobile-landscape:bottom-[5%] mobile-landscape:w-[90px] w-[90px] h-[90px] rounded-full bg-primary absolute bottom-[25%] right-[20%]"></div>
      <div className="mobile-landscape:bottom-0 lg:w-[145px] lg:h-[145px] mobile-landscape:w-[100px] w-[100px] h-[100px] rounded-full bg-primary absolute bottom-[25%] left-[13%]"></div>
      <div className="w-[40px] h-[40px] rounded-full bg-primary-dark absolute top-[7%] left-[16%]"></div>
    </section>
  );
}
