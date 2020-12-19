import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios';
import NavBar from '../NavBar/index'
import {MainContainer2,Presentation2, StyledInputText , MainDiv2, MainForm, StyledInput2, ButtonStyled2} from './styled'
import styled from 'styled-components';
import {useInput} from '../../Hooks/useInput'


const ApplicationForm = () => {
  const history = useHistory();
  const pathParams = useParams();

  // cria o form e usa o hook useInput
  const {form, onChange} = useInput({
    name: '',
    age: '',
    motivation:'',
    profession: '',
    country: ''
  });
  
  const handleTextInputs = (event) => {
    const {value, name} = event.target;
    onChange(value, name);
  }


  const onSubmitForm = (event) => {
    event.preventDefault()
    // pega as informações do form e insere ao body da requisição
    const body = {
      name: form.name, 
      age: form.age,
      applicationText: form.motivation,
      profession: form.profession,
      country: form.country
    };
    console.log(body)
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/trips/${pathParams.id}/apply`, body)
      .then((response) => {
          history.push("/trips")
          console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });


  }

  console.log(form)
  return (
    <MainDiv2>
      <NavBar/>
      <MainContainer2>
        <Presentation2>Formulário de Inscrição</Presentation2>
        <MainForm onSubmit={onSubmitForm}>
          <StyledInput2 value={form.name} onChange={handleTextInputs} placeholder="Nome" name="name" type="text"/>
          <StyledInput2 value={form.age} onChange={handleTextInputs} placeholder="Idade" name="age" type="number"/>
          <StyledInput2 value={form.country} onChange={handleTextInputs} placeholder="País" name="country" type="text"/>
          <StyledInput2 value={form.profession} onChange={handleTextInputs} placeholder="Profissão" name="profession" type="text"/>
          <StyledInputText  value={form.motivation} onChange={handleTextInputs} placeholder="Por que você é um bom candidato?" name="motivation" type="text"/>
          <ButtonStyled2>Confirmar Candidatura</ButtonStyled2>
        </MainForm>
      </MainContainer2>
    </MainDiv2>
  );
}

export default ApplicationForm;