import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Headers from './../Header/Headers';
import axios from 'axios'
import {useProtectedPage} from '../../Hooks/ProtectedPage'

const TripsDetailsPage = () => {
    const navigate = useNavigate()
    useProtectedPage()

    useEffect(() => {
      const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro-pereira-hooks/trip/:id'
      const headers = {
        headers: { 
          auth: localStorage.getItem('token')
        }
      }
      axios.get(URL, headers)
      .then((response) => {
        
      })
      .catch((error) => {

      })
    }, [])

  return (
    <div>
      <Headers/>
       
    </div>
  )
  
};
export default TripsDetailsPage;
