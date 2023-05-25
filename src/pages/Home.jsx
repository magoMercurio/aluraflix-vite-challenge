import React, { useState, useContext } from 'react'
import Hero from "../components/Hero"
import { HeaderHome } from "../components/Header"
import Carrusel from "../components/Carrusel/Carrusel"
/* import {v4 as uuidv4 } from 'uuid' */
import { useSeccionContext, useCategoriaContext, SeccionProvider } from '../Hooks/SeccionProvider'




const Home = () => {

  const secciones = useSeccionContext()
  const categorias = useCategoriaContext()

  return (
    <SeccionProvider>
      <HeaderHome />
      <Hero />
      {
        categorias.map( (categoria) => {
          return <Carrusel
            datos={categoria}
            key={categoria.titulo}
            secciones={secciones.filter( seccion => seccion.categoria === categoria.titulo )}
            />
        })
      }
    </SeccionProvider>
  )
}

export default Home