import { Component } from "react";
import "./App.css";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import ComponentFilho from "./components/ComponentFilho";
import { MeuContextoProvider } from "./contexts/MeuContextoProvider";
import ValorDoContexto from "./components/ValorDoContexto";

function App() {
  return (
    <>
      {/* 8.1 - useEffect */}
      <ExemploUseEffect />
      <Timer />
      {/* 8.2 - useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponentFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
    </>
  );
}

export default App;
