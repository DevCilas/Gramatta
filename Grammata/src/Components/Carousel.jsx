import React, { useState, useEffect } from 'react';

const launches = [
    {
        id: 1,
        title: 'O Sabor da Memória',
        description: 'Receitas de família que contam histórias e aquecem o coração.',
        image: 'https://via.placeholder.com/400x300/f7f7f7/243666?text=O+Sabor+da+Memória',
        buttonText: 'Saiba mais'
    },
    {
        id: 2,
        title: 'Crônicas Urbanas',
        description: 'Um olhar poético sobre o cotidiano das grandes cidades.',
        image: 'https://via.placeholder.com/400x300/f7f7f7/243666?text=Crônicas+Urbanas',
        buttonText: 'Saiba mais'
    },
    {
        id: 3,
        title: 'A Jornada do Escritor',
        description: 'Descubra os segredos da narrativa e crie histórias inesquecíveis.',
        image: 'https://via.placeholder.com/400x300/f7f7f7/243666?text=A+Jornada+do+Escritor',
        buttonText: 'Saiba mais'
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Create infinite slides by duplicating the original array many times
    const infiniteSlides = [...launches, ...launches, ...launches, ...launches, ...launches, ...launches, ...launches, ...launches, ...launches, ...launches];

    const nextSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentIndex(prevIndex => prevIndex + 1);
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentIndex(prevIndex => prevIndex - 1);
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    // Initialize to middle section
    useEffect(() => {
        setCurrentIndex(launches.length * 5); // Start in the middle of the duplicated array
    }, []);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-cream-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gram-dark-blue mb-4">
                        Lançamentos
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conheça nossas últimas publicações que estão encantando leitores.
                    </p>
                </div>

                {/* Desktop Carousel with Navigation */}
                <div className="hidden md:flex items-center gap-2 max-w-6xl mx-auto">
                    {/* Left Navigation Arrow */}
                    <button
                        onClick={prevSlide}
                        className="bg-white hover:bg-gray-50 text-gram-dark-blue p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Carousel Content */}
                    <div className="flex-1 relative overflow-hidden rounded-lg shadow-xl">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {infiniteSlides.map((launch, index) => (
                                <div key={`${launch.id}-${index}`} className="w-full flex-shrink-0">
                                    <div className="bg-white p-8 md:p-12">
                                        <div className="flex flex-col lg:flex-row items-center gap-8">
                                            {/* Image */}
                                            <div className="w-full lg:w-1/2">
                                                <img 
                                                    src={launch.image} 
                                                    alt={launch.title}
                                                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                                                />
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="w-full lg:w-1/2 text-center lg:text-left">
                                                <h3 className="text-2xl md:text-3xl font-bold text-gram-dark-blue mb-4">
                                                    {launch.title}
                                                </h3>
                                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                                    {launch.description}
                                                </p>
                                                <button className="bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
                                                    {launch.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={nextSlide}
                        className="bg-white hover:bg-gray-50 text-gram-dark-blue p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Scrollable Carousel */}
                <div className="md:hidden max-w-4xl mx-auto">
                    <div className="overflow-x-auto overflow-y-visible scrollbar-hide touch-pan-x">
                        <div className="flex gap-4 pb-4" style={{ width: `${launches.length * 100}%` }}>
                            {launches.map((launch) => (
                                <div key={launch.id} className="w-full flex-shrink-0" style={{ width: `${100 / launches.length}%` }}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <div className="flex flex-col items-center gap-6">
                                            {/* Image */}
                                            <div className="w-full">
                                                <img 
                                                    src={launch.image} 
                                                    alt={launch.title}
                                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                                />
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="w-full text-center">
                                                <h3 className="text-xl font-bold text-gram-dark-blue mb-3">
                                                    {launch.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                    {launch.description}
                                                </p>
                                                <button className="bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300 text-sm">
                                                    {launch.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel; 