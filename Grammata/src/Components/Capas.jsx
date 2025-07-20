import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import all book cover images
import capa1 from './Assets/capas/CAPA1.jpeg';
import capa2 from './Assets/capas/CAPA2.jpeg';
import capa3 from './Assets/capas/CAPA3.jpeg';
import capa4 from './Assets/capas/CAPA4.jpeg';
import capa5 from './Assets/capas/CAPA5.jpeg';
import capa6 from './Assets/capas/CAPA6.jpeg';
import capa7 from './Assets/capas/CAPA7.jpeg';
import capa8 from './Assets/capas/CAPA8.jpeg';
import capa9 from './Assets/capas/CAPA9.jpeg';
import capa10 from './Assets/capas/CAPA10.jpeg';
import capa11 from './Assets/capas/CAPA11.jpeg';
import capa12 from './Assets/capas/CAPA12.jpeg';
import capa13 from './Assets/capas/CAPA13.jpeg';
import capa14 from './Assets/capas/CAPA14.jpeg';
import capa15 from './Assets/capas/CAPA15.jpeg';

const bookCovers = [
    { id: 1, image: capa1, title: "O PODER Da Piedade", subtitle: "Transformando Vidas em Meio à Superficialidade", author: "Davi Secundo de Souza" },
    { id: 2, image: capa2, title: "101 VERDADES Sobre a Oração", subtitle: "O PODER DA BÍBLIA NA MENTE HUMANA", author: "CHRYSTIAN E RUTH BENIGNO" },
    { id: 3, image: capa3, title: "Os Segredos DO FIM DOS TEMPOS", subtitle: "As últimas coisas simplificadas", author: "UMA ANALOGIA MISSIONÁRIA" },
    { id: 4, image: capa4, title: "QUANDO O CORAÇÃO?", subtitle: "SERMÃO DO MONTE - Seguindo os ensinos de Jesus", author: "PEDRO CARLOS" },
    { id: 5, image: capa5, title: "AS OBRAS DA CARNE & O FRUTO DO ESPÍRITO", subtitle: "A compaixão Que move EVANGELHO", author: "Bruno Gouvea" },
    { id: 6, image: capa6, title: "SUAS PROMESSAS", subtitle: "Lições do 'profeta do fogo' sobre confiar nas ricas promessas de Deus", author: "Mazinho Barboza" },
    { id: 7, image: capa7, title: "POR QUE A CRUZ ERA NECESSÁRIA", subtitle: "", author: "Alysson Barbosa" },
    { id: 8, image: capa8, title: "UMA JORNADA", author: "JONAS LUPPI" },
    { id: 9, image: capa9, title: "APANHAI-ME AS RAPOSINHAS", subtitle: "O CLAMOR DA IGREJA POR SANTIDADE", author: "" },
    { id: 10, image: capa10, title: "HISTÓRIAS INCRÍVEIS", subtitle: "", author: "CYNTHIA MÜLLER" },
    { id: 11, image: capa11, title: "A COMPAIXÃO QUE MOVE O EVANGELHO", author: "Bruno Gouvea" },
    { id: 12, image: capa12, title: "RAQUEL UMA ANALOGIA MISSIONÁRIA", author: "Antônio Adson" },
    { id: 13, image: capa13, title: "O PODER DA BÍBLIA NA MENTE HUMANA", subtitle: "", author: "Daniel Rodrigues" },
    { id: 14, image: capa14, title: "COMO VENCER A ANSIEDADE", subtitle: "", author: "Otacílio Júnior" },
    { id: 15, image: capa15, title: "A NOBREZA DO SERVIÇO CRISTÃO", subtitle: "", author: "Davi Secundo" },
];

const Capas = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (book) => {
        setSelectedImage(book);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleImageError = (e) => {
        // Fallback image or error handling
        e.target.src = 'https://via.placeholder.com/300x400'; // Placeholder image
    };

    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Projetos de Capas</h1>
                    <p className="text-xl text-gray-200">Conheça nossa coleção de capas criadas com excelência</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction Text */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-gram-dark-blue mb-6">
                            A Importância da Capa do Livro na Construção da Identidade Editorial
                        </h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                A capa é considerada o cartão de visita de um livro, pois além de protegê-lo serve como chamariz para os leitores. Nela você irá encontrar o título da obra, nome do autor(a) e a editora em que ela foi publicada. É a parte de trás do livro, nela consta a sua sinopse e podemos conhecer sobre do que se trata a obra.
                            </p>
                            <p>
                                Em um universo literário cada vez mais visual e competitivo, a capa de um livro deixou de ser apenas uma proteção física para se tornar uma porta de entrada simbólica para o conteúdo que habita suas páginas. É a primeira impressão, o convite silencioso ao leitor e, muitas vezes, o fator decisivo entre o permanecer na estante ou ser levado para casa.
                            </p>
                            <p>
                                Na Grammata, compreendemos profundamente essa importância e levamos a sério cada etapa do processo de criação de uma capa. Com uma equipe composta por três grandes capistas, profissionais que unem sensibilidade artística, domínio técnico e visão editorial, estabelecemos um compromisso com a excelência. Nossa prioridade não é apenas estética: buscamos expressar a essência única de cada obra, sua identidade particular, e harmonizá-la com padrões editoriais que valorizem o conteúdo sem eclipsá-lo.
                            </p>
                            <p>
                                Cada capa produzida é fruto de um trabalho minucioso, onde são considerados os elementos visuais, tipográficos e simbólicos que melhor comunicam o tom, o gênero e a proposta narrativa do livro. A qualidade gráfica, a coerência editorial e o impacto visual caminham juntos para transformar um simples volume em um objeto de desejo e inspiração.
                            </p>
                            <p>
                                Mais do que uma embalagem, a capa é um manifesto artístico. Ela traduz o coração do livro em imagem. Por isso, na Grammata, cada projeto gráfico é tratado como um diálogo entre o autor, o leitor e o universo da leitura — e esse diálogo começa, necessariamente, pela capa.
                            </p>
                        </div>
                    </div>

                    {/* Book Covers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bookCovers.map((book) => (
                            <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => openModal(book)}>
                                <div className="relative">
                                    <img 
                                        src={book.image} 
                                        alt={book.title}
                                        className="w-full h-80 object-cover"
                                        onError={handleImageError}
                                        loading="lazy"
                                    />
                                    {book.title && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <h3 className="text-white font-bold text-lg mb-1">
                                                {book.title}
                                            </h3>
                                            {book.subtitle && (
                                                <p className="text-white/90 text-sm mb-1">
                                                    {book.subtitle}
                                                </p>
                                            )}
                                            {book.author && (
                                                <p className="text-white/80 text-sm">
                                                    {book.author}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Back to Home Button */}
                    <div className="text-center mt-12">
                        <Link 
                            to="/"
                            className="inline-block bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                        >
                            Voltar ao Início
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal/Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={handleModalClick}
                >
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
                            aria-label="Fechar"
                        >
                            &times;
                        </button>
                        
                        {/* Image */}
                        <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title || `Capa ${selectedImage.id}`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            loading="lazy"
                        />
                        
                        {/* Image Info */}
                        {(selectedImage.title || selectedImage.author) && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                                {selectedImage.title && (
                                    <h3 className="text-white font-bold text-lg mb-1">
                                        {selectedImage.title}
                                    </h3>
                                )}
                                {selectedImage.subtitle && (
                                    <p className="text-white/90 text-sm mb-1">
                                        {selectedImage.subtitle}
                                    </p>
                                )}
                                {selectedImage.author && (
                                    <p className="text-white/80 text-sm">
                                        {selectedImage.author}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Capas; 