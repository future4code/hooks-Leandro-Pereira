import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage, logout, goHome,goToCreatTrip } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestData, useProtectedPage } from "../../hooks/useRequestData";
import axios from "axios";

const AdminHomePage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});

  const DeleteTrip = (id) => {
    const HEADER = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    if (window.confirm("Are you sure you want to delete this trip?")) {
      axios
        .delete(`${BASE_URL}/trips/${id}`, HEADER)
        .then((res) => {
          navigate("/login");
          alert("Trip deleted successfully!");
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }
  };

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        <div key={trip.id}>
          <div>
            <p onClick={() => goToDetailsPage(navigate, trip.id)}>
              {trip.name}
            </p>
          </div>
          <div>
            <button onClick={() => DeleteTrip(trip.id)}>Delete Trip</button>
          </div>
        </div>
      );
    });

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h2> Trip List</h2>
        {trips}
      </div>
      <button onClick={()=>goToCreatTrip(navigate)} >Create your Trip</button>
      <button onClick={() => goHome(navigate)}>Home</button>
      <button onClick={() => logout(navigate)}>Logout</button>
    </div>
  );
};

export default AdminHomePage;
