import Hotel from "@/icons/Hotel";
import Dumbell from "@/icons/Dumbell";
import Education from "@/icons/Education";
import ServiceHomeCard from "./asset-components/ServiceHomeCard";
import HomeSectionTitle from "./asset-components/HomeSectionTitle";
import { HOME_SERVICES_CARD_CONTENTS } from "@/configs/content-config";

function ServicesHome() {
  return (
    <section className="flex flex-col gap-24">
      <HomeSectionTitle content="Nuestros servicios" />

      <article className="flex lg:flex-row flex-col justify-evenly items-center lg:gap-0 gap-24 sm:p-0 p-16">
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
