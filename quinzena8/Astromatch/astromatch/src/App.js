import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import { MainContainer, MatchContainer} from './Styles';
import Header from './Components/Header/Header';
import {MatchList} from './Components/MatchList/MatchList';
import {MatchScreen} from './Components/MatchScreen/MatchScreen'; 
import {baseURL} from './Requests' 



function App() {
  const [currentScreen, setCurrentScreen] = useState(true);
  const [allProfiles, setAllProfiles] = useState([]);

  
  useEffect(() => {
    getProfiles()
  }, []);
  
  
  const getProfiles = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/helena/person").then((response) => {
      setAllProfiles(response.data.profile);
      console.log(allProfiles)
    }).catch((error) => {
      console.log(error)
    })
  };

  
  const chooseProfile = (boolean) => {
    const body = {
      id: allProfiles.id,
      choice: boolean
    }
    axios.post(`${baseURL}choose-person`, body)
    .then((response) => {
        getProfiles();
    }).catch((error) => {
      console.log(error)
    })
  }  

  const goToMatchList = () => {
    setCurrentScreen(!currentScreen)
  }

  return (
    <MainContainer>
      <MatchContainer>
        <Header currentScreen={currentScreen} renderScreen={goToMatchList}/>
          {currentScreen ? <MatchScreen  getProfiles={allProfiles} chooseProfile={chooseProfile}/> : <MatchList/>}    
      </MatchContainer>
    </MainContainer>
  );
}

export default App;
