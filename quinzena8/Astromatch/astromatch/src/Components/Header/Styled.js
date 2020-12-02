import React from 'react';
import styled from 'styled-components';

export const MainHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 280px;
    border-radius: 45px 45px 0 0;
    padding-top: 30px;
    background-color: #a6cb26;
    align-self: flex-start;
`

export const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid black;
    font-size: 20px;
    margin-bottom: 10px;
`
export const DmButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid black;
    font-size: 15px;
    margin-bottom: 10px;
`