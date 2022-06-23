import React, { useState, useEffect } from "react";
import Headers from "../Header/Headers";
import axios from "axios";
import {countries} from '../../Constants/Constants'

const ApplicationFormPage = () => {
  const [showTrips, setTrips] = useState([]);
  const [trip, setTrip] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [countryState, setCountryState] = useState("");
  const [id, setId] = useState("");

  const getTrips = () => {
    axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-pereira-hooks/trips")

        .then((response) => {
          setTrips(response.data.trips)
        }
    )
        .catch((error) => {
            console.log(error)
        }
    )
}

useEffect(() => {getTrips()}, [])

  const onchangeName = (event) => {
    setName(event.target.value);
  };

  const onchangeAge = (event) => {
    setAge(event.target.value);
  };

  const onchangeApplicationText = (event) => {
    setApplicationText(event.target.value);
  };

  const onchangeProfession = (event) => {
    setProfession(event.target.value);
  };

  const onchangeCountry = (event) => {
    setCountryState(event.target.value);
  };

  const onchangeId = (event) => {
    setId(event.target.value);
  };

  const applyToTrip = () => {
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: countryState,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-pereira-hooks/trips/${id}/apply`,
        body
      )
      .then((response) => {
        alert('Very well')
        setTrip('');
        setName("");
        setAge("");
        setApplicationText("");
        setProfession("");
        setCountryState("");
      })
      .catch((error) => {
        alert('So bad')
        setTrip("");
        setName("");
        setAge("");
        setApplicationText("");
        setProfession("");
        setCountryState("");
      });
  };

  // useEffect(() => {
  //   applyToTrip();
  // }, []);

  const renderTrips = showTrips.map((trip) => {
    <option key={trip.id} value={trip.id}>
      {trip.name}
    </option>;
  });

  const renderCountries = countries.map((country,index)=>{
    return <option key={index}>{country}</option>
  })

  return (
    <div>
      <Headers />
      <div>
        <h1>Sign up for an amazing trip</h1>
      </div>
      <div>
        <div>
          <select value={trip} onChange={onchangeId}>
            <option>Select a trip</option>
            {renderTrips}
          </select>
          <input placeholder="Name" value={name} onChange={onchangeName} />
          <input placeholder="Age" value={age} onChange={onchangeAge} />
          <input placeholder="Profession" value={profession} onChange={onchangeProfession}/>
          <select>
            <option value={countryState} onChange={onchangeCountry}>Select a country</option>
            {renderCountries}
          </select>
          <textarea placeholder='Application text' value={applicationText} onChange={onchangeApplicationText} />
          <div>
            <button onClick={() =>applyToTrip()}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicationFormPage;
