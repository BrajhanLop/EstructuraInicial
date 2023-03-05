import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../../aulaequis/components/NavBar/NavBar';
import Sidebar from '../components/Sidebar';
import Alumnos from '../pages/alumnos/Alumnos';
import Dashboard from '../pages/dashboard/Dashboard';

const AuthRoutes = () => {
    return (
        <>
        <div className='flex'>
            <Sidebar/>
        <div className=" w-full">
            <NavBar />

            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/alumnos' element={<Alumnos/>}/>
            </Routes>

        </div>

        </div>
        </>
    );
};

export default AuthRoutes;