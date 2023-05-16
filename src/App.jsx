import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';



function App() {


  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
            path='/' 
            element={<Home/>}
        />
        <Route
            path='/nuevovideo'
            element={<NuevoVideo/>}
        />
      </Routes>

    
      
    </Router>
  )
}

export default App
