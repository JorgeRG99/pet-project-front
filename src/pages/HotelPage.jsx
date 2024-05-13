import HotelDescription from "@/pages-components/hotel/HotelDescription";
import HotelHeroSection from "@/pages-components/hotel/HotelHeroSection";
import HotelPrices from "@/pages-components/hotel/HotelPrices";
import { useRef } from "react";

export default function HotelPage() {
  const pricesRef = useRef(null);

  return (
    <main>
      <HotelHeroSection pricesRef={pricesRef} />
      <HotelDescription />
      <HotelPrices pricesRef={pricesRef} />
    </main>
  );
}
