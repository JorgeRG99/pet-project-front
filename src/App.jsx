import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./pages-components/global/Navbar";
import { PAGES_URLS } from "./config";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Footer from "./pages-components/global/Footer";
import SEO from "./pages-components/global/SEO";

function App() {
  return (
    <>
      <SEO
        title="Learning React Helmet!"
        description="Beginner friendly page for learning React Helmet."
        name="Company name."
        type="article"
      />
      <Navbar />

      <Routes>
        <Route path={PAGES_URLS.home} element={<Home />} />
        <Route path={PAGES_URLS.pets} element={<Pets />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
