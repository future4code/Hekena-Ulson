import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import useProtected from '../../Hooks/useProtected';

/* import axios from "axios"; */



const AdmMngmPage = () => {
  const history = useHistory();
  useProtected();

  const goToCreateTrip = () => {
    history.push("/trips/create")
  }

  const goToTripDetail = () => {
    history.push("/trips/detail")
  }

  const goBack = () => {
    history.push("/")
  }

  return (
    <div className="App">
      <p>Gerenciamento do Adm</p>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToTripDetail}>Detalhes da Viagem</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}

export default AdmMngmPage;