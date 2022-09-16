import React, {Fragment} from 'react'
import NavBar from "../components/Nav/NavBar"
import {Outlet} from 'react-router-dom'
//children NODO
const NavbarLayout=() => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  )
}

export default NavbarLayout