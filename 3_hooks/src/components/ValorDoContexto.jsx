import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContextoContext";

const ValorDoContexto = () => {
  const { mensagem } = useContext(MeuContexto);

  return <div>Valor do Contexto é {mensagem}</div>;
};

export default ValorDoContexto;
