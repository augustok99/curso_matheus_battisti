import React from "react";
import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContextoContext";

const ComponentFilho = () => {
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={() => setMensagem("Nova mensagem")}>
        Alterar Mensagem
      </button>
    </div>
  );
};

export default ComponentFilho;
