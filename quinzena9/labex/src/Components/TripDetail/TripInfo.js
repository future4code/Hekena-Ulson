import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import {MainDiv7, MainContainer6} from './styled'
import axios from 'axios';


const TripInfo = () => {
    const history = useHistory()
    const pathParams = useParams()
    const [tripDetail, setTripDetail] = useState({})
    const [candidates, setCandidates] = useState([])

    const tripdetailURL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/helena-tang/trip/${pathParams}`
    
    useEffect (() => {
        axios.get(tripdetailURL, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then((response)=>{
            setTripDetail(response.data.trip)
            setCandidates(response.data.trip.candidates)
        })
    })

    const allCandidates = candidates.map((candidate) =>  {
        return <div>
                <button>{candidate.name}</button>
              </div>
           })   

    return (
        <MainDiv7>
            <MainContainer6>
                {allCandidates}
            </MainContainer6>
        </MainDiv7>
    )
};
export default TripInfo;