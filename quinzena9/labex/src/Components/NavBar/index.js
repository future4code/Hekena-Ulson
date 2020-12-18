import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {MainNavBar, Login, Logo, LogoX} from './styled'

const NavBar = () => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/")
  }
  const goToAdminLogin = () => {
    history.push("/login");
  };

  return (
    <MainNavBar>
        <Logo onClick={goToHomePage}>Labe</Logo>
        <LogoX onClick={goToHomePage}>X</LogoX>
      <Login onClick={goToAdminLogin}>Login</Login>
    </MainNavBar>
  );
}

export default NavBar;