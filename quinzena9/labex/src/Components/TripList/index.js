import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import NavBar from '../NavBar';
import axios from 'axios';
import {MainDiv3, MainContainer3, Presentation3, TripCard, CardTitle, ButtonStyled2, CardDetail} from './styled'

const gettripsURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/trips"

const TripList = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([])
  
  

  useEffect (() => {
    axios
        .get(gettripsURL)
        .then((response) => {
          setTrips(response.data.trips)
        })
        .catch((error) => {
          console.log(error);
        });
  }, [gettripsURL]);
  
  
  const goToApplicationForm = (i) => {
    history.push(`/application-form/${i}`)
  }

  const allTrips = trips.map((trip) =>  {
    return <TripCard key={trip.id}>
            <CardTitle>{trip.name}</CardTitle>
            <CardDetail>data: {trip.date}</CardDetail>
            <CardDetail>planeta: {trip.planet}</CardDetail>
            <CardDetail>dias de viagem: {trip.durationInDays}</CardDetail>
            <CardDetail>{trip.description}</CardDetail>
            <ButtonStyled2 onClick={() => goToApplicationForm(trip.id)}>Me leva!</ButtonStyled2>
          </TripCard>

  })
  console.log(trips)

  
  return (
    <MainDiv3>
      <NavBar/>
      <MainContainer3>
        <Presentation3>Lista de Viagens</Presentation3>
        {allTrips}
      </MainContainer3>
    </MainDiv3>
  );
}

export default TripList;