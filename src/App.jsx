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
import Panel from "./pages/Panel";
import TrainingPage from "./pages/TrainingPage";
import { USER_TYPES } from "./configs/user-types-config";
import RegisterWorker from "./pages/RegisterWorker";

function App() {
  const { userSession } = useRecoverSession();
  const { role, token } = userSession;
  
  const isAuthenticated = token;
  const isAdmin = role === USER_TYPES.worker 

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
        <Route path={PAGES_URLS.training} element={<TrainingPage />} />
        <Route
          path={PAGES_URLS.login}
          element={
            !isAuthenticated ? <Login /> : <Navigate to={PAGES_URLS.home} />
          }
        />
        <Route
          path={PAGES_URLS.panel}
          element={
            isAuthenticated ? <Panel /> : <Navigate to={PAGES_URLS.login} />
          }
        />
        <Route
          path={PAGES_URLS.profile}
          element={
            !isAuthenticated ? <Navigate to={PAGES_URLS.home} /> : <Profile />
          }
        />
        <Route
          path={PAGES_URLS.registerWorker}
          element={
            !isAuthenticated || !isAdmin ? <Navigate to={PAGES_URLS.home} /> : <RegisterWorker />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
