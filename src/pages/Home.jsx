import About from "@/pages-components/home/About";
import HeroSection from "@/pages-components/home/HeroSection";
import ServicesHome from "@/pages-components/home/ServicesHome";


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
