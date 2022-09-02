/* eslint-disable no-useless-escape */
import { useFormik } from "formik";
import * as Yup from "yup";

export const useFormikHook = () => {
    const getInitialValues = () => {
        return {
          email: "",
          password: ""
        }
      }
    
      const getValidationSchema = () => (
        Yup.lazy(() =>
        Yup.object().shape({
          email: 
            Yup.string()
            .email("Correo electrónico invalido")
            .required("Campo Obligatorio"),
          password: 
            Yup.string()
            .required('Campo Obligatorio')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\\*])(?=.{8,})/,
              "Debe contener 8 Caracteres, 1 Mayus, 1 minus, 1 num y un símbolo"
            ),
        })
        )
      )
      
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
    
      return {
        values, 
        setFieldValue, 
        errors, 
        handleSubmit
      }
}