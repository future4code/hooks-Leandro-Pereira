import React from "react";
import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/ApplicationFormPage")}>
        Qualquer coisa
      </button>
    </div>
  );
};
export default ListTripsPage;
