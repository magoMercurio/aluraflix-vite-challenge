// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { HeaderGeneric } from "../components/Header"
import { Box, TextField } from "@mui/material"
import styled from 'styled-components'


const TextFieldStyled = styled(TextField)`
  color: #f5f5f5f5;
  background-color: #53585D;
  `


const NuevaCategoria = () => {

  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [color, setColor] = useState('')
  const [codigoSeguridad, setcodigoSeguridad] = useState('')



  function validarCodigoSeguridad(codigoSeguridad) {
    if (codigoSeguridad.length > 4) {
      return true
    }
    return false
  }

  
  return (
    <>
      <HeaderGeneric />
      <Box
        component="form"
        /* onSubmit={enviarForm} */
        autoComplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
      <TextFieldStyled    
        label='Titulo'
        variant='filled'
        fullWidth
        margin='normal'
        required
        type='text'
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
          
      />
      <TextFieldStyled    
        label='Descripcion'
        variant='filled'
        fullWidth
        margin='normal'
        type='text'
        value={descripcion}
      />
      <TextFieldStyled
        label='Color'
        variant='filled'
        fullWidth
        margin='normal'
        type='color'
        required
      />
      <TextFieldStyled
        label='Codigo de seguridad'
        variant='filled'
        fullWidth
        margin='normal'
        required
        type='password'
        value={codigoSeguridad}
        onChange={(e) => setcodigoSeguridad(e.target.value)}
        error={!validarCodigoSeguridad(codigoSeguridad)}
        helperText={!validarCodigoSeguridad(codigoSeguridad) ? 'INGRESA PASSWORD de 4 digitos' : ''}
          />



    </Box>
      
    </>
  )
}

export default NuevaCategoria