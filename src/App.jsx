// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home';
import Carrusel from './components/Carrusel/Carrusel';
import NuevoVideo from './pages/NuevoVideo';
import Footer from './components/Footer';
import {v4 as uuidv4 } from 'uuid'
import NuevaCategoria from './pages/NuevaCategoria';


function App() {

  
  const [videos, setVideos] = useState([
    {
      id: uuidv4(),
      titulo: "Video 1",
      link: "https://www.youtube.com/watch?v=2-6hEFsXMaU&ab_channel=Programaci%C3%B3nAccesible",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Front End",
      descripcion: ""

    },
    {
      id: uuidv4(),
      titulo: "Video 2",
      link: "https://www.youtube.com/watch?v=H_s-xM6Ii1g",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Front End",
      descripcion: ""
    },
    {
      id: uuidv4(),
      titulo: "Video 3",
      link: "https://www.youtube.com/watch?v=ESShhQmBjjY",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Front End",
      descripcion: ""
    },
    {
      id: uuidv4(),
      titulo: "Video 4",
      link: "https://www.youtube.com/watch?v=tA-_vAz9y78&t=414s&pp=ygUSbmV4dCBqcyBlY29tbWVyY2Ug",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Front End",
      descripcion: ""
    },
    {
      id: uuidv4(),
      titulo: "Video 5",
      link: "https://www.youtube.com/watch?v=QqiDandkcBY",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Front End",
      descripcion: "Video para aprender a realizar apis con prisma y node js"
    },

    {
      id: uuidv4(),
      titulo: "Video 1",
      link: "https://www.youtube.com/embed/0Zb5fgO0ubE",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Back End",
      descripcion: "Este es el video 1"

    },
    {
      id: uuidv4(),
      titulo: "Video 2",
      link: "https://www.youtube.com/watch?v=Fms6bXpqF2k&ab_channel=hdeleon.net",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Back End",
      descripcion: "Este es el video 2"
    },
    {
      id: uuidv4(),
      titulo: "Video 3",
      link: "https://www.youtube.com/watch?v=ZTsi1e-VJIU&ab_channel=EDteam",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Back End",
      descripcion: "Este es el video 3"
    },
    {
      id: uuidv4(),
      titulo: "Video 4",
      link: "https://www.youtube.com/embed/6sF0Or9fk9Y",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "inovacion",
      descripcion: "Este es el video 4"
    },
    {
      id: uuidv4(),
      titulo: "Flutter y El Desarrollo Móvil Multiplataforma",
      link: "https://www.youtube.com/embed/QypisuCXpk8",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Mobile",
      descripcion: "Entrevista a un programador de Flutter"
    },
  ]);

  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      titulo: "Front End",
      colorCategoria: "#6bd1ff",
      descripcion: "Formación Front End de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "Back End",
      colorCategoria: "#00c86f",
      descripcion: "Formación Back End de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "Inovacion y Gestión",
      colorCategoria: "#ff8c2a",
      descripcion: "Formación Innovación y Gestión de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "Infraestructura",
      colorCategoria: "#9cd33b",
      descripcion: "Formación Infraestructura de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "Mobile",
      colorCategoria: "#ffba05",
      descripcion: "Formación Mobile de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "marketing",
      colorCategoria: "#9cd33b",
      descripcion: "Formación Marketing de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "inovacion",
      colorCategoria: "#ff8c2a",
      descripcion: "Formación Inovación de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "UX",
      colorCategoria: "#dc6ebe",
      descripcion: "Formación UX de Alura Latam",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorCategoria: "#9cd33b",
      descripcion: "Formación Data Science de Alura Latam",
    },
  ]);

  //Registrar videos
  const registrarVideo = (e) => {
    setVideos([...videos, e]);
  }

  //Registrar categorias
  const registrarCategoria = (e) => {
    setCategorias([...categorias, e]);
  }

  //Actualizar categorias
  const actualizarCategorias = (nuevasCategorias) => {
    setCategorias(nuevasCategorias);
  }

  //Eliminar categorias
  const eliminarCategoria = (id) => {
    setCategorias(categorias.filter( categoria => categoria.id !== id ));
  }

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path='/' 
          element={
            <>
              <Home 
                videos={videos}
                categorias={categorias}
              />
              {
                categorias.map( (categoria) => {
                  return <Carrusel
                    datos={categoria}
                    key={categoria.titulo}
                    videos={videos.filter( (video) => video.categoria === categoria.titulo )}
                    categorias={categorias}
                  />
                })
              }
            </>
          }
        />
        <Route
            path='/nuevovideo'
            element={<NuevoVideo
              categorias={categorias}
              key={categorias.titulo}
              registrarVideo={registrarVideo}
              />}
        />
        <Route
            path='/NuevaCategoria'
            element={<NuevaCategoria
              categorias={categorias}
              key={categorias.titulo}
              registrarCategoria={registrarCategoria}
              actualizarCategorias={actualizarCategorias}
              eliminarCategoria={eliminarCategoria}
              />}
            />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
