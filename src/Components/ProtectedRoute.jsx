import React from 'react'
import { Navigate } from 'react-router-dom';
//import { ContextProvider } from './Context';
export const ProtectedRoute = ({children}) => {
    //const {userStatus} = useContext(ContextProvider);

 const authToken = localStorage.getItem("authorisedLogin")
 const getToken = localStorage.getItem("getToken");
 const UserStatus = localStorage.getItem("UserStatus");
 if((!authToken && !getToken || !UserStatus) ){
    return <Navigate to ="/login" replace/>
 }
 return children;
}
