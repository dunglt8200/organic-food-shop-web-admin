import React from "react";
import { Navigate } from "react-router-dom";
import { checkRefreshTokenExpiration } from "../auth/util";

const PrivateRoute = ({ children }) => {
    const isAuth = checkRefreshTokenExpiration();
    return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
