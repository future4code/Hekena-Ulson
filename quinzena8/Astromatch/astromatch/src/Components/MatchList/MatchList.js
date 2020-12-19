import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {baseURL} from '../../Requests'
import {ClearButton, Paragraph, MainContainer, MatchListContainer, WeirdImage} from './Styled'




export const MatchList = (props) => {
  const [matchProfile, setMatchProfile] = useState([]);

  useEffect(()=> {
    getMatches();
  }, []);

  const getMatches = () => {
    axios.get(`${baseURL}matches`).then((response)=> {
      setMatchProfile(response.data.matches)
    }).catch(error => {
      console.log(error)
    })
  };

  console.log(matchProfile)
  const renderMatches = matchProfile.map((profile)=>{
    if (matchProfile === undefined) {
      return <p>Eita! Você ainda não tem matches</p>
    } else {
      return <MatchListContainer key={profile.id}>
                  <WeirdImage src={profile.photo}/>
                  <Paragraph>{profile.name}</Paragraph>
          </MatchListContainer>
    }
    
  })
  
  return (
    <MainContainer>
        {renderMatches}
        <ClearButton onClick = {props.clearProfiles}>Cansei dessa galera</ClearButton> 
    </MainContainer>
);
}

