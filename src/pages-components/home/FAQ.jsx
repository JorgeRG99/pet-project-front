import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HomeSectionTitle from "./asset-components/HomeSectionTitle";
import { HOME_FAQ } from "@/configs/content-config";

export default function FAQ() {
  return (
    <section className="space-y-20 flex flex-col items-center xl:px-96 lg:px-64 md:px-32 sm:px-16 px-8 pb-44">
      <HomeSectionTitle content="Preguntas frecuentes" />

      <article className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {HOME_FAQ.map((item) => (
            <AccordionItem key={crypto.randomUUID()} value={crypto.randomUUID()}>
              <AccordionTrigger className="font-alegreya font-semibold text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-alegreya text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </section>
  );
}
