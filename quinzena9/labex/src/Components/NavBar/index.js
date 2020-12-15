import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {MainNavBar, Login, Logo, LogoX} from './styled'

const NavBar = () => {
  const history = useHistory();

  
  const goToAdminLogin = () => {
    history.push("/login");
  };

  return (
    <MainNavBar>
        <Logo>Labe</Logo>
        <LogoX>X</LogoX>
      <Login onClick={goToAdminLogin}>Login</Login>
    </MainNavBar>
  );
}

export default NavBar;