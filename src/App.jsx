import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./pages-components/global/Navbar";
import { PAGES_URLS } from "./config";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Footer from "./pages-components/global/Footer";
import HotelPage from "./pages/HotelPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={PAGES_URLS.home} element={<Home />} />
        <Route path={PAGES_URLS.pets} element={<Pets />} />
        <Route path={PAGES_URLS.hotel} element={<HotelPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
