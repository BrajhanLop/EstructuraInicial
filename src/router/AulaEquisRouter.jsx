import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AulaEquisRoutes from '../aulaequis/routes/AulaEquisRoutes';
import AuthRoutes from '../auth/routes/authRoutes';

const AulaEquisRouter = () => {
    return (
        <>
            
        <Routes>
            <Route path='/*' element= {<AulaEquisRoutes/>} />
            <Route path='/auth/*' element={<AuthRoutes/> } />           
        </Routes>
            
        </>
    );
};

export default AulaEquisRouter;