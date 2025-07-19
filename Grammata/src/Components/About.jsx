import React from "react";
import { Link } from "react-router-dom";
import logo from './Assets/logo.png';

const QuemSomos = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gram-dark-blue mb-8">
                Quem somos
              </h2>
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>
                  A Grammata é uma editora apaixonada por transformar ideias em livros.
                  Dedicamo-nos a cada etapa do processo editorial, desde a cuidadosa
                  transcrição até a entrega do livro impresso, sempre com profissionalismo
                  e carinho.
                </p>
                <p>
                  Nossa missão é dar voz a novos autores e trazer histórias inspiradoras
                  para mais leitores, construindo pontes entre escritores e leitores.
                </p>
                <div className="pt-4">
                  <Link 
                    to="/quem-somos"
                    className="inline-block bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
            {/* Team Placeholder */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-center min-h-[300px] shadow">
                <img src={logo} alt="Logo Grammata" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;