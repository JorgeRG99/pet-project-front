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
import Profile from "./pages/Profile";
import { useRecoverSession } from "./hooks/useRecoverSession";
import { Toaster } from "sonner";

function App() {
  const { userSession } = useRecoverSession();
  const isAuthenticated = userSession.token;

  return (
    <>
      {/* Feedback message shape */}
      <Toaster richColors />

      <Navbar />

      <Routes>
        <Route path={PAGES_URLS.home} element={<Home />} />
        <Route
          path={PAGES_URLS.register}
          element={
            !isAuthenticated ? <Register /> : <Navigate to={PAGES_URLS.home} />
          }
        />
        <Route path={PAGES_URLS.pets} element={<Pets />} />
        <Route path={PAGES_URLS.hotel} element={<HotelPage />} />
        <Route
          path={PAGES_URLS.login}
          element={
            !isAuthenticated ? <Login /> : <Navigate to={PAGES_URLS.home} />
          }
        />
        <Route
          path={PAGES_URLS.profile}
          element={
            !isAuthenticated ? <Navigate to={PAGES_URLS.home} /> : <Profile />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
