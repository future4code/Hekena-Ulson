import React from "react";
import {BASE_URL, config } from "../../Requests/Requests";
import axios from "axios";
import styled from "styled-components";
import Logo_Labefy from "../../Logo_Labefy.png"
import {PlaylistManager } from "./../PlaylistManager/PlaylistManager"
import { ImageLogo, DivInput, BigDiv, DivTitle, Subtitle , ButtonTypeOne,ButtonTypeTwo, Input} from "./styles";



export class CreatePlaylist extends React.Component {
  state = {
      newPlaylist: "",
  }
  
  changePlaylist = (event) => {
    this.setState({newPlaylist: event.target.value})
  }

  creatPlaylist = () => {
    const body = {
      name: this.state.newPlaylist
    };

    axios
      .post(BASE_URL, body, config)
      .then(() => {
        alert("Sua playlist foi criada com sucesso!");
        this.setState({ newPlaylist: ""});
      })
      .catch((error) => alert(error.message));
  };
  

  render () {
    return (
      <BigDiv>
         <DivTitle>
            <ImageLogo src={Logo_Labefy}/>
            <Subtitle>A sua música, a qualquer momento do dia</Subtitle>
          </DivTitle>
          <DivInput>  
            <Input 
            placeholder="________________Crie sua playlist!_________________ "
            value = {this.state.newPlaylist}
            onChange = {this.changePlaylist}
            />
            <ButtonTypeOne onClick={this.creatPlaylist}>Criar Playlist</ButtonTypeOne>
          </DivInput>
          <DivInput>
            <ButtonTypeTwo onClick={() => this.props.changePageProps("playlistmanager")}>Ver minhas Playlists</ButtonTypeTwo>
          </DivInput>
      </BigDiv>
    )
  }
} 

