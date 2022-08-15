import React from 'react'
//import "./styles.css";
import ClassOneStyles from "./styles.module.css";
import SassComponent from './SassComponent/SassComponent';

const App = () => {
  return (
    <>
      <div className={ClassOneStyles['App']}>
        <h1>Clase 1</h1>
      </div>
      <SassComponent />
    </>
  )
}

export default App