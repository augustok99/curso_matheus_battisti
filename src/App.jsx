import { Component } from "react";
import "./App.css";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import ComponentFilho from "./components/ComponentFilho";
import { MeuContextoProvider } from "./contexts/MeuContextoProvider";
import ValorDoContexto from "./components/ValorDoContexto";
import Contador from "./components/Contador";
import DisplayWindowSize from "./components/DisplayWindowSize";
import Container from "./components/Container";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import CalculoPesado from "./components/CalculoPesado";
import ContadorCallback from "./components/ContadorCallback";

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
      {/* 8.3 - useReducer */}
      {/* estados mais complexos*/}
      <Contador />
      {/* 8.4 - Custom Hook */}
      <DisplayWindowSize />
      {/* 8.5 - Slots e children props */}
      <Container>
        <h1>Conteúdo dentro do Container</h1>
        <p>Este é meu subtitulo.</p>
      </Container>
      {/* 8.6 - Sincronizar o estado com props */}
      {/* props => componente => chamada de API => resulta em um dado  */}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      {/* 8.7 - useMemo e useCallback */}
      <CalculoPesado numero={5} />
      <ContadorCallback />
    </>
  );
}

export default App;
