import { useState, useEffect } from "react";

const PerfilDeUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Função para buscar os dados do usuário
    const buscarUsuarios = async () => {
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      );

      const dados = await resposta.json();

      setUsuario(dados);
    };

    if (usuarioId) {
      buscarUsuarios();
    }
  }, [usuarioId]); // chama apenas uma vez ao montar o componente

  return (
    <div>
      {usuario ? (
        <div>
          <h1>{usuario.name}</h1>
          <p>Email: {usuario.email}</p>
          <p>Telefone: {usuario.phone}</p>
        </div>
      ) : (
        <p>Carregando perfil de usuário...</p>
      )}
    </div>
  );
};

export default PerfilDeUsuario;
