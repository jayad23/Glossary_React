import React from 'react'
import CustomInput from '../CustomInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton'

const FormRegister = () => {
  return (
    <form>
        <CustomInput 
            labelText="Name"
            type="text"
        />
        <CustomInput 
            labelText="E-mail"
            type="text"
            placeholder="example@example.com"
        />
        <CustomInput 
            labelText="Password"
            type="password"
            placeholder="**********"
        />
        <CustomButton 
            buttonText="enviar"
        />
    </form>
  )
}

export default FormRegister