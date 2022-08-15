import React from 'react'
import styles from "./styles.module.css";

const CustomButton = ({ buttonText }) => {
  return (
    <div className={styles['btn-container']}>
        <button
          className={styles['gral-btn']}
          >
          { buttonText }
        </button>
    </div>
  )
}

export default CustomButton