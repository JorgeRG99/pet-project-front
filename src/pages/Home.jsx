import About from "@/pages-components/About";
import HeroSection from "@/pages-components/HeroSection";
import ServicesHome from "@/pages-components/ServicesHome";

function Home() {
  return (
    <main className="space-y-60">
      <HeroSection />
      <About />
      <ServicesHome />
    </main>
  );
}

export default Home;
