import React from 'react'
import styles from "./styles.module.css";
import logo from "../../../../assets/images/logos/form_logo.png";

const Card = ({ cardTitle, children }) => {
  return (
    <div className={styles['card-container']}>
        <div style={{ paddingTop: "10px"}}>
            <img 
                src={logo}
                alt="logo_form"
            />
        </div>
        <h1>{cardTitle}</h1>
        <div style={{padding: "0 70px 0 70px"}}>
            {children}
        </div>
    </div>
  )
}

export default Card