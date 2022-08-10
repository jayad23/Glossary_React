import React, { Fragment } from 'react'
import dh_logo from "../../assets/images/logos/digital_house.png"

const Welcome = () => {
  return (
    <Fragment>
        <h1 style={{fontSize: "3rem", color: "crimson"}}>Curso de React Js.</h1>
        <section style={{ width: "100%", display: "flex", gap: "10px", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
            <p style={{fontSize: "30px"}}>Digital House</p>
            <img 
            style={{ width: "100px"}}
            src={dh_logo} 
            alt='digital_house'
            />
        </section>
        <p>Instructor: Kike Vanegas</p>
    </Fragment>
  )
}

export default Welcome