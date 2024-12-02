import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Patriots } from "./Pages/patriots";
import { Loyalists } from "./Pages/loyalists";
import { AntiFederalists } from "./Pages/anti-federalists";
import { Federalists } from "./Pages/federalists";
import { HomePage } from "./Pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/patriots" element={<Patriots />} />
        <Route path="/loyalists" element={<Loyalists />} />
        <Route path="/native-americans" element={<Federalists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
