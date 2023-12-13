// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Shop from "../screens/Shop";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
