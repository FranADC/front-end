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
import CompoConjuroAdd from "./components/ConjuroAdd";
import CompoConjuroUpdate from "./components/ConjuroUpdate";

function App() {
  return (
    <BrowserRouter>
      <CompoHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conjuros" element={<CompoConjuros />} />
        <Route path="/conjuros/:ID" element={<CompoConjuroID />} />
        <Route path="/conjuros/añadir" element={<CompoConjuroAdd />} />
        <Route
          path="/conjuros/modificar/:ID"
          element={<CompoConjuroUpdate />}
        />
      </Routes>
      <CompoFooter />
    </BrowserRouter>
  );
}

function Home() {
  return <p>Hola mundo</p>;
}

export default App;
