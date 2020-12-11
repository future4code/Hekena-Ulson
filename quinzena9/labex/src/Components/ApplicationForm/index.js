import React from 'react';
import {useHistory} from 'react-router-dom'
const ApplicationForm = () => {
  const history = useHistory();

  const goToTripList = () => {
    history.push("/trips/list")
  }
  return (
    <div className="App">
      <p>Formulário de Inscrição</p>
      <input placeholder="Nome"/>
      <input placeholder="Idade"/>
      <input placeholder="Profissão"/>
      <input placeholder="País"/>
      <input placeholder="Porque sou um bom candidato?"/>
      <button onClick={goToTripList}>Confirmar Candidatura</button>

    </div>
  );
}

export default ApplicationForm;