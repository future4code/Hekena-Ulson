import React from 'react';
import './App.css';
import styled from 'styled-components';
/* import Post from './components/Post/Post'; */

const Estilizado = styled.input`
      padding: 4px;
      margin: 2px;
      background-color: light-gray;
      border-radius: 8px;
      border: 1px solid gray;
`;

class App extends React.Component {
  state = { 
    arrayDePosts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'joaninha',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/149'
      },
      {
        nomeUsuario:'marquinhos',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/148'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };
  adicionaPost = () =>{
    const NovoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const NovosPosts = [... this.state.arrayDePosts, NovoPost];
    this.setState({arrayDePosts: NovosPosts});

  };

  onChangeInputNome = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value});
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});
  };
  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value});
  };


  render() {
    const posts = this.state.arrayDePosts.map((postPessoa) => {
      return (
        <div>
          <img src={postPessoa.fotoUsuario}/>
          <p> {postPessoa.nomeUsuario}</p>
          <img src={postPessoa.fotoPost}/>
        </div> 
      );
    });
    return (
      <div className={'app-container'}>
        <div> {posts} </div>
        <Estilizado 
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputNome}
        placeholder="nome do usuário"/>
        <Estilizado
        value= {this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder="Foto de Perfil"/>
        <Estilizado
        value= {this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder="Foto do Post"/>
        <button onClick={this.adicionaPost}> Adicionar Post</button>
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'joaninha'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/149'}
        />
        <Post
          nomeUsuario={'marquinhos'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/148'}
        /> */}
      </div>
    );
  }
}

export default App;
