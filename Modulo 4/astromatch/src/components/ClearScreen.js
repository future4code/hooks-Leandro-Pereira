import React from 'react';


const ClearScreen = () =>{

    const clear = () =>{
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear`
        axios.put(url)
        .then((response) =>{

        })
        .catch((error) =>{

        })
    }

    return(
        <div>

        </div>
    )
}
export default ClearScreen