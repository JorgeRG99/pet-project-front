import HomeSectionTitle from "../home/asset-components/HomeSectionTitle";

export default function HotelDescription() {
  return (
    <section className="flex lg:flex-row flex-col py-20 items-center justify-evenly lg:gap-0 gap-32">
      <article className="lg:w-[50%] w-[80%] font-alegreya space-y-16 md:px-10 px-0">
        <HomeSectionTitle content={"Descubre nuestro hotel de mascotas"} />

        <div className="space-y-8 font-medium xl:text-2xl text-xl">
          <p>
            En Pet<span className="text-4xl text-primary font-alegreya">4</span>
            You, entendemos que tu mascota es parte de la familia. Por eso
            ofrecemos un servicio de cuidado y alojamiento de primera calidad
            para que tu amigo de cuatro patas se sienta como en casa, incluso
            cuando no estás.
          </p>
          <p>
            Nuestros paquetes están diseñados para adaptarse a las necesidades
            de cada mascota, ya sean perros o gatos. Descubre nuestros precios y
            elige el plan que mejor se adapte a tu peludo.
          </p>
        </div>
      </article>

      <div className="lg:w-1/3 md:w-1/2 w-[80%]">
        <img
          className="shadow-2xl w-full rounded-xl"
          src="./images/hotel/pet-hotel1.webp"
          alt="A pet image"
        />
      </div>
    </section>
  );
}
