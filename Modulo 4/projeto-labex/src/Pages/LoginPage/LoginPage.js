import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { goBack, goHome } from "../../routes/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert("Login or password not authorized");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/trips/list");
    }
  });

  return (
    <div>
      <div>
        <h1> Login </h1>
        <h2>Admin Area</h2>
        <form >
          <input
            placeholder="Login"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
          <button onClick={onSubmitLogin}>Enter</button>
        </form>
        <div>
        <button onClick={() => goHome(navigate)}>Home</button>
          <button onClick={() => goBack(navigate)}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
