import React from 'react';
import {useHistory} from 'react-router-dom'
import NavBar from '../NavBar/index'
import {MainContainer2, MainDiv2} from './styled'
import styled from 'styled-components';

const ApplicationForm = () => {
  const history = useHistory();

  const goToTripList = () => {
    history.push("/trips/list")
  }
  return (
    <MainDiv2>
      <NavBar/>
      <MainContainer2>
        <p>Formulário de Inscrição</p>
        <input placeholder="Nome"/>
        <input placeholder="Idade"/>
        <input placeholder="Profissão"/>
        <input placeholder="País"/>
        <input placeholder="Porque sou um bom candidato?"/>
        <button onClick={goToTripList}>Confirmar Candidatura</button>
      </MainContainer2>
    </MainDiv2>
  );
}

export default ApplicationForm;