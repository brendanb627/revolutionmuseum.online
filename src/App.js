import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Patriots } from "./Pages/patriots";
import { Loyalists } from "./Pages/loyalists";
import { Federalists } from "./Pages/federalists";
import { NativeAmericans } from "./Pages/native-americans";
import { HomePage } from "./Pages/homepage";
import { Abolitionists } from "./Pages/abolitionist"
import { NotFinished } from "./Pages/not-finished";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/patriots" element={<Patriots />} />
        <Route path="/loyalists" element={<Loyalists />} />
        <Route path="/native-americans" element={<NativeAmericans />} />
        <Route path="/native-americans" element={<NativeAmericans />} />
        <Route path="/federalists" element={<Federalists />} />
        <Route path="/abolitionists" element={<Abolitionists />} />
        <Route path="/not-finished" element={<NotFinished />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
