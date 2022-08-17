import React from 'react'
//import clsx from 'clsx'
import styles from "./Appstyles.module.scss";
import CounterClass from './ClassComponent/CounterClass'
import CountFunction from './FunctionalComponent/CountFunction';

const App = () => {
  return (
    <div>
      <h1>Clase 2</h1>
      <CounterClass styles={styles}/>
      <CountFunction styles={styles}/>
    </div>
  )
}

export default App