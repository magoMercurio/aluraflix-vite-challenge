// eslint-disable-next-line no-unused-vars
import React from 'react'
import SliderCarrusel from '../SliderCarrusel'
import styled from 'styled-components'
import { Parrafo, Abtn } from '../../Ui'



const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 114px;
gap: 11px;
`

const TitleCategoria = styled(Abtn)`

`
const DescriptionCategoria = styled(Parrafo)`

`


const Carrusel = (props) => {

  const { id, titulo, descripcion,colorCategoria } = props.datos
  const {  videos } = props

  const bgc = {
    background: colorCategoria,
    border: colorCategoria
  }

  return (
    <>
      {
        videos.length > 0 ?
        <TitleContainer>
          <TitleCategoria style={ bgc }>{ titulo }</TitleCategoria>
          <DescriptionCategoria>{ descripcion }</DescriptionCategoria>
          </TitleContainer> : null
      }
      <SliderCarrusel 
      id={id}
      colorCategoria={colorCategoria}
      videos={videos}  />
    </>
  )
}


export default Carrusel