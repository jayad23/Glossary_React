import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

const Protected = ({ authenticated }) => {
  if(authenticated){
    return <Outlet/>
  } else {
    return <Navigate to="/login" />
  }
}

export default Protected