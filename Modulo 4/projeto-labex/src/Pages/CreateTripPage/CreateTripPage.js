import React from 'react';
import {Tittle, FormContainer, InputItem, Button} from './styles'
import Headers from '../Header/Headers';



const CreateTripPage = () =>{
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
               <Button type="submit">Send</Button>
           </FormContainer>
        </div>
    )
}
export default CreateTripPage;