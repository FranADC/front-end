import { useState } from "react";
import "./App.css";
//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Componentes
import CompoHeader from "./components/Header";
import CompoFooter from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <CompoHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
      <CompoFooter />
    </BrowserRouter>
  );
}

function Home() {
  return <p>Hola mundo</p>;
}
function Pagina1() {
  return <p>Pagina1</p>;
}
function Pagina2() {
  return <p>Pagina2</p>;
}

export default App;
