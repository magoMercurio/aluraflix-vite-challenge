// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import Footer from './components/Footer';
import { SeccionProvider } from './Hooks/SeccionProvider';



function App() {


  return (
    <Router>
      <SeccionProvider>
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
      <Footer />
    </SeccionProvider>
    </Router>
  )
}

export default App
