import { useState } from "react"
import FirstClass from "../components/Week5/Class1/App"
import SecondClass from "../components/Week5/Class2/App"
import ThirdClass from "../components/Week5/Class3/App"
import Mesa from "../components/Week5/Mesa/App"

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