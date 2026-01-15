import React from "react";
import { useState, useCallback } from "react";

// React.memo != useMemo
// memo = componentes
// useMemo = valores
const Botao = React.memo(({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
});

const ContadorCallback = () => {
  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {
    setCount((contadorAnterior) => contadorAnterior + 1);
  }, []);

  return (
    <div>
      <p>Contagem: {count} </p>
      <Botao onClick={incrementar}>Incrementar</Botao>
    </div>
  );
};

export default ContadorCallback;
