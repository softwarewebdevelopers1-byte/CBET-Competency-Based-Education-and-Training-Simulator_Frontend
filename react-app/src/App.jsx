import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginRoute } from "./AuthRoutes/login.jsx";
import { SignUpRoute } from "./AuthRoutes/signIn.jsx";
import { LandingPage } from "./others/landingPage.jsx";
import { Dashboard } from "./Dashboard/dashboard.jsx";
import { ErrorPage } from "./others/error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="*" element={<ErrorPage type="404" />} />
        <Route path="/signup" element={<SignUpRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
