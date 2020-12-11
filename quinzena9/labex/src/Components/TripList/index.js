import React from 'react';
import {useHistory} from 'react-router-dom'

const TripList = () => {
  const history = useHistory();

  const goToApplicationForm = () => {
    history.push("/application-form")
  }
  return (
    <div className="App">
      <p>Lista de Viagens</p>
      <button onClick={goToApplicationForm}>Me leva!</button>
    </div>
  );
}

export default TripList;