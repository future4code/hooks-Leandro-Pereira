import * as React from "react"
import { useNavigate } from "react-router-dom"
import { goToApplicationForm } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/Base_url"
import { useRequestData } from "../../hooks/useRequestData"

const ListTripsPage = () => {

   const navigate = useNavigate()
   const listTrip = useRequestData(`${BASE_URL}/trips`, {})


   const trips =
      listTrip.trips &&
      listTrip.trips.map((trip) => {
         return (

            <div key={trip.id}>
               <div className="DivCard" color='primary' sx={{ minWidth: 275 }}>

                  <p>{trip.planet}</p>
                  <div>
                     <p className="top-top">Name: {trip.name}</p>
                     <p className="top">Description: {trip.description}</p>
                     <p className="top1"> Duration: {trip.durationInDays} dias</p>
                     <p className="top2"> Date: {trip.date}</p>
                     <button className="button" onClick={() => goToApplicationForm(navigate, trip.id)}>
                        Inscrever-se
                     </button>
                  </div>
               </div>
            </div>
         );
      })

   return (
      <div>

         <li>{trips}</li>

      </div>
   )
}

export default ListTripsPage