import React from 'react'
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
  display: flex;
  justify-content: space-around;
  align-items: center;

`

const BtnNuevaCategoria = styled(Abtn)`
width: 89.5px;
height: 36px;
border-radius: 4px;
font-size: 14px;
`


const NuevoVideo = ({ categorias }) => {



    return (
      <>
        <HeaderGeneric />
        <TitleBig>Nuevo Video</TitleBig>

        <Box
          component="form"
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
            
          />
          <TextFieldStyled
            
            label='Link del video'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='text'
          />
          <TextFieldStyled
            
            label='Link imagen del video'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='text'
          />
          <TextFieldStyled
            
            label='Escoja una categoría'
            variant='filled'
            fullWidth
            margin='normal'
            required
            select        
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
          />
          <TextFieldStyled
            
            label='Codigo de seguridad'
            variant='filled'
            fullWidth
            margin='normal'
            required
            type='password'
          />

          <BtnContainer>
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
            
              <BtnNuevaCategoria
                >
                Nueva Categoria
              </BtnNuevaCategoria>
            
          </BtnContainer>
          
         
          </Box>

      </>
    )
}

export default NuevoVideo