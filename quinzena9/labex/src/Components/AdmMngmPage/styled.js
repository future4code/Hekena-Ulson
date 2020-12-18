import background from '../../img/Background.png';
import styled from 'styled-components';

export const MainDiv4 = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 640px;
    background-image: url(${background});  
`

export const MainContainer4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 4%;
    flex-direction: column;
    align-self: center
    display: flex;
    background: rgba(255, 255, 255, 0.7);
    flex-direction: column;
    align-self: center;
    margin-top: 45%;
    padding-top: 8%;
    opacity: 90%; 
    border-radius: 24px;
    height: 50%;
    width: 70%;
`

export const Presentation4 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #361F93;
    margin-left: 15%;
`

export const ButtonStyled4 = styled.button`
    font-family: 'Poppind', sans-serif;
    font-size: 14px;
    color: white;
    background-color: #361F93;
    border-radius: 22px;
    width: 192px;
    height: 41px;
    border-style: none;
    opacity: 100;
    outline:none;
    align-self: center;
`
