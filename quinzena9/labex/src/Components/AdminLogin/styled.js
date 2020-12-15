import background from '../../img/Background.png';
import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 640px;
    background-image: url(${background});  
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    padding-top: 4%;
    flex-direction: column;
    align-self: center;
    margin-top: 25%;
    opacity: 90%; 
    border-radius: 24px;
    height: 369px;
    width: 264px;
`

export const PresentationWhite = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #361F93;
`

export const ButtonStyled = styled.button`
    font-family: 'Poppind', sans-serif;
    font-size: 14px;
    color: white;
    background-color: #361F93;
    border-radius: 22px;
    width: 192px;
    height: 41px;
    border-style: none;
    opacity: 100;
    margin-top: 60%;
    margin-bottom: 4%;
    outline:none;
    align-self: center;
`

export const StyledInput = styled.input`
    border-radius: 45px;
    border-style: none;
    outline:none;
    width: 80%;
    padding: 2%;
    padding-left: 6%;

`