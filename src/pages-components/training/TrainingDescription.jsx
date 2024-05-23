import HomeSectionTitle from "../home/asset-components/HomeSectionTitle";

export default function TrainingDescription() {
  return (
    <section className="flex lg:flex-row flex-col py-20 items-center justify-evenly lg:gap-0 gap-32">
      <article className="lg:w-[50%] w-[80%] font-alegreya space-y-16 md:px-10 px-0">
        <HomeSectionTitle content={"Nuestro servicio de adiestramiento"} />

        <div className="space-y-8 font-medium xl:text-2xl text-xl">
          <p>
            En Pet<span className="text-4xl text-primary font-alegreya">4</span>
            You, nos dedicamos a mejorar la comunicación y el entendimiento
            entre usted y su mascota. Desde comandos básicos hasta entrenamiento
            para comportamientos más específicos
          </p>
          <p>
            Ya sea que su compañero sea un cachorro lleno de energía que
            necesita aprender las reglas básicas del hogar, o un perro adulto
            que requiera corrección de conducta, nuestro equipo está listo para
            guiarlo a través del proceso con sesiones estructuradas y consejos
            prácticos.
          </p>
        </div>
      </article>

      <div className="lg:w-1/3 md:w-1/2 w-[80%]">
        <img
          className="shadow-2xl w-full rounded-xl"
          src="./images/training/pet-training1.webp"
          alt="A pet training image"
        />
      </div>
    </section>
  );
}
