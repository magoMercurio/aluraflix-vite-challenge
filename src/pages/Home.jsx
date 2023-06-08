// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Hero from "../components/Hero"
import { HeaderHome } from "../components/Header"


const Home = (props) => {
  const { videos, categorias } = props
  
  return (
    <>
      <HeaderHome />
      <Hero 
        categorias={categorias}
        videos={videos} 
      />
      
    </>
  )
}

export default Home