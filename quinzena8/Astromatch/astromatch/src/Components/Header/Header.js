import React from 'react';
import styled from 'styled-components';
import {GoBackButton, DmButton, MainHeader} from './Styled'



const Header = (props) => {
  const goBackButton = (
    <GoBackButton onClick = {props.renderScreen}>↩</GoBackButton>
  )

  const dmButton = (
    <DmButton onClick = {props.renderScreen}>💬</DmButton>
  )

  return (
   <MainHeader>
     <img></img>
     {!props.currentScreen ?  goBackButton : dmButton}
    
   </MainHeader>
  );
}

export default Header;