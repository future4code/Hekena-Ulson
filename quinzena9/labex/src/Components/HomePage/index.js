import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {MainDiv} from './styled'


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
      <p>HomePage</p>
      <button onClick={goToAdminLogin}>Login</button>
      <button onClick={goToApplicationForm}>Quero Viajar!</button>
    </MainDiv>
  );
}

export default HomePage;