import { useState } from "react"

export const useSelectedComponent = () => {
    const [selectedComponent, setSelectedComponent] = useState(null)

    const componentShowHandler = (arg) => {
        if (arg === 1) {
          const ComponentOne = <h1>Component One</h1>
          setSelectedComponent(ComponentOne)
        } else if (arg === 2) {
          const ComponentTwo = <h1>Component Two</h1>
          setSelectedComponent(ComponentTwo)
        } else {
          const ComponentThree = <h1>Component Three</h1>
          setSelectedComponent(ComponentThree)
        }
    }

    return {
        selectedComponent,
        componentShowHandler
    }
}