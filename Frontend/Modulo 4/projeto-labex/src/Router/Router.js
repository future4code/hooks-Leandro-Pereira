import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage'
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import TripsDetailsPage from '../Pages/TripsDetailsPage/TripsDetailsPage'

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path='/AdminHomePage' element={<AdminHomePage/>} />
                <Route path='/ApplicationFormPage' element={<ApplicationFormPage/>} />
                <Route path='/CreateTripPage' element={<CreateTripPage/>} />
                <Route path='/ListTripsPage' element={<ListTripsPage/>} />
                <Route path='/LoginPage' element={<LoginPage/>} />
                <Route path='/TripsDetailsPage' element={<TripsDetailsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;