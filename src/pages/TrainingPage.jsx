import TrainingDescription from "@/pages-components/training/TrainingDescription";
import TrainingHeroSection from "@/pages-components/training/TrainingHeroSection";
import TrainingPrices from "@/pages-components/training/TrainingPrices";
import { useRef } from "react";

export default function TrainingPage() {
  const pricesRef = useRef(null);

  return (
    <main>
      <TrainingHeroSection pricesRef={pricesRef} />
      <TrainingDescription />
      <TrainingPrices pricesRef={pricesRef} />
    </main>
  );
}
