import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Imagens das capas
import opoderdapiedade from './Assets/capas/opoderdapiedade.svg';
import verdades from './Assets/capas/101verdades.svg';
import ossegredosdofim from './Assets/capas/ossegredosdofim.svg';
import oquefazerquandoocoracao from './Assets/capas/oquefazerquandoocoracao.svg';
import asobrasdacarne from './Assets/capas/asobrasdacarne.svg';
import odeusquecumpre from './Assets/capas/odeusquecumpre.svg';
import porqueacruzeranecessaria from './Assets/capas/porqueacruzeranecessaria.svg';
import umajornadaaluz from './Assets/capas/umajornadaaluz.svg';
import apanhaimeasraposinhas from './Assets/capas/apanhaimeasraposinhas.svg';
import historiasincriveis from './Assets/capas/historiasincriveis.svg';
import acompaixaoquemove from './Assets/capas/acompaixaoquemove.svg';
import raquel from './Assets/capas/raquel.svg';
import opoderdabiblia from './Assets/capas/opoderdabiblia.svg';
import comovenceraansiedade from './Assets/capas/comovenceraansiedade.svg';
import anobrezadoservicocristao from './Assets/capas/anobrezadoservicocristao.svg';

const bookCovers = [
    { id: 1, image: opoderdapiedade, title: "O PODER Da Piedade", subtitle: "Transformando Vidas em Meio à Superficialidade", author: "Davi Secundo de Souza" },
    { id: 2, image: verdades, title: "101 VERDADES Sobre a Oração", subtitle: "O PODER DA BÍBLIA NA MENTE HUMANA", author: "CHRYSTIAN E RUTH BENIGNO" },
    { id: 3, image: ossegredosdofim, title: "Os Segredos DO FIM DOS TEMPOS", subtitle: "As últimas coisas simplificadas", author: "UMA ANALOGIA MISSIONÁRIA" },
    { id: 4, image: oquefazerquandoocoracao, title: "QUANDO O CORAÇÃO?", subtitle: "SERMÃO DO MONTE - Seguindo os ensinos de Jesus", author: "PEDRO CARLOS" },
    { id: 5, image: asobrasdacarne, title: "AS OBRAS DA CARNE & O FRUTO DO ESPÍRITO", subtitle: "A compaixão Que move EVANGELHO", author: "Bruno Gouvea" },
    { id: 6, image: odeusquecumpre, title: "SUAS PROMESSAS", subtitle: "Lições do 'profeta do fogo' sobre confiar nas ricas promessas de Deus", author: "Mazinho Barboza" },
    { id: 7, image: porqueacruzeranecessaria, title: "POR QUE A CRUZ ERA NECESSÁRIA", subtitle: "", author: "Alysson Barbosa" },
    { id: 8, image: umajornadaaluz, title: "UMA JORNADA", author: "JONAS LUPPI" },
    { id: 9, image: apanhaimeasraposinhas, title: "APANHAI-ME AS RAPOSINHAS", subtitle: "O CLAMOR DA IGREJA POR SANTIDADE", author: "" },
    { id: 10, image: historiasincriveis, title: "HISTÓRIAS INCRÍVEIS", subtitle: "", author: "CYNTHIA MÜLLER" },
    { id: 11, image: acompaixaoquemove, title: "A COMPAIXÃO QUE MOVE O EVANGELHO", author: "Bruno Gouvea" },
    { id: 12, image: raquel, title: "RAQUEL UMA ANALOGIA MISSIONÁRIA", author: "Antônio Adson" },
    { id: 13, image: opoderdabiblia, title: "O PODER DA BÍBLIA NA MENTE HUMANA", subtitle: "", author: "Daniel Rodrigues" },
    { id: 14, image: comovenceraansiedade, title: "COMO VENCER A ANSIEDADE", subtitle: "", author: "Otacílio Júnior" },
    { id: 15, image: anobrezadoservicocristao, title: "A NOBREZA DO SERVIÇO CRISTÃO", subtitle: "", author: "Davi Secundo" },
];

const Capas = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (book) => {
        setSelectedImage(book);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/300x400';
    };

    return (
        <div className="min-h-screen bg-gram-cream-white">
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Projetos de Capas</h1>
                    <p className="text-xl text-gray-200">Conheça nossa coleção de capas criadas com excelência</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]} 
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    // A PROPRIEDADE 'centeredSlides' FOI REMOVIDA DAQUI
                    className="capas-carousel-wrapper"
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 2, spaceBetween: 30 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                >
                    {bookCovers.map((book) => (
                        <SwiperSlide 
                            key={book.id} 
                            className="cursor-pointer group shadow-xl rounded-lg overflow-hidden"
                            onClick={() => openModal(book)}
                        >
                            <img 
                                src={book.image} 
                                alt={book.title}
                                className="w-full h-full object-cover aspect-[3/4] block transform group-hover:scale-105 transition-transform duration-300"
                                onError={handleImageError}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center mt-20">
                    <Link 
                        to="/"
                        className="inline-block bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                    >
                        Voltar ao Início
                    </Link>
                </div>
            </div>

            {/* Modal/Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={handleModalClick}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
                            aria-label="Fechar"
                        >
                            ×
                        </button>
                        <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title || `Capa ${selectedImage.id}`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            loading="lazy"
                        />
                        {(selectedImage.title || selectedImage.author) && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                                {selectedImage.title && <h3 className="text-white font-bold text-lg mb-1">{selectedImage.title}</h3>}
                                {selectedImage.subtitle && <p className="text-white/90 text-sm mb-1">{selectedImage.subtitle}</p>}
                                {selectedImage.author && <p className="text-white/80 text-sm">{selectedImage.author}</p>}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Capas;