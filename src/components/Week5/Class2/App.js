import React from 'react'
import MainComponent from '../../Week2/Clase_3/MainComponent'

const App = () => {
  return (
    <div >
      <h1>Class 2</h1>
      <ul style={{ textAlign: "start"}}>
        <li>Formik: Para manejar formularios <a href="https://yarnpkg.com/package/formik">yarn add formik</a> / <a href="https://www.npmjs.com/package/formik">npm install formik</a></li>
        <li>Axios: para manejar requests. <a href="https://yarnpkg.com/package/axios">yarn add axios</a> / <a href="https://www.npmjs.com/package/axios">npm install axios</a></li>
      </ul>
      <MainComponent />
    </div>
  )
}

export default App