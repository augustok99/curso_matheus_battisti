import './App.css'
import LoginButton from './components/LoginButton.jsx'
import RenderCondicional from './components/RenderCondicional.jsx'
import Warning from './components/Warning.jsx'
import Numberlist from './components/Numberlist.jsx'
import BotaoEstilizado from './components/BotaoEstilizado.jsx'
import BotaoAzul from './components/BotaoAzul.jsx'
import Exercises from './components/Exercises.jsx'

function App() {

  return (
    <>
      {/* 6.11 - Renderização condicional */}
      <RenderCondicional user='Carlos' />
      {/* 6.12 - Expressão ternária */}
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
      {/* 6.13 - Render nulo */}
      <Warning warning="Temos um aviso importante!" />
      {/* 6.14 - Listas de chaves */}
      <Numberlist numbers={[1, 2, 3, 4, 5]} />
      {/* 6.15 - Estilos por atributo */}
      <BotaoEstilizado />
      {/* 6.16 - Estilos globais */}
      <BotaoAzul />
      {/* 6.17 - Exercicios */}
      <Exercises />

    </>
  )
}

export default App