import React, {useState} from 'react';
import axios from 'axios';



const Profile = () => {

    const getProfileToChoose = () => {
       const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person"
        axios.get(url)
        .then((response)=> {

        })
        .catch((error) => {

        })
    }

    const choosePerson = () => {
       const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person"
        axios.post(url)
        .then((response)=> {

        })
        .catch((error) => {

        })
    }

    return (
        <div>,
            <h>Ola Leandro Parece que você esta com sono</h>
            <hr/>   
            <button>Match</button>
            <button>Discard</button>
        </div>
    )
}
export default Profile;