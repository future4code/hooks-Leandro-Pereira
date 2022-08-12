import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/Pages/Home/HomePage";
import DetailsPage from "../components/Pages/DetailsPage/DetailsPage";
import Pokedex from "../components/Pages/Pokedex/Pokedex";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path='detailsPage' element={<DetailsPage/>} />
        <Route path='pokedex' element={<Pokedex/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
