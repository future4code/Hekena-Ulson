import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {MainDiv6, MainContainer6, Presentation6, ButtonStyled6} from './styled'
import axios from 'axios';
import useProtected from '../../Hooks/useProtected';


const TripDetail = () => {
  const history = useHistory()
  const [trips, setTrips] = useState([])
  useProtected()

  

  const gettripsURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/trips"
  useEffect (() => {
    axios.get(gettripsURL)
    .then((response) => {
        setTrips(response.data.trips)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gettripsURL]);

  const goToTripInfo = (i) => {
    history.push(`/tripInfo/${i}`)
  }


  const allTrips = trips.map((element) =>  {
    return <div key={element.id}>
            <ButtonStyled6 onClick={() => goToTripInfo(element.id)}>{element.name}</ButtonStyled6>
          </div>

  })

  

  return (
    <MainDiv6>
      <MainContainer6>
        <Presentation6>Lista de Viagens</Presentation6>
        {allTrips}
      </MainContainer6>
    </MainDiv6>
  );
}

export default TripDetail;