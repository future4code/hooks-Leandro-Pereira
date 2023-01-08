import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Router = () => {

    return(
    <BrowserRouter>
        <Routes>
            <Router index element={<Home/>} />
            <Router path="cart" element={<Cart/>} />
            <Router path="stock" element={<Stock/>} />
            <Router path="orders" element={<Orders/>} />
        </Routes>
    </BrowserRouter>
    )
};