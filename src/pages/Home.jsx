import About from "@/pages-components/home/About";
import FAQ from "@/pages-components/home/FAQ";
import HeroSection from "@/pages-components/home/HeroSection";
import ServicesHome from "@/pages-components/home/ServicesHome";


function Home() {
  return (
    <main className="lg:space-y-60 space-y-40">
      <HeroSection />
      <About />
      <ServicesHome />
      <FAQ />
    </main>
  );
}

export default Home;
