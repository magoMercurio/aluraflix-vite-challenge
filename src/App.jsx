import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home';
import Carrusel from './components/Carrusel/Carrusel';
import NuevoVideo from './pages/NuevoVideo';
import Footer from './components/Footer';
import {v4 as uuidv4 } from 'uuid'





function App() {

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

  ]);

  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      titulo: "Front End",
      colorCategoria: "#6bd1ff",
      descripcion: "",
    },
    {
      id: uuidv4(),
      titulo: "Back End",
      colorCategoria: "#00c86f",
      descripcion: "",
    },
    {
      id: uuidv4(),
      titulo: "Inovacion y Gestión",
      colorCategoria: "#ff8c2a",
      descripcion: "",
    },
    {
      id: uuidv4(),
      titulo: "Infraestructura",
      colorCategoria: "#9cd33b",
      descripcion: "",
    },
    {
      id: uuidv4(),
      titulo: "mobile",
      colorCategoria: "#ffba05",
      descripcion: "",
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
      descripcion: "",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorCategoria: "#9cd33b",
      descripcion: "",
    },
  ]);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path='/' 
          element={
            <>
              <Home />
              {
                categorias.map( (categoria) => {
                  return <Carrusel
                    datos={categoria}
                    key={categoria.titulo}
                    secciones={secciones.filter( seccion => seccion.categoria === categoria.titulo )}
                  />
                })
              }
            </>
          }
        />
        <Route
            path='/nuevovideo'
            element={<NuevoVideo/>}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
