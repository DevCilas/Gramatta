import { useState } from 'react'
import Header from './Components/header'
import Carousel from './Components/Carousel'
import About from './Components/About'
import Servicos from './Components/Servicos'

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Servicos />
    </>
  )
}

export default App
