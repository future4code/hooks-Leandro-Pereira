import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTrip} from '../../routes/coordinator'


const HomePage = () => {

   const navigate = useNavigate()

   return (
      <div>
         <div>
            
            <h1>LabeX Viagens</h1>
            <h2>Welcome the best space travel agency in the world! </h2>
            <p>Want to know the space? come with LabeX and make your dream come true!</p>

            <button onClick={() => goToListTrip(navigate)}>Enter</button>
         </div>
      </div>
   )
}

export default HomePage