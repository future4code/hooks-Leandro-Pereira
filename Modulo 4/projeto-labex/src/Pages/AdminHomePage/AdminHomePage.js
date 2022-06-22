import React from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Header/Headers";
import Button from "@mui/material/Button";
import { ButtonContainer } from "./styles";
import {useProtectedPage} from '../../Hooks/ProtectedPage'

const AdminHomePage = () => {
  useProtectedPage()
  const navigate = useNavigate();
  return (
    <div>
      <Headers />
      <ButtonContainer>
        <Button variant="contained" onClick={() => navigate("/admin/trips/create")}>
          {" "}
          Create your trip here{" "}
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/admin/trips/:id")}
        >
          Details of your trip
        </Button>
      </ButtonContainer>
    </div>
  );
};
export default AdminHomePage;
