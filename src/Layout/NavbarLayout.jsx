import React, {Fragment} from 'react'
import NavBar from "../components/Nav/NavBar"
//children NODO
const NavbarLayout=({children}) => {
  return (
    <Fragment>
      <NavBar />
      {children}
    </Fragment>
  )
}

export default NavbarLayout