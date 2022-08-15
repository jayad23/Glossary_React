import { useState } from "react"
import SecondClass from "../components/Week2/Clase_2/MathProblem"
import ThirdClass from "../components/Week2/Clase_3/MainComponent"
import Mesa from "../components/Week2/Mesa/Main/Main"

export const useSelectedComponent = () => {
    const [selectedComponent, setSelectedComponent] = useState(null)

    const componentShowHandler = (arg) => {
        if (arg === 1) {
          const ComponentOne = <h1>Component One</h1>
          setSelectedComponent(ComponentOne)
        } else if (arg === 2) {
          setSelectedComponent(<SecondClass/>)
        } else if (arg === 3){
          setSelectedComponent(<ThirdClass />)
        } else {
          setSelectedComponent(<Mesa/>)
        }
    }

    return {
        selectedComponent,
        componentShowHandler
    }
}