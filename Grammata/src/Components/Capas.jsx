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
import capa31 from './Assets/capas/31.svg';
import capa32 from './Assets/capas/32.svg';
import capa33 from './Assets/capas/33.svg';
import capa34 from './Assets/capas/34.svg';
import capa35 from './Assets/capas/35.svg';
import capa36 from './Assets/capas/36.svg';
import capa37 from './Assets/capas/37.svg';
import capa38 from './Assets/capas/38.svg';
import capa39 from './Assets/capas/39.svg';
import capa40 from './Assets/capas/40.svg';
import capa41 from './Assets/capas/41.svg';
import capa42 from './Assets/capas/42.svg';
import capa43 from './Assets/capas/43.svg';
import capa44 from './Assets/capas/44.svg';
import capa45 from './Assets/capas/45.svg';
import capa46 from './Assets/capas/46.svg';
import capa47 from './Assets/capas/47.svg';
import capa48 from './Assets/capas/48.svg';
import capa49 from './Assets/capas/49.svg';
import capa50 from './Assets/capas/50.svg';
import capa51 from './Assets/capas/51.svg';
import capa52 from './Assets/capas/52.svg';
import capa53 from './Assets/capas/53.svg';
import capa54 from './Assets/capas/54.svg';
import capa55 from './Assets/capas/55.svg';
import capa56 from './Assets/capas/56.svg';
import capa57 from './Assets/capas/57.svg';
import capa58 from './Assets/capas/58.svg';
import capa59 from './Assets/capas/59.svg';
import capa60 from './Assets/capas/60.svg';
import capa61 from './Assets/capas/61.svg';
import capa62 from './Assets/capas/62.svg';
import capa63 from './Assets/capas/63.svg';
import capa64 from './Assets/capas/64.svg';
import capa65 from './Assets/capas/65.svg';
import capa66 from './Assets/capas/66.svg';
import capa67 from './Assets/capas/67.svg';
import capa68 from './Assets/capas/68.svg';
import capa69 from './Assets/capas/69.svg';
import capa70 from './Assets/capas/70.svg';
import capa71 from './Assets/capas/71.svg';
import capa72 from './Assets/capas/72.svg';
import capa73 from './Assets/capas/73.svg';
import capa74 from './Assets/capas/74.svg';
import capa75 from './Assets/capas/75.svg';
import capa76 from './Assets/capas/76.svg';
import capa77 from './Assets/capas/77.svg';
import capa78 from './Assets/capas/78.svg';
import capa79 from './Assets/capas/79.svg';
import capa80 from './Assets/capas/80.svg';
import capa81 from './Assets/capas/81.svg';
import capa82 from './Assets/capas/82.svg';
import capa83 from './Assets/capas/83.svg';


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
  { id: 31, image: capa31 },
  { id: 32, image: capa32 },
  { id: 33, image: capa33 },
  { id: 34, image: capa34 },
  { id: 35, image: capa35 },
  { id: 36, image: capa36 },
  { id: 37, image: capa37 },
  { id: 38, image: capa38 },
  { id: 39, image: capa39 },
  { id: 40, image: capa40 },
  { id: 41, image: capa41 },
  { id: 42, image: capa42 },
  { id: 43, image: capa43 },
  { id: 44, image: capa44 },
  { id: 45, image: capa45 },
  { id: 46, image: capa46 },
  { id: 47, image: capa47 },
  { id: 48, image: capa48 },
  { id: 49, image: capa49 },
  { id: 50, image: capa50 },
  { id: 51, image: capa51 },
  { id: 52, image: capa52 },
  { id: 53, image: capa53 },
  { id: 54, image: capa54 },
  { id: 55, image: capa55 },
  { id: 56, image: capa56 },
  { id: 57, image: capa57 },
  { id: 58, image: capa58 },
  { id: 59, image: capa59 },
  { id: 60, image: capa60 },
  { id: 61, image: capa61 },
  { id: 62, image: capa62 },
  { id: 63, image: capa63 },
  { id: 64, image: capa64 },
  { id: 65, image: capa65 },
  { id: 66, image: capa66 },
  { id: 67, image: capa67 },
  { id: 68, image: capa68 },
  { id: 69, image: capa69 },
  { id: 70, image: capa70 },
  { id: 71, image: capa71 },
  { id: 72, image: capa72 },
  { id: 73, image: capa73 },
  { id: 74, image: capa74 },
  { id: 75, image: capa75 },
  { id: 76, image: capa76 },
  { id: 77, image: capa77 },
  { id: 78, image: capa78 },
  { id: 79, image: capa79 },
  { id: 80, image: capa80 },
  { id: 81, image: capa81 },
  { id: 82, image: capa82 },
  { id: 83, image: capa83 },
];
;

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
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]} 
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        className="capas-carousel-wrapper"
                        // Rolagem em blocos/páginas
                        breakpoints={{
                            320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
                            640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30 },
                            768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 40 },
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
                </div>

                {/* Texto instrutivo para mobile e tablet, escondido no desktop (lg:hidden) */}
                <p className="text-center text-gram-blue/80 italic mt-6 lg:hidden">
                    Arraste para conhecer
                </p>

                <div className="text-center mt-12">
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