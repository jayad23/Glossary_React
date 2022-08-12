import React from 'react'
import styles from "./styles.module.css";
import Card from './Card/Card';
import FormLogin from './FormLogin/FormLogin';
import FormRegister from './FormRegister/FormRegister';

const MainComponent = () => {
  return (
    <div className={styles['mainContainer']}>
        <Card cardTitle={"Login"}>
            <FormLogin />
        </Card>
        {/** COMPONENTE REGISTER */}
        <Card cardTitle={"Register"}>
          <FormRegister />
        </Card>
    </div>
  )
}

export default MainComponent