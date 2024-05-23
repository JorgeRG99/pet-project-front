import { Button } from "@/components/ui/button";

export default function TrainingHeroSection({ pricesRef }) {
  const gotTo = () => pricesRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="md:h-[70vh] h-[90vh] flex flex-col gap-6 items-center justify-center sm:px-16 px-5 xs:px-10 relative">
      <h1 className="font-alegreya font-bold text-primary-dark sm:text-5xl text-3xl">
        Adiestramiento de mascotas
      </h1>
      <p className="font-alegreya font-medium sm:text-xl text-md text-center">
        Selecciona el tipo de servicio y deja tu mascota bajo el mejor equipo de entrenamiento.
      </p>
      <Button
        onClick={gotTo}
        className="text-white bg-primary-dark hover:opacity-80 transition duration-200 active:scale-90"
      >
        Elige un servicio
      </Button>

      <div
        className="w-0 h-0 
        border-l-[20px] border-l-transparent
        border-b-[30px] border-b-primary-dark
        border-r-[20px] border-r-transparent absolute lg:top-[30%] top-[20%] left-[8%]"
      ></div>
      <div
        className="w-0 h-0 
        border-l-[50px] border-l-transparent
        border-b-[75px] border-b-primary-dark
        border-r-[50px] border-r-transparent absolute top-[10%] md:right-[35%] right-[40%]"
      ></div>
      <div
        className="w-0 h-0 
        border-t-[35px] border-t-transparent
        border-l-[40px] border-l-primary
        border-b-[35px] border-b-transparent absolute top-[20%] right-[17%]"
      ></div>
      <div
        className="w-0 h-0 
        border-l-[40px] border-l-transparent
        border-b-[60px] border-b-primary-dark
        border-r-[40px] border-r-transparent absolute bottom-[10%] right-[45%]"
      ></div>
      <div
        className="w-0 h-0 
        border-t-[30px] border-t-transparent
        border-l-[45px] border-l-primary
        border-b-[30px] border-b-transparent absolute bottom-[25%] right-[20%]"
      ></div>
      <div
        className="w-0 h-0 
        border-t-[45px] border-t-transparent
        border-l-[60px] border-l-primary
        border-b-[45px] border-b-transparent absolute bottom-[25%] left-[13%]"
      ></div>
      <div
        className="w-0 h-0 
        border-t-[30px] border-t-transparent
        border-l-[50px] border-l-primary
        border-b-[30px] border-b-transparent absolute top-[7%] left-[28%] hidden xs:block"
      ></div>
    </section>
  );
}
