import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./pages-components/global/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./pages-components/global/Footer";
import HotelPage from "./pages/HotelPage";
import Register from "./pages/Register";
import { PAGES_URLS } from "./configs/app-routes-config";
import Profile from "./pages/Profile";
import { useRecoverSession } from "./hooks/useRecoverSession";
import { Toaster } from "sonner";
import DogsCatalogue from "./pages/DogsCatalogue";
import CatsCatalogue from "./pages/CatsCatalogue";

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
        <Route path={PAGES_URLS.dogs} element={<DogsCatalogue />} />
        <Route path={PAGES_URLS.cats} element={<CatsCatalogue />} />
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
