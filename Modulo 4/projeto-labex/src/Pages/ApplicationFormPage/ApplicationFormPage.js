import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/Base_url";
import { Countries } from "../../constants/Countries";
import { useForm } from "../../hooks/useForms";
import axios from "axios";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const getTrips = useRequestData(`${BASE_URL}/trips`, {});
  const { form, handleChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const tripSelected =
    getTrips.trips &&
    getTrips.trips
      .filter((trip) => {
        return trip.id === params.id;
      })
      .map((trip) => {
        return trip.name;
      });

  const enviar = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/trips/${params.id}/apply`, form)
      .then((response) => {
        alert("request made successfully");
        cleanFields();
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const country = Countries.map((country) => {
    return (
      <option key={country.ordem} value={country.nome}>
        {country.nome}
      </option>
    );
  });

  return (
    <div>
      <divisao>
        <h1> Come Signup:</h1>
        <div>
          <form onSubmit={enviar}>
            <h2>Selected Trip </h2>
            <h2>
              <span>{tripSelected}</span>
            </h2>
            <input
              value={form.name}
              name="name"
              onChange={handleChange}
              placeholder={"Name"}
              required
              pattern={"^.{3,}"}
              title={"The name must be at least 3 letters long"}
            />
            <input
              value={form.age}
              name="age"
              onChange={handleChange}
              placeholder={"Age"}
              required
              type="number"
              min={18}
            />
            <input
              value={form.profession}
              name="profession"
              onChange={handleChange}
              placeholder={"Profession"}
              required
              pattern={"^.{10,}"}
              title={"Profession must be at least 10 characters long"}
            />
            <select
              value={form.country}
              name="country"
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              {country}
            </select>
            <input
              value={form.applicationText}
              name="applicationText"
              onChange={handleChange}
              placeholder={"Application Text"}
              required
              pattern={"^.{30,}"}
              title={"The application must be at least 30 characters long"}
            />
            <button>
              <button>Send</button>
              <button onClick={() => goBack(navigate)}>Come Back</button>
            </button>
          </form>
        </div>
      </divisao>
    </div>
  );
};

export default ApplicationFormPage;
