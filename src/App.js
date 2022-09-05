import { useState} from "react";

function App() {
  return <Documentation/>
}

export default App;


const Documentation = () => {
  return (
    <>
      <h1>Semana 5; React Router Dom!</h1>
      <p>How to Install React Router
      To install React Router, all you have to do is run npm install react-router-dom@6 in your project terminal and then wait for the installation to complete.
      If you are using yarn then use this command: yarn add react-router-dom@6.</p>
      <a href="https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=How%20to%20Install%20React%20Router,%2Drouter%2Ddom%406%20." target="e_blank" rel="nonreferrer">Visita aquí para leer más instrucciones</a>
    </>
  )
}