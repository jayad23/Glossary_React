/* eslint-disable no-useless-escape */
import React, {useState, useEffect }from 'react'
import MainComponent from '../../Week2/Clase_3/MainComponent'
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
const url = "https://rickandmortyapi.com/api/character"
const App = () => {
  const [results, setResults] = useState(null);
  // const [inputValues, setInputValues] = useState({ email: "", password: ""})
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputValues)
  // }

  useEffect(() => {
    const request = async () => {
      const response = await fetch(url)
      const result = await response.json()
    }
    request()
  }, [])

  useEffect(() => {
    axios.get(url)
    .then((res)=> setResults(res.data.results))
    .catch((err)=> console.log(err))
  }, [])

  const getInitialValues = () => {
    return {
      email: "",
      password: ""
    }
  }

  const getValidationSchema = () => {
    return Yup.lazy(() =>
    Yup.object().shape({
      email: Yup.string()
        .email("Correo electrónico invalido")
        .required("Campo Obligatorio"),
        password: Yup
        .string()
        .required('Campo Obligatorio')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    })
    )
  }
  
  const onSubmit = (data) => {
    console.log(data);
  }

  const {values, setFieldValue, errors, handleSubmit} = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  });

  const childProps = {
    values, 
    setFieldValue, 
    errors, 
    handleSubmit
  }
  return (
    <div >
      <h1>Class 2</h1>
      <ul style={{ textAlign: "start"}}>
        <li>Formik: Para manejar formularios <a href="https://yarnpkg.com/package/formik">yarn add formik</a> / <a href="https://www.npmjs.com/package/formik">npm install formik</a></li>
        <li>Axios: para manejar requests. <a href="https://yarnpkg.com/package/axios">yarn add axios</a> / <a href="https://www.npmjs.com/package/axios">npm install axios</a></li>
        <li>yarn add yup / npm i yup <a href="https://www.codegrepper.com/code-examples/javascript/yup+matches">YUP: Cheat sheet</a></li>
      </ul>
      <MainComponent {...childProps}/>
    </div>
  )
}

export default App