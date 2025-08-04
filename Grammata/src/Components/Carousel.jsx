// Início do arquivo src/Components/Carousel.jsx

import React from 'react';

// ADICIONADO: Importações do Swiper para substituir a lógica manual
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Imagens dos lançamentos (sem alteração)
import slide1 from './Assets/releases/slideescatologia.svg';
import slide2 from './Assets/releases/slidebemvindos.svg';
import slide3 from './Assets/releases/slideminhasguerras.svg';

// Array de dados (sem alteração)
const launches = [
    {
        id: 1,
        title: 'Escatologia Bíblica',
        description: 'Um grito por sua volta',
        image: slide1,
        buttonText: 'Saiba mais',
        link: 'https://www.instagram.com/ubirajaraalmeida1/'
    },
    {
        id: 2,
        title: 'Sejam Bem-Vindos!',
        description: 'Sejam bem-vindos ao site oficial da Grammata Publicações. ',
        image: slide2,
        buttonText: 'Conhecer',
        link:'quem-somos',
    },
    {
        id: 3,
        title: 'Minhas Guerras, Minhas Crises',
        description: 'Como vencer as dores que surgem na vida dos homens de Deus',
        image: slide3,
        buttonText: 'Saiba mais',
        link: 'https://www.instagram.com/pr_thales_walassi/'
    }
];

const Carousel = () => {
    // TODA A LÓGICA DE USESTATE, USEREF e USEEFFECT FOI REMOVIDA
    
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-cream-white">
            <div className="container mx-auto px-4">
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gram-dark-blue mb-4">
                        Lançamentos
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conheça nossas últimas publicações que estão encantando leitores.
                    </p>
                </div>

                {/* Carrossel Swiper - Robusto e sem bugs */}
                <div className="max-w-6xl mx-auto lancamentos-carousel-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        className="rounded-lg shadow-xl"
                    >
                        {launches.map((launch) => (
                            <SwiperSlide key={launch.id}>
                                <div className="bg-white p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8">
                                    {/* Imagem */}
                                    <div className="w-full lg:w-1/2 flex-shrink-0">
                                        <img 
                                            src={launch.image} 
                                            alt={launch.title}
                                            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    {/* Conteúdo de Texto */}
                                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gram-dark-blue mb-4">
                                            {launch.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                            {launch.description}
                                        </p>
                                        <a
                                            href={launch.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                                        >
                                            {launch.buttonText}
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Carousel;

// Fim do arquivo src/Components/Carousel.jsx