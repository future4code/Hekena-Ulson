import React, {useState, useEffect} from 'react';
import axios from 'axios';

const gettripsURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/trips"

export const useGetTrips = () => {
    const [trips, setTrips] = useState([])

  useEffect (() => {
    axios.get(gettripsURL)
    .then((response) => {
          setTrips(response.data.trips)
        })
        .catch((error) => {
          console.log(error);
        });
  }, [gettripsURL]);

  return trips;
}

