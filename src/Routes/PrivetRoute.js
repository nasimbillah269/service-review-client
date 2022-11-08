import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading, } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        <button className="btn btn-square loading"></button>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;