import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { useProtectedPage } from "../../hooks/useRequestData";

const TripDetailsPage = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const HEADERS = {
    headers: {
      auth: token,
    },
  };
  const { id } = useParams();
  const [detailsTrip, setDetailsTrip] = useState("");
  const [update, setUpdate] = React.useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trip/${id}`, HEADERS)
      .then((res) => {
        setDetailsTrip(res.data);
        setUpdate(update);
      })
      .catch((err) => {
        alert(err.response);
      });
  }, [update]);

  const DecideCandidate = (decision, candidateID) => {
    const BODY = {
      approve: decision,
    };
    axios
      .put(
        `${BASE_URL}/trips/${id}/candidates/${candidateID}/decide`,
        BODY,
        HEADERS
      )
      .then((res) => {
        alert("successfully registered");
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  return (
    <div>
      <ul>
        {detailsTrip && (
          <li>
            <h2>Trip details</h2>
            <p>Name: {detailsTrip.trip.name}</p>
            <p>Planet: {detailsTrip.trip.planet}</p>
            <p>Description: {detailsTrip.trip.description}</p>
            <p> Date: {detailsTrip.trip.date}</p>
            <p> Duration: {detailsTrip.trip.durationInDays}</p>
          </li>
        )}
        <div>
          <div>
            <h2>Pending Candidates</h2>
            {detailsTrip && detailsTrip.trip.candidates.length > 0 ? (
              detailsTrip.trip.candidates.map((candidate) => {
                return (
                  <li key={candidate.id}>
                    {candidate.name}
                    <div>
                      <button
                        onClick={() => DecideCandidate(true, candidate.id)}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => DecideCandidate(false, candidate.id)}
                      >
                        Disapprove
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>There are no outstanding candidates</p>
            )}
          </div>

          <div>
            <h2>Approved Candidates</h2>
            {detailsTrip && detailsTrip.trip.approved.length > 0 ? (
              detailsTrip.trip.approved.map((candidate) => {
                return <li key={candidate.id}>{candidate.name}</li>;
              })
            ) : (
              <p>There are no successful candidates</p>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default TripDetailsPage;
