import React, {useState} from 'react'
import MathProblem from './MathProblem'

const MathProblemContainer = () => {
  const [value, setValue] = useState(0)

  const addition = () => {
    setValue(value + 1)
  }

  const substraction = () => {
    setValue(value - 1)
  }

  const times = () => {
    setValue(value * 3)
  }
  const childProps = {
    value,
    addition,
    substraction,
    times
  }
  return <MathProblem {...childProps}/>
}

export default MathProblemContainer