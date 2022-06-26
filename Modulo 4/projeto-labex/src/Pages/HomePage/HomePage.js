import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrip, goToLoginPage } from "../../routes/coordinator";
import { Title, SubTitle, MainContainer, ButtonContainer } from "./styles";
import Button from '@mui/material/Button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MainContainer>
        <Title>LabeX Viagens</Title>
        <SubTitle>Welcome the best space travel agency in the world! </SubTitle>
        <p>
          Want to know the space? come with LabeX and make your dream come true!
        </p>
        <ButtonContainer>
          <Button onClick={() => goToLoginPage(navigate)} variant="contained">Login</Button>
          <Button onClick={() => goToListTrip(navigate)} variant="contained">See trip list</Button>
        </ButtonContainer>
      </MainContainer>
    </div>
  );
};

export default HomePage;
