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
  width: 200px;
  height: 200px;
`

export const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-align: center;
`