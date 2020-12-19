import React, {Component} from "react";
import axios from "axios"; 


export default class TelaInicial extends Component {
  state = {
    usuarios: [],
    novoNome: "",
    novoEmail: ""
  }

  onChangeNome = (event) => {
    this.setState({ novoNome: event.target.value})
   }

  onChangeEmail = (event) => {
    this.setState({ novoEmail: event.target.value})
   }

  criarUsuario = () => {
    const body = {
      name: this.state.novoNome,
      email: this.state.novoEmail
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'helena-range-tang'
      }
    }).then(() => {
      alert("Usuário cadastrado com sucesso")
      this.setState({novoNome: "", novoEmail:""})
    }).catch((error) => {
      alert(error.message)
    })

  };
 
  

  render() {
    return (
      <div className="TelaInicial">
        <div>
          <p>Insira seu Nome</p>
          <input 
          placeholder="insira o seu nome"
          value= {this.state.novoNome} 
          onChange= {this.onChangeNome} />  
        </div>
        <div>
          <p>Insira seu Email</p>
          <input
          placeholder="insira o seu email"
          value= {this.state.novoEmail} 
          onChange= {this.onChangeEmail} />  
        </div>
        <button onClick={this.criarUsuario}>Cadastrar-se</button>
        
      </div>
    );
  }
}

