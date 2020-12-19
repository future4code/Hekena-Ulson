import React from "react";
import axios from "axios";
import {BASE_URL, config} from "../../Requests/Requests"
import { Specifics } from "./../Specifics/Specifics"
import { PlaylistList } from "./../PlaylistList/PlaylistList";
import {ButtonTypeOne} from "./styles"


export class PlaylistManager extends React.Component {
    state = {
        currentScreen : "playlistlist", 
        idPlaylist: ""
    }

    changeScreen = (currentScreen, idPlaylist) =>{
        this.setState({currentScreen: currentScreen, idPlaylist: idPlaylist})
    }

    render () {
        const renderCurrentPage = () => {
            switch (this.state.currentScreen) {
              case "playlistlist":
                return (
                  <PlaylistList
                    changePageProps={this.changeScreen}
                    idPlaylist = {this.state.idPlaylist}
                  />
                );
              case "specifics": 
                return (
                  <Specifics
                    changePageProps={this.changeScreen}
                    idPlaylist = {this.state.idPlaylist}
                  />
                );
              /* case "playlistcard":
                  return (
                      <PlaylistCard
                          changePageProps={this.changeScreen}
                          idPlaylist = {this.state.idPlaylist}
                  
                  />
                ); */
              default:
                return (
                  <PlaylistList/>
                );
            }
          };
      
    return (
        <div>
            {renderCurrentPage()}
            <ButtonTypeOne onClick={() => this.props.changePageProps("createplaylist")}>Voltar</ButtonTypeOne>
        </div>
    )      
  }
} 
