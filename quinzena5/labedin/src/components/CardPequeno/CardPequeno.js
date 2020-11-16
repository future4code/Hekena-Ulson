import React from 'react';
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div className="smallcard-container">
            <div>
                <div className="smallcard-email">
                    <img scr={ props.imagem1 }/>
                    <p><strong>Email: </strong>{ props.email}</p>
                </div>
                <div className="smallcard-adress">
                    <img scr={ props.imagem2 } />
                    <p><strong>Endereço: </strong>{ props.endereco}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPequeno;