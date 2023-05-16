import React, { useState } from 'react'
import Hero from "../components/Hero"
import { HeaderHome } from "../components/Header"
import Carrusel from "../components/Carrusel/Carrusel"
import {v4 as uuidv4 } from 'uuid'



const Home = () => {

  const [categorias, setcategorias] = useState([
    {
      id: uuidv4(),
      "categoria": "Front End",
      "descripcion": "Formación Front End de Alura Latam",
      colorCategoria: '#6bd1ff',      
    },
    {
      id: uuidv4(),
      "categoria": "Back End",
      "descripcion": "Formación Back End de Alura Latam",
      colorCategoria: '#00c86f',      
    },
    {
      id: uuidv4(),
      "categoria": "Inovacion y Gestión",
      "descripcion": "Formación Innovación y Gestión de Alura Latam",
      colorCategoria: '#ff8c2a',      
    },

  ]);


  return (
    <>
      <HeaderHome />
      <Hero />
      {
        categorias.map( (categoria) => {
          return <Carrusel
            datos={categoria}
            key={categoria.categoria}
            />
        })
      }
      

    </>
  
  )
}

export default Home