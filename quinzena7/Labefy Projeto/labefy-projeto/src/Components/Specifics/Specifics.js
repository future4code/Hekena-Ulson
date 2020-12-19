import React from "react";
import axios from "axios";
import {BASE_URL, config} from "../../Requests/Requests"
import {Tracks} from "../Tracks/Tracks"



export class Specifics extends React.Component {
  state = {
    tracks: [],
    trackName: "",
    artist: "",
    url:"",
    currentScreen: "specifics"
  }

  componentDidMount() {
    this.getDetailsPlaylists();
  }
    
  getDetailsPlaylists = () => {
    axios.get(`${BASE_URL}/${this.props.idPlaylist}/tracks`, config ).then((response) => {
      this.setState({tracks: response.data.result.tracks});
      console.log(this.state.tracks)
    })
    .catch((error) => alert(error.message));
  };

  deleteTrack = (trackId) => {
    axios.delete(`${BASE_URL}/${this.props.idPlaylist}/tracks/${trackId}`, config).then(() => {
        this.getDetailsPlaylists();
    }).catch(err => {
        console.log(err);
    });
  };

  onChangeTracks = (event) => {
    this.setState ({[event.target.name] : event.target.value})
  }
  
  addTrack = () => {
    const body = {
      name: this.state.trackName,
      artist: this.state.artist,
      url: this.state.url
  };
    axios.post(`${BASE_URL}/${this.props.idPlaylist}/tracks`, body,  config
      ).then(() => {
      this.getDetailsPlaylists();
      }).catch(error => {
        console.log(error);
      });
      this.setState({
        trackName: "",
        artist: "",
        url: ""
    })
  }

  

  render () {
    /* const renderPlaylistTracks = this.state.playLists.map((tracks) => {
      return (
             <div key={tracks.id}>
                {tracks.name}
                <button onClick={() => this.getDetailsPlaylists(tracks.id)}>Ver Detalhes</button>
             </div>
             );
      }); */
   
      const renderTracks = this.state.tracks.map((tracks)=> {
        return <Tracks key={tracks.id}
                  trackName={tracks.name}
                  artist={tracks.artist}
                  url={tracks.url}
                  trackId = {tracks.id}
                  removeTrack={this.deleteTrack()}
                />
      });
    
    return (
      <div>
         <div>
            <div onSubmit={this.addTrack}>
                <label>Nome da música:</label>
                <input
                name="trackName"
                value={this.state.trackName}
                onChange={this.onChangeTracks} />
            </div>
            <div>
                <label>Artista:</label>
                <input 
                placeholder="Nome do Artista"
                name="artist"
                value={this.state.artist}
                onChange={this.onChangeTracks}/>
            </div>
            <div>
                <label>Link da Música:</label>
                <input
                placeholder="URL da música"
                name="url"
                value={this.state.url}
                onChange={this.onChangeTracks} />
            </div>
            <button type = "submit" >Adicionar música</button>
        </div>
        <p>{renderTracks}</p>
        <button onClick={() => this.props.changePageProps("playlistmanager")}>Voltar</button>
      </div>
    )
  }

} 
