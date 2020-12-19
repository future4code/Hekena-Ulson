import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import useProtected from '../../Hooks/useProtected';
import {MainContainer4, Presentation4, MainDiv4, ButtonStyled4} from './styled'




const AdmMngmPage = () => {
  const history = useHistory();
  useProtected();

  const goToCreateTrip = () => {
    history.push("/trips/create")
  }

  const goToTripDetail = () => {
    history.push("/trips/detail/:id")
  }

  const goBack = () => {
    history.push("/")
  }

  return (
    <MainDiv4>
      <MainContainer4>
        <Presentation4>Gerenciamento do Administrador</Presentation4>
        <ButtonStyled4 onClick={goToCreateTrip}>CRIAR VIAGEM</ButtonStyled4>
        <ButtonStyled4 onClick={goToTripDetail}>DETALHES DA VIAGEM</ButtonStyled4>
        <ButtonStyled4 onClick={goBack}>VOLTAR</ButtonStyled4>
      </MainContainer4>
    </MainDiv4>
  );
}

export default AdmMngmPage;