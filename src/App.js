import React from "react";
// import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import { Landing, About, Contact, Blog } from "./components";
import PortfolioPage from "./components/pages/PortfolioPage";
import NavBar from "./components/common/NavBar";
import WordHoax from "./components/pages/WordHoax";



function App() {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing  />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/blog" element={<Blog />} exact />
          <Route path="/wordhoax" element={<WordHoax /> } exact />
        </Routes>
      </div>
  );
}

export default App;
