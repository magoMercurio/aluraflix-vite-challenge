import React, { useState, useContext } from 'react'
import {v4 as uuidv4 } from 'uuid'


const seccionContext = React.createContext()
const categoriaContext = React.createContext()

export function useSeccionContext() {
  return useContext(seccionContext)
}

export function useCategoriaContext() {
  return useContext(categoriaContext)
}

export const SeccionProvider = ({ children }) => {

  const [secciones, setSecciones] = useState([
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

  ])

  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      titulo: "Front End",
      colorCategoria: "#6bd1ff",
    },
    {
      id: uuidv4(),
      titulo: "Back End",
      colorCategoria: "#00c86f",
    },
    {
      id: uuidv4(),
      titulo: "Inovacion y Gestión",
      colorCategoria: "#ff8c2a",
    },
    {
      id: uuidv4(),
      titulo: "Infraestructura",
      colorCategoria: "#9cd33b",
    },
    {
      id: uuidv4(),
      titulo: "mobile",
      colorCategoria: "#ffba05",
    },
    {
      id: uuidv4(),
      titulo: "marketing",
      colorCategoria: "#9cd33b",
    },
    {
      id: uuidv4(),
      titulo: "inovacion",
      colorCategoria: "#ff8c2a",
    },
    {
      id: uuidv4(),
      titulo: "UX",
      colorCategoria: "#dc6ebe",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorCategoria: "#9cd33b",
    },
  ]);

  return (
    <seccionContext.Provider value={{ secciones}}>
      <categoriaContext.Provider value={{ categorias}}>
        {children}
      </categoriaContext.Provider>
    </seccionContext.Provider>
  )
}

{
  categorias.map( (categoria) => {
    return <Carrusel
      datos={categoria}
      key={categoria.titulo}
      secciones={secciones.filter( seccion => seccion.categoria === categoria.titulo )}
      />
    })
}