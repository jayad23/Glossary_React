import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../Nav/NavBar'

const NavLayout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default NavLayout