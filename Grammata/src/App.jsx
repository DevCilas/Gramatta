import { useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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

// ADICIONADO: Importação das novas páginas de serviços
import TranscricaoPage from './Components/servicos/TranscricaoPage'
import RevisaoPage from './Components/servicos/RevisaoPage'
import DiagramacaoPage from './Components/servicos/DiagramacaoPage'
import ImpressaoPage from './Components/servicos/ImpressaoPage'


// Custom hook to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/capas" element={<Capas />} />
        <Route path="/miolo" element={<Miolo />} />
        <Route path="/dentro-do-livro" element={<DentroDoLivro />} />
        
        {/* ADICIONADO: Definição das novas rotas de serviços */}
        <Route path="/servicos/transcricao" element={<TranscricaoPage />} />
        <Route path="/servicos/revisao" element={<RevisaoPage />} />
        <Route path="/servicos/diagramacao" element={<DiagramacaoPage />} />
        <Route path="/servicos/impressao" element={<ImpressaoPage />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App