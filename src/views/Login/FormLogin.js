import React from 'react'
import styled from 'styled-components';
import {TextField, Grid, Button, Typography} from '@mui/material';
import {Stack} from '@mui/system';
import { useFormikHook } from "./useFormik";
import { Loader } from "../../components/Loader/Loader";


const FormLogin = ({ isLoading, setIsLoading, setAuthenticated}) => {
  const { setFieldValue, errors, handleSubmit} = useFormikHook({setAuthenticated, setIsLoading});
  return (
    <Container>
      <Typography color="white" variant="h5" sx={{mb: 2, p: 1, fontWeight: "bolder"}}>Por favor, regístrate para continuar: </Typography>
        {
          isLoading ? (
            <Loader />
          ): (
            <FormWrap FormWrap onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  fullWidth 
                  error={errors?.email && true}
                  helperText={errors?.email ? errors.email : "Ingrese su correo electrónico"}
                  label="Correo Electrónico"
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  
                />
                <TextField
                  fullWidth
                  type="password"
                  error={errors?.password && true}
                  helperText={errors?.password ? errors.password : "Ingrese su contraseña"}
                  label="Contraseña"
                  onChange={(e) => setFieldValue("password", e.target.value)}
                />
                <Grid container sm={12} item>
                  <Grid xs={6} textAlign="start" item>
                    <Button variant="outlined" sx={{ width: "90%"}}>Volver</Button>
                  </Grid>
                  <Grid sm={6} textAlign="end" item>
                    <Button type="submit" variant="contained" color="info" sx={{ width: "90%"}}>Enviar</Button>
                  </Grid>
                </Grid>
              </Stack>
            </FormWrap>
          )
        }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-image: url("https://ocean.si.edu/sites/default/files/styles/article_main_image/public/25691336465_982637ea03_o.jpg.webp?itok=i62mC4wO");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const FormWrap = styled.form`
  width: 20%;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
`;

export default FormLogin