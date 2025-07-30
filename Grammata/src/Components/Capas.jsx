import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Imagens das capas
import capa1 from './Assets/capas/1.svg';
import capa2 from './Assets/capas/2.svg';
import capa3 from './Assets/capas/3.svg';
import capa4 from './Assets/capas/4.svg';
import capa5 from './Assets/capas/5.svg';
import capa6 from './Assets/capas/6.svg';
import capa7 from './Assets/capas/7.svg';
import capa8 from './Assets/capas/8.svg';
import capa9 from './Assets/capas/9.svg';
import capa10 from './Assets/capas/10.svg';
import capa11 from './Assets/capas/11.svg';
import capa12 from './Assets/capas/12.svg';
import capa13 from './Assets/capas/13.svg';
import capa14 from './Assets/capas/14.svg';
import capa15 from './Assets/capas/15.svg';
import capa16 from './Assets/capas/16.svg';
import capa17 from './Assets/capas/17.svg';
import capa18 from './Assets/capas/18.svg';
import capa19 from './Assets/capas/19.svg';
import capa20 from './Assets/capas/20.svg';
import capa21 from './Assets/capas/21.svg';
import capa22 from './Assets/capas/22.svg';
import capa23 from './Assets/capas/23.svg';
import capa24 from './Assets/capas/24.svg';
import capa25 from './Assets/capas/25.svg';
import capa26 from './Assets/capas/26.svg';
import capa27 from './Assets/capas/27.svg';
import capa28 from './Assets/capas/28.svg';
import capa29 from './Assets/capas/29.svg';
import capa30 from './Assets/capas/30.svg';


const bookCovers = [
    { id: 1, image: capa1 },
{ id: 2, image: capa2 },
{ id: 3, image: capa3 },
{ id: 4, image: capa4 },
{ id: 5, image: capa5 },
{ id: 6, image: capa6 },
{ id: 7, image: capa7 },
{ id: 8, image: capa8 },
{ id: 9, image: capa9 },
{ id: 10, image: capa10 },
{ id: 11, image: capa11 },
{ id: 12, image: capa12 },
{ id: 13, image: capa13 },
{ id: 14, image: capa14 },
{ id: 15, image: capa15 },
{ id: 16, image: capa16 },
{ id: 17, image: capa17 },
{ id: 18, image: capa18 },
{ id: 19, image: capa19 },
{ id: 20, image: capa20 },
{ id: 21, image: capa21 },
{ id: 22, image: capa22 },
{ id: 23, image: capa23 },
{ id: 24, image: capa24 },
{ id: 25, image: capa25 },
{ id: 26, image: capa26 },
{ id: 27, image: capa27 },
{ id: 28, image: capa28 },
{ id: 29, image: capa29 },
{ id: 30, image: capa30 },

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