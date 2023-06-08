// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { HeaderHome } from "../components/Header"
import { Box, TextField, Button } from "@mui/material"
import styled from 'styled-components'
import TablaCategoria from '../components/TablaCategorias'
import { TitleBig  } from '../components/Ui'


const TextFieldStyled = styled(TextField)`
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

  const { categorias, registrarCategoria, actualizarCategorias, eliminarCategoria  } = props

  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [colorCategoria, setColorCategoria] = useState( '#ffffff')
  const [codigoSeguridad, setcodigoSeguridad] = useState('')
  const [categoriaEdit, setCategoriaEdit] = useState(null);

  const enviarForm = (e) => {
    e.preventDefault()

    if (categoriaEdit === null) {
      registrarCategoria({
        titulo,
        descripcion,
        colorCategoria
      })
    } else {
        const categoriaActualizada = {
          ...categoriaEdit,
          titulo,
          descripcion,
          colorCategoria
      
        }
        const categoriasActualizadas = categorias.map((categoria) => categoria.id === categoriaEdit.id ? categoriaActualizada: categoria)
        
        actualizarCategorias(categoriasActualizadas)
      }
      refreshPage()
  }

  const editarCategoria = (categoria) => {
    setTitulo(categoria.titulo)
    setDescripcion(categoria.descripcion)
    setColorCategoria(categoria.colorCategoria)
    setCategoriaEdit(categoria)
  }


  function validarCodigoSeguridad(codigoSeguridad) {
    if (codigoSeguridad.length > 4) {
      return true
    }
    return false
  }

    //Limpiar Boton
    const refreshPage = () => {
      setTitulo('')
      setDescripcion('')
      setColorCategoria('#ffffff')
      setcodigoSeguridad('')
      setCategoriaEdit(null)
    }
  
  return (
    <>
      <HeaderHome />
      <TitleBig>{categoriaEdit  ? 'Editar Categoría' : 'Nueva Categoría'}</TitleBig>
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
        value={colorCategoria}
        onChange={(e) => setColorCategoria(e.target.value)}
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
            editarCategoria={editarCategoria}
            eliminarCategoria={eliminarCategoria}
          
          />



    </Box>
      
    </>
  )
}

export default NuevaCategoria