import React from 'react'
export default class Etapa1 extends React.Component {
  render() {
    

  return (
    <div>
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <h3> 1. Qual o seu nome? </h3>
      <input/>
      <h3>2. Qual a sua idade?</h3>
      <input/>
      <h3>2. Qual seu email?</h3>
      <input/>
      <h3>2. Qual a sua escolaridade?</h3>
      <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
      </select>
    </div>
  )
}
}

