import background from '../../img/Background.png';
import styled from 'styled-components';

export const MainDiv6 = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 100%;
    background-image: url(${background});  
`
export const MainDiv7 = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 640px;
    background-image: url(${background});  
`

export const MainContainer6 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-self: center
    display: flex;
    background: rgba(255, 255, 255, 0.7);
    flex-direction: column;
    align-self: center;
    margin-top: 10%;
    padding-top: 8%;
    opacity: 90%; 
    border-radius: 24px;
    height: 50%;
    width: 70%;
`

export const Presentation6 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #361F93;
    margin-top: 15%;
    `

export const ButtonStyled6 = styled.button`
    font-family: 'Poppind', sans-serif;
    font-size: 14px;
    color: white;
    background-color: #361F93;
    border-radius: 22px;
    width: 192px;
    height: 41px;
    border-style: none;
    opacity: 100;
    margin-top: 10%;
    margin-bottom: 4%;
    outline:none;
    align-self: center;
`