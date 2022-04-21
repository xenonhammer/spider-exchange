import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import AboutPage from "./pages/About";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path={"/"} />
      <Route element={<AboutPage />} path={"/about"} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;