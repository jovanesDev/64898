// import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Shop from "../screens/Shop";
import PageNotFound from "../screens/PageNotFound";
import WithNavbar from "./templates/WithNavbar";
import Jugador from "../screens/Jugador";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route></Route> el elemento de la ruta que tiene apertiura y cierre tiene que ser el template que adentro tenga Outlet */}
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="player/:id" element={<Jugador />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
