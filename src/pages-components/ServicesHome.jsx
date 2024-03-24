import Hotel from "@/icons/Hotel";
import ServiceHomeCard from "./ServiceHomeCard";
import { HOME_SERVICES_CARD_CONTENTS } from "@/config";
import Dumbell from "@/icons/Dumbell";
import Education from "@/icons/Education";

function ServicesHome() {
  return (
    <section className="flex flex-col gap-24">
      <h2 className="text-primary font-alegreya text-5xl font-bold text-center">
        Nuestros servicios
      </h2>

      <article className="flex justify-evenly">
          <ServiceHomeCard
            key={crypto.randomUUID()}
            title={HOME_SERVICES_CARD_CONTENTS.hotel.title}
            description={HOME_SERVICES_CARD_CONTENTS.hotel.description}
          >
            <Hotel />
          </ServiceHomeCard>
          <ServiceHomeCard
            key={crypto.randomUUID()}
            title={HOME_SERVICES_CARD_CONTENTS.training.title}
            description={HOME_SERVICES_CARD_CONTENTS.training.description}
          >
            <Dumbell />
          </ServiceHomeCard>
          <ServiceHomeCard
            key={crypto.randomUUID()}
            title={HOME_SERVICES_CARD_CONTENTS.education.title}
            description={HOME_SERVICES_CARD_CONTENTS.education.description}
          >
            <Education />
          </ServiceHomeCard>
      </article>
    </section>
  );
}

export default ServicesHome;
