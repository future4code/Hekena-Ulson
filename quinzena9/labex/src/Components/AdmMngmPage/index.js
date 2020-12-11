import React from 'react';
import {useHistory} from 'react-router-dom';

const AdmMngmPage = () => {
  const history = useHistory();

  const goToCreateTrip = () => {
    history.push("/trips/create")
  }

  const goToTripDetail = () => {
    history.push("/trips/detail")
  }

  return (
    <div className="App">
      <p>Gerenciamento do Adm</p>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClisk={goToTripDetail}>Detalhes da Viagem</button>
    </div>
  );
}

export default AdmMngmPage;