import React, {useState} from 'react';
import axios from "axios";
import styled from 'styled-components';
import {MainDiv, StyledInput, MainContainer, ButtonStyled, PresentationWhite} from './styled'
import {useHistory} from 'react-router-dom';

const loginUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/login"

const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  /* const goToManagementPage = () => {
    history.push("/login/management")
  } */

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(loginUrl, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/login/management");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        console.log(error);
      });
  };

  return (
    <MainDiv>
      <MainContainer>
        <PresentationWhite>Login</PresentationWhite>
        <StyledInput
          placeholder= "Email"
          value={email}
          onChange={onChangeEmail}
        />
        <StyledInput
          placeholder="Senha"
          value={password}
          type="password"
          onKeyDown={login}
          onChange={onChangePassword}
        />
        <ButtonStyled onClick={login}>ENTRAR</ButtonStyled>

      </MainContainer>
    </MainDiv>
  );
}

export default AdminLogin;