import React from 'react'
import { HeaderGeneric} from "../components/Header"
import styled from 'styled-components'
import { TextField } from '@mui/material';
import { TitleBig  } from '../components/Ui'

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
`

const TextFieldStyled = styled(TextField)`
  color: #f5f5f5f5;
  background-color: #53585D;
  
`

const NuevoVideo = () => {

  const inputColor = {
    color: '#f5f5f5f5'
  }

    return (
      <>
        <HeaderGeneric />
        <TitleBig>Nuevo Video</TitleBig>
        <form action="">
          <FormContainer>
            <TextFieldStyled
              id='filled-basic'
              label='Titulo'
              variant='filled'
              fullWidth
              margin='normal'
              required
            />
          </FormContainer>
          </form>
      </>
    )
}

export default NuevoVideo