import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./pages-components/global/Navbar";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Login from "./pages/Login";
import Footer from "./pages-components/global/Footer";
import HotelPage from "./pages/HotelPage";
import Register from "./pages/Register";
import { PAGES_URLS } from "./configs/app-routes-config";
import { useUserSession } from "./hooks/useUserSession";

function App() {
  const { userSession } = useUserSession();
  const isAuthenticated = userSession.token;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path={PAGES_URLS.home} element={<Home />} />
        <Route path={PAGES_URLS.register} element={
            !isAuthenticated ? <Register /> : <Navigate to={PAGES_URLS.home} />
          } />
        <Route path={PAGES_URLS.pets} element={<Pets />} />
        <Route path={PAGES_URLS.hotel} element={<HotelPage />} />
        <Route
          path={PAGES_URLS.login}
          element={
            !isAuthenticated ? <Login /> : <Navigate to={PAGES_URLS.home} />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
