import React from 'react'
import Slider from '../Slider'
import { useSeccionContext, useCategoriaContext, SeccionProvider } from '../../../Hooks/SeccionProvider'


const Carrusel = () => {
  
  const secciones = () => useSeccionContext;
  
  const categorias = useCategoriaContext()



  return (
    <>
      {
        secciones.map((seccion, index) =>
          <Slider 
            id={secciones.id} 
            datos={seccion} 
            key={index}
            colorCategoria={categorias.colorCategoria}
          />
        )}
    </>
  )
}


export default Carrusel