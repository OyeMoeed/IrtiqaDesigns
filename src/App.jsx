import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
