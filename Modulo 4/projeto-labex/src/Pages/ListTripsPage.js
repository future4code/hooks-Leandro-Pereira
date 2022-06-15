import React, {useEffect, useState} from 'react';
import axios from 'axios'

const ListTripsPage = () =>{
    const [tripList, setTripList] = useState([])

    useEffect(() =>{
        showTripList()
    },
    [])

    const showTripList = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:leandro-pereira-hooks/trips')
        .then((response)=>{
            setTripList(response.data.trips)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div>
            {showTripList}
        </div>
    )
}
export default ListTripsPage;