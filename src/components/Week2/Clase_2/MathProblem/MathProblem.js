import React from 'react'
import CustomButton from '../../../../common/CustomButton'
import SecondButton from '../SecondButton/SecondButton'

const MathProblem = ({ value, addition, substraction, times }) => {

  return (
    <div>
        <h1>La cuenta va en: {value}</h1>
        <CustomButton
            event={substraction}
            label="Restar"
        />
        <CustomButton
            event={addition}
            label="Sumar"
        />
        <CustomButton
            event={times}
            label="Multiplicar"
        />
        <SecondButton>
            <h1>Primer Ejemplo de SB</h1>
        </SecondButton>
    </div>
  )
}

export default MathProblem