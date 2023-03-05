import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';

const AulaEquisRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </>
    );
};

export default AulaEquisRoutes;