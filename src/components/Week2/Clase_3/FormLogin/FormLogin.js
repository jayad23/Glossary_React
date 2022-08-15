import React from 'react'
import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'
const FormLogin = () => {
  return (
    <form>
        <CustomInput 
          labelText="E-mail"
          type="text"
          placeholder="example@example.com"
        />
        <CustomInput 
          labelText="Password"
          type="password"
          placeholder="************"
        />
        <CustomButton 
          buttonText="ingresar"
        />
        <div>
          <p>¿Aun no tienes cuenta?</p>
          <a href="/">Regístrate aquí</a>
        </div>
    </form>
  )
}

export default FormLogin