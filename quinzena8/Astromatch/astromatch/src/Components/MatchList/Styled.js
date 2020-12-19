import React from 'react';
import styled from 'styled-components';



export const WeirdImage = styled.img `
    width: 50px;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const MatchListContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10%;
    /* box-shadow: 0px 1px 3px #e0e0e0; */
    border-bottom: 1px solid #e0e0e0;
    z-index: -350;
`

export const Paragraph = styled.p`
    align-self: center;
    margin-left: 8px;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    color: #343434;
`

export const ClearButton = styled.button`
    border-radius: 45px;
    border: 2px solid black;
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    background-color: white;
    width: 50%;
    margin-top: 10%;
`