import React from 'react'
import Slider from '../Slider'


const Carrusel = (props) => {

  const { id, colorCategoria } = props.datos
  const { secciones } = props

  return (
    <>
      {
        secciones.map((seccion, index) =>
          <Slider 
            id={id} 
            datos={seccion} 
            key={index}
            colorCategoria={colorCategoria}
          />
        )}
    </>
  )
}


export default Carrusel