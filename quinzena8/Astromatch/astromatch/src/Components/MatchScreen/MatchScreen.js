import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {MatchContainer, MainContainer, DislikeButton, LikeButton} from './Styled'



export const MatchScreen = (props) => {
  return (
    <MainContainer>
            <div>
              <img src={props.getProfiles.photo}/>
              <div>
                {props.getProfiles.name} - {props.getProfiles.age}
                <p>{props.getProfiles.bio}</p>
              </div>
            </div>
                
                <DislikeButton onClick = {props.chooseProfile(false)}>X</DislikeButton>
                <LikeButton onClick = {props.chooseProfile(true)}>♡</LikeButton>
    </MainContainer>
);
} 
   

