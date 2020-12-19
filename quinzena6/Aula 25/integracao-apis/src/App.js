import React from 'react'
import axios from "axios"
import './App.css';
import TelaInicial from './components/TelaInicial';
import ListaUsuarios from './components/ListaUsuarios';


export default class App extends React.Component {
  state = {
    telaAtual: false,
  };

  mudaTelaAtual = () => {
    this.setState ({telaAtual: !this.state.telaAtual})
  }
  render() {
    return (
      <div>
        <button onClick={this.mudaTelaAtual}>Mudar de Tela</button>
        {this.state.telaAtual ? <TelaInicial/> : <ListaUsuarios/>}
      </div>
    );
  }
}


