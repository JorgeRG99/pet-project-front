import TrainingCatsPricesCard from "./TrainingPricesCard/TrainingCatsPricesCard";
import TrainingDogsPricesCard from "./TrainingPricesCard/TrainingDogsPricesCard";

export default function TrainingPrices({ pricesRef }) {
  return (
    <section ref={pricesRef} className="md:px-20 py-20 px-0 flex xl:flex-row flex-col justify-evenly items-center gap-44">
        <TrainingDogsPricesCard />
        <TrainingCatsPricesCard />
    </section>
  )
}