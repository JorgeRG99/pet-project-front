import HotelCatsPricesCard from "./HotelPricesCards/HotelCatsPricesCard";
import HotelDogsPricesCard from "./HotelPricesCards/HotelDogsPricesCard";

export default function HotelPrices({ pricesRef }) {
  return (
    <section ref={pricesRef} className="md:px-20 py-20 px-0 flex xl:flex-row flex-col justify-evenly items-center gap-44">
        <HotelDogsPricesCard />
        <HotelCatsPricesCard />
    </section>
  )
}
