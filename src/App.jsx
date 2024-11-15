import { useState, useEffect } from "react";
import "./App.css";
//router
import {
  BrowserRouter,
  Routes,
  Route,
  json,
  useParams,
} from "react-router-dom";
//Componentes
import CompoHeader from "./components/Header";
import CompoFooter from "./components/Footer";
import CompoConjuros from "./components/Conjuros";
import CompoConjuroID from "./components/ConjuroID";

function App() {
  return (
    <BrowserRouter>
      <CompoHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conjuros" element={<CompoConjuros />} />
        <Route path="/conjuros/:ID" element={<CompoConjuroID />} />
      </Routes>
      <CompoFooter />
    </BrowserRouter>
  );
}

function Home() {
  return <p>Hola mundo</p>;
}

export default App;
