import React from 'react';
import styled from 'styled-components';
import {StyledLogo, GoBackButton, DmButton, MainHeader} from './Styled'
import Logo from '../../imgs/Logo.png'



const Header = (props) => {
  const goBackButton = (
    <GoBackButton onClick = {props.renderScreen}>↩</GoBackButton>
  )

  const dmButton = (
    <DmButton onClick = {props.renderScreen}>💬</DmButton>
  )

  return (
   <MainHeader>
     <StyledLogo src={Logo}></StyledLogo>
     {!props.currentScreen ?  goBackButton : dmButton}
    
   </MainHeader>
  );
}

export default Header;