import React from 'react'

const RenderCondicional = ({ user }) => {
  return (
    <div>
    {user && <h1>Bem vindo de volta, {user}!</h1>}
    </div>
  )
}

export default RenderCondicional