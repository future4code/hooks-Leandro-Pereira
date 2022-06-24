import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/AdminHomePage")}>Admin Home Page</button>
      <button onClick={() => navigate("/TripsDetailsPage")}>Trip Details</button>
    </div>
  );
};
export default LoginPage;
