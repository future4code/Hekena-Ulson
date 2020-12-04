import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { StyledParagraph, Typography, MatchButtons, PhotoCard, MainContainer, DislikeButton, LikeButton, MatchCard} from './Styled'



export const MatchScreen = (props) => {
  return (
    <MainContainer>
                <MatchCard>
                    <PhotoCard src={props.getProfiles.photo}/> 
                    <Typography>
                      {props.getProfiles.name} - {props.getProfiles.age}
                    </Typography>  
                      <StyledParagraph>{props.getProfiles.bio}</StyledParagraph>
                    
                </MatchCard>
                <MatchButtons> 
                  <DislikeButton onClick = { () => props.chooseProfile(false)}>X</DislikeButton>
                  <LikeButton onClick = { () => props.chooseProfile(true)}>♡</LikeButton>
                </MatchButtons>
                  
    </MainContainer>
);
} 
   

