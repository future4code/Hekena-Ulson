import React from 'react';
import styled from 'styled-components';


export const MainHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 280px;
    border-radius: 45px 45px 0 0;
    padding-top: 30px;
    background-color: #a6cb26;
    align-self: flex-start;
    box-shadow: 0px 4px 6px #4f4f4f;
`

export const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    font-size: 20px;
    margin-bottom: 12px;
    margin-left: 20px;
`
export const DmButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    font-size: 15px;
    margin-bottom: 12px;
    margin-left: 20px;
`

export const StyledLogo = styled.img`
    width: 48%;
    margin-bottom: 5px;
    margin-top: -10px;
    margin-left: 40px;
    `