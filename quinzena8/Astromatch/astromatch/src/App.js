import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import { MainContainer, MatchContainer} from './Styles';
import Header from './Components/Header/Header';
import {MatchList} from './Components/MatchList/MatchList';
import {MatchScreen} from './Components/MatchScreen/MatchScreen'; 
import {baseURL, config} from './Requests' 



function App() {
  const [allProfiles, setAllProfiles] = useState({});
  const [currentScreen, setCurrentScreen] = useState(true); 
  const [loaded, setLoaded] = useState(false); 
  
 useEffect(() => {
    getProfiles();
  }, []); 
  
  
  // pega o perfil - está pegando, segundo o console log
  const getProfiles = () => {
    setLoaded(false)
    axios.get(`${baseURL}person`).then((response) => {
      console.log(response)
      setAllProfiles(response.data.profile);
    }).catch((error) => {
      console.log(error)
    })
  };

  // escolhe um perfil - mandado como props pro MatchScreen
  const chooseProfile = (yesorno) => {
    const body = {
      id: allProfiles.id,
      choice: yesorno
    }
    axios.post(`${baseURL}choose-person`, body)
    .then(() => {
        getProfiles();
    }).catch((error) => {
      console.log(error)
    })
  }  
 
  // tentando uma renderização condicional aqui nessa birosk - deu certo caraio
  const goToMatchList = () => {
    setCurrentScreen(!currentScreen)
  } 

  // limpa os matches e é passada como props pro botão da MatchList
  const clearProfiles = () => {
    axios.put(`${baseURL}clear`).then((response) => {
      console.log("sucesso caraio")
    }).catch((error) => {
      console.log(error)
    })
  }; 


  const renderScreen = () => {   
    if (allProfiles !== null && currentScreen === true) {
      return <MatchScreen getProfiles={allProfiles} chooseProfile={chooseProfile} />       
    } else if (allProfiles !== null && currentScreen === false) {
      return <MatchList clearProfiles={clearProfiles} />
    } else {
      return <p>Loading</p>
    }
  }

  return (
    <MainContainer>
      <MatchContainer>
        <Header currentScreen={currentScreen} renderScreen={goToMatchList} />
         {renderScreen()}
      </MatchContainer>
    </MainContainer>
  );
}

export default App;
