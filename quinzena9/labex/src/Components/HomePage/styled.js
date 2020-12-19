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
    background: rgba(255, 255, 255, 0.7);
    padding-top: 8%;
    flex-direction: column;
    align-self: center;
    margin-top: 35%;
    opacity: 90%; 
    border-radius: 24px;
    height: 50%;
    width: 70%;
`

export const PresentationWhite = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    opacity: 100%;
    margin-left: 30px;
    margin-bottom: -4%;
    font-weight: 500;

`

export const PresentationBlue = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #361F93;
    font-weight: 500;
    margin-bottom: -4%;
    margin-left: 30px;
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
    align-self: center;
    outline:none;
`