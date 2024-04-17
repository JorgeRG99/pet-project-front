import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserSessionProvider } from "./context/userSession.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserSessionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserSessionProvider>
  </React.StrictMode>
);
