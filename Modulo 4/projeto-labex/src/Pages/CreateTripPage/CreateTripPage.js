import React from 'react';
import {Tittle, FormContainer, InputItem, Button} from './styles'
import Headers from '../Header/Headers';
import axios from 'axios'


const CreateTripPage = () =>{

    const createTrip = () =>{
        const headers = {
            auth: localStorage.getItem('Token')
        }

        const body = {
            name : '',
            planet: '',
            date: '',
            description: '',
            duration: 0
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-pereira-hooks/trips`,body,headers)
        .then((response) => {
            alert('Your trip was created successfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return(
        <div>
            <Headers/>
            <Tittle>Create a new trip</Tittle>
           <FormContainer>
               <InputItem placeholder="Name" type="text"/>
               <InputItem placeholder="Planet" type="text"/>
               <InputItem placeholder="Date" type="date"/>
               <InputItem placeholder="Description" type="text"/>
               <InputItem placeholder="Duration in days" type="number"/>
               <Button onClick={()=>createTrip()} type="submit">Send</Button>
           </FormContainer>
           
        </div>
    )
}
export default CreateTripPage;