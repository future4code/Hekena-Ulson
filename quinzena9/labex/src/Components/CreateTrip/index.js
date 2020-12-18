import React from 'react';
import {useHistory} from 'react-router-dom'
import useProtected from '../../Hooks/useProtected';
import {MainDiv5, MainContainer5, Presentation5, ButtonStyled5 } from './styled'
import {useInput} from '../../Hooks/useInput';
import axios from 'axios';

const CreateTrip = () => {
  useProtected();

  const {newTrip, onChange} = useInput({  
    name: "",
    planet: "",
    date: "",
    description:"",
    durationInDays: ""
  })

  const handleTextInputs = (event) => {
    const {value, name} = event.target;
    onChange(value, name);
  } 

  const onSubmitForm = (event) => {
    event.preventDefault()

    const body = {
        name: newTrip.name,
        planet: newTrip.planet,
        date: newTrip.date, 
        description: newTrip.description, 
        durationInDays: newTrip.durationInDays
      } 

    axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/trips", body)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error);
        }); 


  }
  
  return (
    <MainDiv5>
      <MainContainer5>
      <Presentation5>Criar Viagem</Presentation5>
      <form onSubmit={onSubmitForm}>
        <input value={newTrip.name} onChange={handleTextInputs}/>
        <input />
        <input />
        <input />
        <input />
        <ButtonStyled5>Criar Viagem</ButtonStyled5>
      </form>
      </MainContainer5>
    </MainDiv5>
  );
}

export default CreateTrip;