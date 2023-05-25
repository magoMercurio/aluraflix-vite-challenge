// eslint-disable-next-line no-unused-vars
import React from 'react';
import VideoCard from '../VideoCard';
import styled from 'styled-components';
import { Abtn } from '../../Ui/'



const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 114px;
gap: 11px;
`

const TitleCategoria = styled(Abtn)`

`
const DescriptionCategoria = styled.p`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: var(--font-family);
font-style: normal;
font-weight: var(--font-weight-300);
font-size: var(--font-size-body-medium);
line-height: var(--line-height-body-medium);
`



const Slider = (props) => {

  const { categoria, descripcion } = props.datos
  const { seccion, colorCategoria } = props

  const bg = {
    background: colorCategoria
  }


  return (
    <div className="slider">
      <TitleContainer>
        <TitleCategoria style={ bg } >{ categoria }</TitleCategoria>
        <DescriptionCategoria>{ descripcion }</DescriptionCategoria>
      </TitleContainer>
      <VideoCard />
    </div>
  )
}

export default Slider;
