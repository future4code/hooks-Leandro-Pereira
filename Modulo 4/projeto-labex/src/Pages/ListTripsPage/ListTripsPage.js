import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Header/Headers";
import axios from "axios";
import {Title, Button} from './styles'

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [showTrips, setTrips] = useState([]);

  const getTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-pereira-hooks/trips')
    .then((response)=>{
      setTrips(response.data.trips)

    })
    .catch((error) => {
      alert('Something went wrong')
    })
  }
  
  useEffect(() => {
    getTrips()
  }, [])


  const trips = showTrips.map((trip) =>{
    return(
      <div key={trip.id}>
        <p>{trip.name}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
      </div>
    )
  })

  return (
    <div>
      <Headers/>
      <Title>List Trips Page</Title>
      <Button onClick={() => navigate("/admin/trips/:id")}>
        Trips Details Page
      </Button>
      {trips}
    </div>
  );
};
export default ListTripsPage;
