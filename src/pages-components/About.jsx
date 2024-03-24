export default function About() {
  return (
    <section className="flex lg:flex-row flex-col-reverse justify-evenly items-center pt-20 lg:gap-0 gap-20">
      <div className="xl:w-[35%] lg:w-[40%] md:w-[50%] w-[60%]">
        <img
          className="shadow-2xl rounded-2xl"
          width="100%"
          src="./images/home/about-section.avif"
          alt="Grupo de entrenadores profesionales de perros posando sonrientes con sus caninos entrenados, sentados ordenadamente a sus pies"
        />
      </div>

      <article className="lg:w-[50%] font-alegreya space-y-16 lg:px-20 md:px-30 px-10">
        <h2 className="text-center text-5xl font-bold text-primary">
          ¿Quienes somos?
        </h2>

        <div className="space-y-8">
          <p className="font-medium xl:text-2xl text-xl">
            Nuestra historia comenzó hace una década en el corazón de Córdoba,
            donde un pequeño grupo de amantes de los animales decidió convertir
            su pasión en una misión.
          </p>
          <p className="font-medium xl:text-2xl text-xl">
            Ofrecemos adopciones responsables, entrenamiento especializado y
            educación animal. Además, nuestro hotel de mascotas proporciona
            cuidados excepcionales para tu compañero peludo, asegurando su
            bienestar y felicidad mientras estás ausente.
          </p>
          <p className="font-medium xl:text-2xl text-xl">
            Estamos comprometidos a mejorar las vidas de los animales a través
            del amor y el cuidado. Cada día es una nueva oportunidad para hacer
            una diferencia, trabajando incansablemente para crear un futuro
            mejor para los animales y sus familias.
          </p>
        </div>
      </article>
    </section>
  );
}
