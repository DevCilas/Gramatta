import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/header'
import Carousel from './Components/Carousel'
import About from './Components/About'
import Servicos from './Components/Servicos'
import Authors from './Components/Authors'
import TastingSelection from './Components/TastingSelection'
import Footer from './Components/Footer'
import QuemSomos from './Components/QuemSomos'
import Capas from './Components/Capas'
import Miolo from './Components/Miolo'
import DentroDoLivro from './Components/DentroDoLivro'

function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/capas" element={<Capas />} />
        <Route path="/miolo" element={<Miolo />} />
        <Route path="/dentro-do-livro" element={<DentroDoLivro />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
