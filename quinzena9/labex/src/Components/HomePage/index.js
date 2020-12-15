import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import NavBar from '../NavBar/index'
import {MainDiv, MainContainer, PresentationWhite, PresentationBlue, ButtonStyled} from './styled'


const HomePage = () => {
  const history = useHistory();
  

  const goToAdminLogin = () => {
    history.push("/login");
  };

  const goToApplicationForm = () => {
    history.push("/application-form"); 
  };

  return (
    <MainDiv>
      <NavBar/>
      <MainContainer>
        <PresentationWhite>Encontre as melhores</PresentationWhite>
        <PresentationBlue>viagens espaciais</PresentationBlue> 
        <PresentationWhite>e boa viagem!</PresentationWhite>
        <ButtonStyled onClick={goToApplicationForm}>QUERO VIAJAR!</ButtonStyled>
      </MainContainer>
    </MainDiv>
  );
}

export default HomePage;