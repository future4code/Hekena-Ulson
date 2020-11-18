import React from "react";
import axios from "axios"; 


export default class ListaUsuarios extends React.Component {
  state = {
    listaDeUsuarios: [],
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'helena-rangel-tang'
      }
    }).then((resposta) => this.setState({listaDeUsuarios: resposta.data}))
    .catch((erro) => alert(erro.message))
  }
 
  deletarUsuario = (id) => {
    axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id', {
      headers: {
        Authorization: 'helena-rangel-tang'
      }
    }).then((resposta) => (resposta.data.id)).catch((erro) => alert(erro.message))
  }
   
  render() {
    const renderizaUsuario = this.state.listaDeUsuarios.map((usuario) => {
    return (
      <div key={usuario.id}> 
        {usuario.name}
        <button onClick = {() => this.deletarUsuario(usuario.id)}>Deletar</button>
      </div>
    )});
    return <div> {renderizaUsuario} </div>
    
  }
}

