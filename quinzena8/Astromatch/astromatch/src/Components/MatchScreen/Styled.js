import React from 'react';
import styled from 'styled-components';



export const DislikeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid black;
    font-size: 30px;
    padding: 0;
    margin: 0;

`
export const LikeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid black;
    font-size: 40px;

`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  width: 280px;
  border: 2px solid black;
  border-radius: 47px;

`

export const PhotoCard = styled.img`
  display: flex;
  align-self: center;
  width: 280px;
  height: 200px;
  z-index: -200;
`

export const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-align: center;
  justify-content: center;
  box-shadow: 0px 4px 6px grey;
`

export const MatchButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 12%;
`

export const Typography = styled.div`
  margin-top: 6%;
  margin-left: 3%;
  width: 90%;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: #343434;
`
export const StyledParagraph = styled.p`
  margin-top: 8%;
  width: 95%;
  margin-left: 8px;
  font-size: 12px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  color: #343434;
  padding-bottom: 10px;
`