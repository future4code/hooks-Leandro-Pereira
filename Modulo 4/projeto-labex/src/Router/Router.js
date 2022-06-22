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
                <Route path='/admin/trips/list' element={<AdminHomePage/>} />
                <Route path='/trips/aplication' element={<ApplicationFormPage/>} />
                <Route path='/admin/trips/create' element={<CreateTripPage/>} />
                <Route path='/trips/list' element={<ListTripsPage/>} />
                <Route path='/Login' element={<LoginPage/>} />
                <Route path='/admin/trips/:id' element={<TripsDetailsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;