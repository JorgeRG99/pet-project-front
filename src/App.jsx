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
    </>
  );
}

export default App;
