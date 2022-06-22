import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  ContainerImg,
  InputsContainer,
  Input,
  ButtonsContainer,
} from "./styles";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onchangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onchangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-pereira-hooks/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/trips/list");
      })
      .catch((error) => {
        alert("email or invalid password");
      });
  };

  return (
    <Container>
      <ContainerImg>
        <h1>Admin Home Page</h1>
      </ContainerImg>
      <InputsContainer>
        <Input
        type='email' 
        placeholder="Users"  
        value={email} 
        onChange={onchangeEmail} 
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={onchangePassword}
        />
      </InputsContainer>
      <ButtonsContainer>
        <button onClick={() => onSubmitLogin()}>Login</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </ButtonsContainer>
    </Container>
  );
};
export default LoginPage;
