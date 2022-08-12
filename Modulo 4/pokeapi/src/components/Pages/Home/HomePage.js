import React from 'react';
import { useNavigate} from 'react-router-dom'
import {goPokedex} from '../../../Router/Coordinator'


const HomePage = () =>{
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>goPokedex(navigate)}>Teste</button>
        </div>
    )
}
export default HomePage