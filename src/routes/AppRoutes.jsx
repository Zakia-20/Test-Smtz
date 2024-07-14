import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import FavorisPage from "../pages/FavorisPage";
import { CharacterDetail } from "../components/CharacterDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<FavorisPage />} />
      <Route path="/detail/:id" element={<CharacterDetail/>}/>
    </Routes>
  );
};

export default AppRoutes;
