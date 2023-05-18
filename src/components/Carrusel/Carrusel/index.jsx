import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider'


const Carrusel = (props) => {

  const { id, colorCategoria } = props.datos
  const { secciones } = props

  return (
    <>
    <div className="carrusel">
      
      {
        secciones.map((seccion, index) =>
          <Slider 
            id={id} 
            datos={seccion} 
            key={index}
            colorCategoria={colorCategoria}
          />
        )}

    {/*   <TitleContainer>
        <TitleCategoria>{ titulo }</TitleCategoria>
        <DescriptionCategoria>descripcion</DescriptionCategoria>
      </TitleContainer>
      <Slider  /> */}
    </div>
    </>
  )
}


export default Carrusel