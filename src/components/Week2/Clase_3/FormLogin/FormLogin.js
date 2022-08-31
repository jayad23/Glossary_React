import React from 'react'
import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'
const FormLogin = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <CustomInput  
          labelText="E-mail"
          type="text"
          fieldValue="email"
          placeholder="example@example.com"
          {...props}
        />
        <CustomInput 
          labelText="Password"
          type="password"
          fieldValue="password"
          placeholder="************"
          {...props}
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