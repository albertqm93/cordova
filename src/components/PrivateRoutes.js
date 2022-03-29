import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Login from '../pages/Login'

const PrivateRoutes = ({ path, component }) => {

    const isLogged = useSelector(state => state.user ? state.user.logged : false);

    return (
    <div>{isLogged ? <Route path={path} component={component} /> : <Login /> }</div>
    )
} 

export default PrivateRoutes;