import React, { useState, useContext } from 'react'
import Hero from "../components/Hero"
import { HeaderHome } from "../components/Header"
import Carrusel from "../components/Carrusel/Carrusel"
/* import {v4 as uuidv4 } from 'uuid' */
import { useSeccionContext, useCategoriaContext } from '../Hooks/SeccionProvider'




const Home = () => {

  const secciones = useSeccionContext()
  const categorias = useCategoriaContext()

  return (
    <>
      <HeaderHome />
      <Hero />
      {
        categorias.map( (categoria) => {
          return (
            <Carrusel 
              key={categoria.titulo}
              categoria={categoria}
              secciones={secciones.filter( seccion => seccion.categoria === categoria.titulo )}

              
              />
          )
        
        })
      }
    </>
  )
}

export default Home