import React from "react";
import {useNavigate} from 'react-router-dom'
import { ButtonContainer, Container, Title } from "./styles";
import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Title>LabeX 2022</Title>
      <ButtonContainer>
      <Button onClick={()=>{navigate('/trips/list')}} variant="contained">To see trips</Button>
      <Button onClick={()=>{navigate('Login')}} variant="contained">Admin area</Button>
        {/* <Link to="/ListTripsPage">To see trips</Link>
        <Link to="/LoginPage">Admin Area</Link> */}
      </ButtonContainer>
    </Container>
  );
};
export default HomePage;
