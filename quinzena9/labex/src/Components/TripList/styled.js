import background from '../../img/Background.png';
import styled from 'styled-components';

export const MainDiv3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 1280px;
    background-image: url(${background});  
`

export const MainContainer3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 4%;
    align-self: center;
    background: rgba(255, 255, 255, 0.7);
    margin-top: 20%;
    padding-top: 8%;
    opacity: 90%; 
    border-radius: 24px;
    height: 120%;
    width: 70%;
`

export const Presentation3 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: -10%;
    margin-top: -4%;
`

export const ButtonStyled2 = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: white;
    background-color: #361F93;
    border-radius: 22px;
    width: 100px;
    height: 30px;
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

export const TripCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    margin-top: 20%;
    border-radius: 24px;
    height: 30%;
    width: 86%;
    padding: 3%;
`

export const CardTitle = styled.h6`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #361F93;
    margin-top: 3%;
    margin-bottom: -2%;
`
export const CardDetail = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    margin-bottom: -2%;
    
`
