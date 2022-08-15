import React from 'react'
import styles from "./styles.module.scss";

const SassComponent = () => {
  return (
    <div className={styles['Container']}>
        SassComponent
        <div className='second-container'>
            <h1>Hola a todos</h1>

        </div>
    </div>
  )
}

export default SassComponent