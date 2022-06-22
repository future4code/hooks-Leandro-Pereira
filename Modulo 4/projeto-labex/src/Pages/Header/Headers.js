import React from 'react';
import {Container, Button} from './styles'
import {useNavigate} from 'react-router-dom'

const Headers = () =>{
    const navigate = useNavigate()
    return(
        <Container>
            <Button onClick={() => navigate("/")} >Home</Button>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
        </Container>
    )
}
export default Headers;