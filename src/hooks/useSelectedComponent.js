import { useState } from "react"
import FirstClass from "../components/Week4/Class1/Class1"
import SecondClass from "../components/Week3/Clase_2/App"
import ThirdClass from "../components/Week3/Clase_3/App"
import Mesa from "../components/Week3/Mesa/App"

export const useSelectedComponent = () => {
    const [selectedComponent, setSelectedComponent] = useState(null)

    const componentShowHandler = (arg) => {
      if (arg === 1) {
        setSelectedComponent(<FirstClass />)
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