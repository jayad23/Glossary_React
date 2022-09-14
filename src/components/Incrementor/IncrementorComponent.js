import React from 'react'

const IncrementorComponent = ({ logginToConsole, incrementor, setIncrementor }) => {
    React.useEffect(() => {
        logginToConsole();
    }, [logginToConsole])
    console.log("INCREMENTOR CHILD 1")
  return (
    <div>
        <h1>Valor: {incrementor}</h1>
        <button onClick={() => setIncrementor(prevState => prevState * 2)} style={{ border: "none", backgroundColor: "crimson", borderRadius: "7px", padding: "6px"}}>INCREMENT</button>
    </div>
  )
}

export default React.memo(IncrementorComponent)