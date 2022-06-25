import React from 'react'
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator"
import { useProtectedPage } from "../../hooks/useRequestData"
import { useForm } from '../../hooks/useForms'
import axios from "axios";
import { BASE_URL } from "../../constants/Base_url"
import { Planets } from "../../constants/Planets"



const CreateTripPage = () => {

   useProtectedPage()
   const navigate = useNavigate()
   const { form, handleChange, cleanFields } = useForm({
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
   })

   const createTrip = (event) => {
      event.preventDefault();
      const HEADER = {
         headers: {
            auth: localStorage.getItem("token"),
         },
      };
      axios
         .post(`${BASE_URL}/trips`, form, HEADER)
         .then((response) => {
            alert("Trip created successfully");
            cleanFields()
         })
         .catch((error) => {
            alert("Something went wrong")
         })
   }

   const listPlanets = Planets.map((planet) => {
      return (
         <option key={planet} value={planet}>
            {planet}
         </option>
      );
   });

   return (

      <div>
         <div>
            <form onSubmit={createTrip}>

               <h2> Create a new trip</h2>
               <input
                  value={form.name}
                  name="name"
                  onChange={handleChange}
                  placeholder={"Name"}
                  required
                  pattern={"^.{5,}"}
                  title={"The name must be at least 5 letters long"}
               />
               <select
                  value={form.planet}
                  name="planet"
                  onChange={handleChange}
                  required
               >
                  <option value="">Select the planet</option>
                  {listPlanets}
               </select>
               <input
                  value={form.date}
                  name="date"
                  onChange={handleChange}
                  placeholder={"Date"}
                  required
                  type="date"
               />
               <input
                  value={form.description}
                  name="description"
                  onChange={handleChange}
                  placeholder={"Description"}
                  required
                  pattern={"^.{30,}"}
                  title={"Description must be at least 30 characters"}
               />
               <input
                  value={form.durationInDays}
                  name="durationInDays"
                  onChange={handleChange}
                  placeholder={"Trip duration in days"}
                  required
                  type="number"
                  min={50}
               />
               <button>
                  <button onClick={() => goBack(navigate)}>Come Back</button>
                  <button>Create</button>
               </button>
            </form>
         </div>
      </div>
   )
}

export default CreateTripPage