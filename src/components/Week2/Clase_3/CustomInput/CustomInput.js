import React from 'react'
import styles from "./styles.module.css";

const CustomInput = ({ labelText, type, placeholder }) => {
  return (
    <div className={styles['input-container']}>
      <label className={styles['label-text']}>{labelText}</label>
      <input 
        className={styles['input-tag']}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomInput