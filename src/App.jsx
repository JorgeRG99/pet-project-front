import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./pages-components/Navbar";
import { PAGES_URLS } from "./config";
import Home from "./pages/Home";
import Pets from "./pages/Pets";

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />

        <Routes>
          <Route path={PAGES_URLS.home} element={<Home />} />
          <Route path={PAGES_URLS.pets} element={<Pets />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
