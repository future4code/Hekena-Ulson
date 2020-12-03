import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {baseURL} from '../../Requests'



export const MatchList = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(()=> {
    getMatches()
  })

  const getMatches = () => {
    axios.get(`${baseURL}matches`).then((response)=> {
      setMatches(response.data.response.matches) 
    }).catch(error => {
      console.log(error)
    })
  }
  
  const renderMatches = matches.map((person)=>{
    return <div key={person.id}>
              <img src={person.photo}/>
              <p>{person.name}</p>
          </div>
  })
  
  return (
    <div>
        {renderMatches}
    </div>
);
}

