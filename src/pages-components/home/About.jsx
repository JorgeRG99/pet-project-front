import { HOME_ABOUT } from "@/config";
import AboutParagraph from "./asset-components/AboutParagraph";
import HomeSectionTitle from "./asset-components/HomeSectionTitle";

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
        <HomeSectionTitle content={HOME_ABOUT.title} />

        <div className="space-y-8">
          {HOME_ABOUT.paragraphs.map((paragraph) => (
            <AboutParagraph key={crypto.randomUUID()} content={paragraph} />
          ))}
        </div>
      </article>
    </section>
  );
}
