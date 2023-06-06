// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { HeaderHome } from "../components/Header"
import { Box, TextField, Button } from "@mui/material"
import styled from 'styled-components'
import TablaCategoria from '../components/TablaCategorias'


const TextFieldStyled = styled(TextField)`
  color: #f5f5f5f5;
  background-color: #53585D;

`

const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 50px;
margin-bottom: 30px;

`

const NuevaCategoria = (props) => {

  const { categorias, registrarCategoria } = props

  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [color, setColor] = useState( '#ffffff')
  const [codigoSeguridad, setcodigoSeguridad] = useState('')

  const enviarForm = (e) => {
    e.preventDefault()
    const data = {
      titulo,
      descripcion,
      color,
    }

    if (validarCodigoSeguridad(codigoSeguridad)) {
      registrarCategoria(data)
      console.log(data)
    } else {
      console.log('No hacer nada')
    }
  }


    /* fetch('http://localhost:3000/api/categorias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refreshPage()
      })
      .catch(err => console.log(err)) */
  

  function validarCodigoSeguridad(codigoSeguridad) {
    if (codigoSeguridad.length > 4) {
      return true
    }
    return false
  }

    //Limpiar Boton
    const refreshPage = () => {
      window.location.reload(true)
    }
  
  return (
    <>
      <HeaderHome />
      <Box
        component="form"
        onSubmit={enviarForm}
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
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <TextFieldStyled
        label='Color'
        variant='filled'
        fullWidth
        margin='normal'
        type='color'
        required
        value={color}
        onChange={(e) => setColor(e.target.value)}
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
      <BtnContainer>
            <div>
              <Button
                type="submit"
                variant="contained" 
                color="primary"

              >
                Guardar
              </Button>
              <Button
                type="reset"
                variant="contained" 
                color="primary" 
                sx={{  marginLeft: "40px" }}
                onClick={refreshPage}
              >
                Limpiar
              </Button>
            </div>
          </BtnContainer>

          <TablaCategoria
            categorias={categorias}
            
          
          />



    </Box>
      
    </>
  )
}

export default NuevaCategoria