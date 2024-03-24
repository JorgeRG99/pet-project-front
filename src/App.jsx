import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./pages-components/Navbar";
import { PAGES_URLS } from "./config";
import Home from "./pages/Home";
import Pets from "./pages/Pets";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={PAGES_URLS.home} element={<Home />} />
        <Route path={PAGES_URLS.pets} element={<Pets />} />
      </Routes>

      <div className="relative h-screen w-screen bg-white">
        <div className="absolute h-screen w-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </>
  );
}

export default App;
