import React from 'react';
import {useNavigate} from 'react-router-dom'


const AdminHomePage = () =>{
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate('/CreateTripPage')}>CreateTripPage </button>
        </div>
    )
}
export default AdminHomePage;