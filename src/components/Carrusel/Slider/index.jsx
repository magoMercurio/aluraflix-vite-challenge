// eslint-disable-next-line no-unused-vars
import React from 'react';
import VideoCard from '../VideoCard';
import styled from 'styled-components';
import { Abtn, Parrafo } from '../../Ui/'


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

const Slider = (props) => {

  const { categoria, descripcion } = props.datos
  const { colorCategoria } = props

  const bgc = {
    background: colorCategoria,
    border: colorCategoria
  }


  return (
    <div className="slider">
      <TitleContainer>
        <TitleCategoria
        style={ bgc}>{ categoria }</TitleCategoria>
        <DescriptionCategoria>{ descripcion }</DescriptionCategoria>
      </TitleContainer>
      <VideoCard />
    </div>
  )
}

export default Slider;
