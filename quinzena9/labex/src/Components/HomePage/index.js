import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import NavBar from '../NavBar/index'
import {MainDiv, MainContainer, PresentationWhite, PresentationBlue, ButtonStyled} from './styled'


const HomePage = () => {
  const history = useHistory();
  

  const goToTripList = () => {
    history.push("/trips")
  } 

  return (
    <MainDiv>
      <NavBar/>
      <MainContainer>
        <PresentationWhite>Encontre as melhores</PresentationWhite>
        <PresentationBlue>viagens espaciais</PresentationBlue> 
        <PresentationWhite>e boa viagem!</PresentationWhite>
        <ButtonStyled onClick={goToTripList}>QUERO VIAJAR!</ButtonStyled>
      </MainContainer>
    </MainDiv>
  );
}

export default HomePage;