import React from 'react'
import game from "../../../assets/files/React_Battlership.pptx";

const App = () => {
  return (
    <div>
      <h1>Class 1</h1>
      <button style={{ padding: "10px", border: "none", backgroundColor: "crimson"}}><a style={{ textDecoration: "none", color: "white"}} href={game} download="juego"> Descargar Juego de Repaso</a></button>
    </div>
  )
}

export default App