import React from 'react'
import {TextField, Grid, Button} from '@mui/material';
import {Stack} from '@mui/system';
import { useFormikHook } from "./useFormik";


const App = () => {
  const {values, setFieldValue, errors, handleSubmit} = useFormikHook();
  return (
    <div style={formContainerStyles}>
      <h1>Class 3: Repaso Gral</h1>
      <form style={formStyles} onSubmit={handleSubmit}>
        <Stack spacing={1}>
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
          <Grid container sm={12}>
            <Grid xs={6} textAlign="start">
              <Button variant="outlined" sx={{ width: "90%"}}>Volver</Button>
            </Grid>
            <Grid sm={6} textAlign="end">
              <Button type="submit" variant="contained" color="info" sx={{ width: "90%"}}>Enviar</Button>
            </Grid>
          </Grid>
        </Stack>
      </form>
    </div>
  )
}

const formContainerStyles = {justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center"}
const formStyles = { width: "20%", padding: "20px", border: "1px solid gray", borderRadius: "5px"};

export default App