import React from "react";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to="LoginPage">Login</Link>
      <button onClick={() => navigate("/ListtripsPage")}>Ver Lista</button>
    </div>
  );
};
export default HomePage;
