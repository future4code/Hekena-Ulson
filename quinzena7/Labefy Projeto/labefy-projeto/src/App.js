import React from "react";
import './App.css';
import styled from "styled-components";
import axios from "axios";
/* import {PlaylistList} from "./Components/PlaylistList/PlaylistList"
import {Specifics} from "./Components/Specifics/Specifics" */
import {BigDiv, ButtonTypeOne} from "./styled"
import {CreatePlaylist} from "./Components/createplaylist/CreatePlaylist"
import { PlaylistManager } from "./Components/PlaylistManager/PlaylistManager";




class App extends React.Component {
  state = 
    {
      playLists: [],
      currentScreen: "createplaylist"
    }
  

  changeScreen = (newPage) =>{
    this.setState({currentScreen: newPage})
  }
  
  
  render() {
    const renderCurrentPage = () => {
      switch (this.state.currentScreen) {
        case "createplaylist":
          return (
            <CreatePlaylist
              changePageProps={this.changeScreen}
            />
          );
        case "playlistmanager":
          return (
            <PlaylistManager
              changePageProps={this.changeScreen}
            />
          );
       /*  case "specifics": 
          return (
            <Specifics
              changePageProps={this.changeScreen}
            />
          ); */
        default:
          return (
            <CreatePlaylist
              changePageProps={this.changeScreen}
            />
          );
      }
    };

    return <div>{renderCurrentPage()}</div>;
  }
}



export default App;