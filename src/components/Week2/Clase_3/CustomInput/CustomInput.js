import React from 'react'
import styles from "./styles.module.css";

const CustomInput = ({ labelText, type, placeholder, values, errors, setFieldValue, fieldValue }) => {

  return (
    <div className={styles['input-container']}>
      <label className={styles['label-text']}>{labelText}</label>
      <input 
        className={styles['input-tag']}
        type={type}
        placeholder={placeholder}
        value={values[fieldValue] || ""}
        onChange={(e) => setFieldValue(fieldValue, e.target.value)}
      />
      <label className={styles['label-text']} style={{ color: "red"}}>{errors[fieldValue]}</label>
    </div>
  )
}

export default CustomInput