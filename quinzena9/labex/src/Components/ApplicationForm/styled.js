import background from '../../img/Background.png';
import styled from 'styled-components';

export const MainDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 640px;
    background-image: url(${background});  
`

export const MainContainer2 = styled.div`
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
    margin-top: 20%;
    padding-top: 8%;
    opacity: 90%; 
    border-radius: 24px;
    height: 80%;
    width: 70%;
`

export const Presentation2 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #361F93;
    margin-top: 4%;
`

export const ButtonStyled2 = styled.button`
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

export const StyledInput2 = styled.input`
    border-radius: 45px;
    border-style: none;
    outline:none;
    width: 80%;
    padding: 2%;
    padding-left: 6%;

`

export const StyledInputText = styled.input`
    border-radius: 10px;
    border-style: none;
    outline:none;
    width: 80%;
    height: 20%;
    padding: 2%;
    padding-left: 6%;
    display: flex;

`

export const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 4%;
    flex-direction: column;
    align-self: center
    border: 2px solid black;
    width: 100%;
    height: 100%;
   
`