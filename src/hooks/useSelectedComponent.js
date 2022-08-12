import { useState } from "react"
import MathProblem from "../components/Week2/Clase_2/MathProblem"
import MainComponent from "../components/Week2/Clase_3/MainComponent"
export const useSelectedComponent = () => {
    const [selectedComponent, setSelectedComponent] = useState(null)

    const componentShowHandler = (arg) => {
        if (arg === 1) {
          const ComponentOne = <h1>Component One</h1>
          setSelectedComponent(ComponentOne)
        } else if (arg === 2) {
          //const ComponentTwo = <h1>Component Two</h1>
          setSelectedComponent(<MathProblem/>)
        } else {
          setSelectedComponent(<MainComponent />)
        }
    }

    return {
        selectedComponent,
        componentShowHandler
    }
}