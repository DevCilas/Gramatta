import { useState } from 'react'
import Header from './Components/header'
import Carousel from './Components/Carousel'
import About from './Components/About'
import Servicos from './Components/Servicos'
import Authors from './Components/Authors'
import TastingSelection from './Components/TastingSelection'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header />
      <div id="carousel">
        <Carousel />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Servicos />
      </div>
      <div id="authors">
        <Authors />
      </div>
      <div id="tasting">
        <TastingSelection />
      </div>
      <Footer />
    </>
  )
}

export default App
