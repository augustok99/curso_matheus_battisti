import { useReducer } from "react";

// Definição do estado inicial
const estadoInicial = { contador: 0 };

//função reducer que define como as ações atualizam o estado
function reducer(state, action) {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    case "resetar":
      return estadoInicial;
    default:
      return state;
  }
}

const Contador = () => {
  // Inicializar o useReducer com estado inicial e função modificadora
  const [state, dispatch] = useReducer(reducer, estadoInicial);
  return (
    <>
      <p>Contagem: {state.contador}</p>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "resetar" })}>Resetar</button>
    </>
  );
};

export default Contador;
