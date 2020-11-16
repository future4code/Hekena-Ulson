import React from 'react'
import Etapa1 from "./Components/Etapa1"
import Etapa2 from "./Components/Etapa2"
import Etapa3 from "./Components/Etapa3"
import Final from "./Components/Final"
import "./App.css"
import styled from "styled-components"



export default class Home extends React.Component {
  state = {
    etapa: 1,
  };

  irPraProximaEtapa = () =>{
    this.setState({etapa: this.state.etapa + 1})
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>

      case 2:
        return <Etapa2/>

      case 3:
        return <Etapa3/>

      default:
        return <Final/>
    }
  }

  render() {
    const renderizaTelaCorreta = () => {
      if (this.state.etapa <= 3) {
        return <div className="containerPrincipal">
                {this.renderizaEtapa()}
                <button onClick={this.irPraProximaEtapa}>Próxima Etapa</button>
               </div> ;
      } else {
        return <div className="containerPrincipal">
                  {this.renderizaEtapa()}
               </div>
      }
    };
    
    return <div>{renderizaTelaCorreta()}</div>
    }
  }
    /* return (
      <div className="containerPrincipal">
        {this.renderizaEtapa()}
        <button onClick={this.irPraProximaEtapa}>Próxima Etapa</button>
      </div>
    )
  }
}   */

