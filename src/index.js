import React from "react";
import ReactDOM from "react-dom/client";

// ++++++++++++++++++++++++Website Design++++++++++++++++++++++++
import House from './Website/House.jsx';
import House1 from "./Website/Smart-Men/House1.jsx";
import House2 from "./Website/Smart_Contect/House2.jsx";
import Header from "./Website/Header.jsx";
import Footer from "./Website/Footer.jsx";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={ <House/> } />
        <Route path="/House1" element={ <House1/> } />
        <Route path="/House2" element={ <House2/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
