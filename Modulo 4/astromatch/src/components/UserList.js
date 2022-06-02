import React from 'react';


const UserList = () =>{

    const getMatches = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches"
        axios.get(url)
        .then((response)=>{

        })
        .catch((error)=>{

        })
    }

    return(
        <div>

        </div>
    )
}
export default UserList