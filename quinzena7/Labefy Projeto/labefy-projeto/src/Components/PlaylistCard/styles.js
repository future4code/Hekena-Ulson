import styled from "styled-components"

export const PlaylistCardStyled = styled.div `
  height: 18%;
  width: 20%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid black;

`

export const ButtonTypeOne = styled.button `
  font-family: Sans-serif;
  background: black;
  color: white;
  width: 10vw;
  height: 4vh;
  margin-top: 15px;
  padding: 4px;
  border-color: none;
`
export const ButtonTypeTwo = styled.button `
  font-family: Sans-serif;
  background: black;
  font-size: 12px;
  color: white;
  width: 6vw;
  height: 5vh;
  margin-left: 1px;
  margin-right: 1px;
  border-color: none;
`

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`