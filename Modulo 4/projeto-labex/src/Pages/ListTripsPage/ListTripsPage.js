import * as React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationForm, goHome } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestData } from "../../hooks/useRequestData";

const ListTripsPage = () => {
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        <div key={trip.id}>
          <div>
            <p>{trip.planet}</p>
            <div>
              <p>Name: {trip.name}</p>
              <p>Description: {trip.description}</p>
              <p> Duration: {trip.durationInDays} dias</p>
              <p> Date: {trip.date}</p>
              <button onClick={() => goToApplicationForm(navigate, trip.id)}>
                Signup
              </button>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <li>{trips}</li>
      <button onClick={() => goHome(navigate)}>Home</button>
    </div>
  );
};

export default ListTripsPage;
