import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import FetchApi from './pages/FetchApi'

function App() {

  // Desestructuración de objetos
  // const objeto = {
  //   id : 1,
  //   nombre : 'Adilia'
  // }

  // const { id, nombre } = objeto;

  // console.log(id)

  // const array = ['rosado', 'morado', 'verde']

  // const [ morado, amarillo ] = array;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/api/:name' element={ <FetchApi /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
