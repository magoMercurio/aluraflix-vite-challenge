import React, { useState } from 'react'
import { HeaderGeneric} from "../components/Header"
import styled from 'styled-components'
import { TextField, MenuItem, Box, Button } from '@mui/material'
import { TitleBig  } from '../components/Ui'
import { Abtn } from '../components/Ui'



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

/* const BtnNuevaCategoria = styled(Abtn)`
  width: 89.5px;
  height: 36px;
  font-size: 14px;

` */

const NuevoVideo = ({ categorias }) => {

  const [titulo, settitulo] = useState('')
  const [link, setlink] = useState('')
  const [linkImg, setlinkImg] = useState('')
  const [categoria, setcategoria] = useState('')
  const [descripcion, setdescripcion] = useState('')
  const [codigoSeguridad, setcodigoSeguridad] = useState('')


  const {registrarVideo } = props



  const enviarForm = (e) => {
    e.preventDefault()
    const data = {
      titulo,
      link,
      linkImg,
      categoria,
      descripcion
    }
    console.log(data)
    
  }

  function validarCodigoSeguridad(codigoSeguridad) {
    if (codigoSeguridad.length > 4) {
      return true
    }
    return false
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
            onChange={(e) => settitulo(e.target.value)}
          />
          <TextFieldStyled
            
            label='Link del video'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='text'
            value={link}
            onChange={(e) => setlink(e.target.value)}
          />
          <TextFieldStyled
            
            label='Link imagen del video'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='text'
            value={linkImg}
            onChange={(e) => setlinkImg(e.target.value)}
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
            onChange={(e) => setdescripcion(e.target.value)}
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