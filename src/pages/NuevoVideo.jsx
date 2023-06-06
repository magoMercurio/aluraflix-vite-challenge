// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { HeaderGeneric} from "../components/Header"
import styled from 'styled-components'
import { TextField, MenuItem, Box, Button } from '@mui/material'
import { TitleBig  } from '../components/Ui'


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

`

const NuevoVideo = ({ categorias, registrarVideo }) => {

  const [titulo, setTitulo] = useState('')
  const [link, setLink] = useState('')
  const [linkImg, setLinkImg] = useState('')
  const [categoria, setcategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [codigoSeguridad, setcodigoSeguridad] = useState('')


  const enviarForm = (e) => {
    e.preventDefault()
    const data = {
      titulo,
      link,
      linkImg,
      categoria,
      descripcion
    }
    if (validarCodigoSeguridad(codigoSeguridad)) {
      registrarVideo(data)
      console.log(data)
    } else {
      console.log('No hacer nada')
    }
  }

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
        <HeaderGeneric />
        <TitleBig>Nuevo Video</TitleBig>

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
            
            label='Link del video'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='text'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <TextFieldStyled
            
            label='Link imagen del video'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='text'
            value={linkImg}
            onChange={(e) => setLinkImg(e.target.value)}
          />
          <TextFieldStyled
            
            label='Escoja una categoría'
            variant='filled'
            fullWidth
            margin='normal'
            required
            select
            defaultValue={''}
            value={categoria}
            onChange={(e) => setcategoria(e.target.value)}
            >
              {
              categorias.map((option) => (
                <MenuItem key={option.titulo} 
                  value={option.titulo}
                >
                  {option.titulo}
                </MenuItem>
              ))}
          </TextFieldStyled>
          <TextFieldStyled
            
            label='Descripción'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='text'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
            <div>
              <Button
                variant="contained"
                href='/NuevaCategoria'
                >
                Nueva Categoria
              </Button>
            </div>
          </BtnContainer>
          

        </Box>

      </>
    )
}

export default NuevoVideo