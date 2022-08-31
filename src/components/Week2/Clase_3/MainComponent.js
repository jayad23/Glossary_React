import React from 'react'
import styles from "./styles.module.css";
import Card from './Card/Card';
import FormLogin from './FormLogin/FormLogin';

const MainComponent = (props) => {
  return (
    <div className={styles['mainContainer']}>
        <Card cardTitle={"Login"}>
            <FormLogin {...props}/>
        </Card>
    </div>
  )
}

export default MainComponent