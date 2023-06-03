// eslint-disable-next-line no-unused-vars
import React from 'react'
import SliderCarrusel from '../SliderCarrusel'


const Carrusel = (props) => {

  const { id, colorCategoria } = props.datos
  const { secciones, videos } = props

  return (
    <>
      {
        secciones.map((seccion, index) =>
          <SliderCarrusel 
            id={id} 
            datos={seccion} 
            key={index}
            colorCategoria={colorCategoria}
            videos={videos}
          />
        )}
    </>
  )
}


export default Carrusel