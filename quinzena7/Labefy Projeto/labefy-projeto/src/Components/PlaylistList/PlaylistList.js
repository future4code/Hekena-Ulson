import React from "react";
import axios from "axios";
import {BASE_URL, config} from "../../Requests/Requests"
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import { PlaylistBox, ButtonTypeOne } from "./styles"



export class PlaylistList extends React.Component {
  state = {
    playLists: []
    /* tracks: [], */
  };

  componentDidMount () {
    this.getPlaylists();
  }

  getPlaylists = () => {
    axios.get(BASE_URL, config ).then((response) => {
      this.setState({playLists: response.data.result.list})
      console.log(response.data.result.list)  
    })
    .catch((error) => alert(error.message));
    };
    
  /* getDetailsPlaylists = (id) => {
    axios.get(`${BASE_URL}/${id}/tracks`, config ).then((response) => {
      this.setState({tracks: response.data.result.tracks});
      console.log(this.state.tracks)
    })
    .catch((error) => alert(error.message));
  }; */

  deletePlaylists = (id) => {
    axios.delete(`${BASE_URL}/${id}`, config ).then(() => {
      this.getPlaylists();
    })
    .catch((error) => alert(error.message));
  };

  

    render () {
      const renderPlaylists = this.state.playLists.map((element) => {
      return <PlaylistCard
                key={element.id}
                changePage={this.props.changePageProps} 
                name = {element.name}
                id = {element.id}
                deletePlaylists = {this.deletePlaylists}/>
      });

    return  <PlaylistBox>
              {renderPlaylists}
            </PlaylistBox>
    
  }
} 

