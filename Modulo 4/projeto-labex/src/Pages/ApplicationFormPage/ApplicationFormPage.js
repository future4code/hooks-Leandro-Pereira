import React from "react";
import Headers from "../Header/Headers";
import { useState, useEffect } from "react";
import axios from "axios";

const ApplicationFormPage = () => {
  const [trip, setTrip] = useState([]);
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [applicationText, setApplicationText] = useState('')
  const [profession, setProfession] = useState('')
  const [country, setCountry] = useState('')
  const [id, setId] = useState('')

  const onchangeName = (event) => {
    setName(event.target.value)
  }

  const onchangeAge = (event) => {
    setAge(event.target.value)
  }

  const onchangeApplicationText = (event) => {
    setApplicationText(event.target.value)
  }

  const onchangeProfession = (event) => {
    setProfession(event.target.value)
  }

  const onchangeCountry = (event) => {
    setCountry(event.target.value)
  }
  
  const onchangeId = (event) => {
    setId(event.target.value)
  }

  const applyToTrip = () => {
    const body = {
      name: name,
      age:age,
      applicationText:applicationText,
      profession:profession,
      country: country
    };

    
    

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-pereira-hooks/trips/${id}/apply`,
        body
      )
      .then((response) => {
        setTrip(response.data)
      })
      .catch((error) => {});
  };

  useEffect(() => {
    applyToTrip();
  }, []);

  return (
    <div>
      <Headers />
      <div>
        <select>
          <option 
          value={country} 
          onChange={onchangeCountry} 
          >selecionar país
          </option>
        </select>
        <select>
          <option>selecionar Viagem </option>
        </select>
        <input 
        value={name}
        onchange={onchangeName}
        />
         <input 
        value={age}
        onchange={onchangeAge}
        />
         <input 
        value={applicationText}
        onchange={onchangeApplicationText}
        />
         <input 
        value={profession}
        onchange={onchangeProfession}
        />
      </div>
    </div>
  );
};
export default ApplicationFormPage;
