import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import useProtected from '../../Hooks/useProtected';
import {MainDiv5, MainContainer5, Presentation5, StyledInput5, MainForm5, ButtonStyled5 } from './styled'
import {useInput} from '../../Hooks/useInput';
import axios from 'axios';

const CreateTrip = () => {
  const history = useHistory()
  useProtected();

  const {form, onChangeInput} = useInput({  
    name: '',
    planet: '',
    date: '',
    description:'',
    durationInDays: ''
  });

  const onSubmitForm = (event) => {
    event.preventDefault()

    console.log(form)

    const body = {
        name: form.name,
        planet: form.planet,
        date: form.date,
        description: form.description, 
        durationInDays: form.durationInDays
      } 

    axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/trips", body, {
          headers: {
            auth: window.localStorage.getItem('token')
          }
        })
        .then((response) => {
          history.push("/login/management")
          
        })
        .catch((error) => {
          console.log(error);
        });  
  }
  
  return (
    <MainDiv5>
      <MainContainer5>
      <Presentation5>Criar Viagem</Presentation5>
      <MainForm5 onSubmit={onSubmitForm}>
        <StyledInput5 onChange={onChangeInput} placeholder="Nome da Viagem" name="name" value={form.name}/>
        <StyledInput5 onChange={onChangeInput} placeholder="Planeta" name="planet" value={form.planet}/>
        <StyledInput5 onChange={onChangeInput} placeholder="Data" name="date" value={form.date}/>
        <StyledInput5 onChange={onChangeInput} placeholder="Descrição da Viagem" name="description" value={form.description}/>
        <StyledInput5 onChange={onChangeInput} placeholder="Duração em Dias" name="durationInDays" value={form.durationInDays}/>
        <ButtonStyled5>Criar Viagem</ButtonStyled5>
      </MainForm5>
      </MainContainer5>
    </MainDiv5>
  );
}

export default CreateTrip;