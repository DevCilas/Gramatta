import React, { useState, useEffect, useRef } from 'react';

// Import release images
import slidequalocaminhocerto from './Assets/releases/slidequalocaminhocerto.svg';
import slideporquechoras from './Assets/releases/slideporquechoras.svg';
import slidepregandocomproposito from './Assets/releases/slidepregandocomproposito.svg';

const launches = [
    {
        id: 1,
        title: 'Qual o caminho certo para uma vida plena?',
        description: 'Uma conexão divina através da oração',
        image: slidequalocaminhocerto,
        buttonText: 'Saiba mais'
    },
    {
        id: 2,
        title: 'Por que choras?',
        description: 'Como encontrar a paz em meio ao caos',
        image: slideporquechoras,
        buttonText: 'Saiba mais'
    },
    {
        id: 3,
        title: 'Pregando com propósito',
        description: 'Um guia indispensável para todos que foram chamados a proclamar a palavra com poder, propósito e clareza',
        image: slidepregandocomproposito,
        buttonText: 'Saiba mais'
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoScrollRef = useRef();
    const userInteractedRef = useRef(false);
    const currentIndexRef = useRef(currentIndex);
    const mobileScrollRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

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

    // Keep a ref to the latest currentIndex
    useEffect(() => {
        currentIndexRef.current = currentIndex;
    }, [currentIndex]);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Initialize to middle section
    useEffect(() => {
        setCurrentIndex(launches.length * 5); // Start in the middle of the duplicated array
    }, []);

    // Auto-scroll effect (set up ONCE)
    useEffect(() => {
        if (isMobile) {
            // Mobile: scroll the container horizontally
            let mobileIndex = 0;
            autoScrollRef.current = setInterval(() => {
                const el = mobileScrollRef.current;
                if (!el) return;
                if (!userInteractedRef.current) {
                    mobileIndex = (mobileIndex + 1) % launches.length;
                    const cardWidth = el.scrollWidth / launches.length;
                    el.scrollTo({ left: cardWidth * mobileIndex, behavior: 'smooth' });
                } else {
                    userInteractedRef.current = false;
                }
            }, 5000);
            return () => clearInterval(autoScrollRef.current);
        } else {
            // Desktop: use index
            autoScrollRef.current = setInterval(() => {
                if (!userInteractedRef.current) {
                    setCurrentIndex(idx => idx + 1);
                } else {
                    userInteractedRef.current = false;
                }
            }, 5000);
            return () => clearInterval(autoScrollRef.current);
        }
    }, [isMobile]);

    // Handler to mark user interaction
    const handleUserInteraction = (action) => {
        userInteractedRef.current = true;
        action();
    };

    // For mobile, allow swipe/scroll interaction
    useEffect(() => {
        const el = mobileScrollRef.current;
        if (!el) return;
        let isTouching = false;
        const onTouchStart = () => { isTouching = true; };
        const onTouchEnd = () => {
            if (isTouching) {
                userInteractedRef.current = true;
                isTouching = false;
            }
        };
        el.addEventListener('touchstart', onTouchStart);
        el.addEventListener('touchend', onTouchEnd);
        return () => {
            el.removeEventListener('touchstart', onTouchStart);
            el.removeEventListener('touchend', onTouchEnd);
        };
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
                        onClick={() => handleUserInteraction(prevSlide)}
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
                                    <div className="bg-white p-4 md:p-8">
                                        <div className="flex flex-col lg:flex-row items-center gap-8">
                                            {/* Image */}
                                            <div className="w-full lg:w-1/1">
                                                <img 
                                                    src={launch.image} 
                                                    alt={launch.title}
                                                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                                                    loading="lazy"
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
                        onClick={() => handleUserInteraction(nextSlide)}
                        className="bg-white hover:bg-gray-50 text-gram-dark-blue p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Scrollable Carousel with Snap */}
                <div className="md:hidden max-w-4xl mx-auto">
                    <div ref={mobileScrollRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                        <div className="flex gap-4 pb-4" style={{ width: `${launches.length * 100}%` }}>
                            {launches.map((launch) => (
                                <div key={launch.id} className="w-full flex-shrink-0 snap-center" style={{ width: `${100 / launches.length}%` }}>
                                    <div className="bg-white p-4 rounded-lg shadow-lg h-full min-h-[350px] flex flex-col carousel-card">
                                        <div className="flex flex-col items-center gap-4 flex-grow">
                                            {/* Image */}
                                            <div className="w-full flex-shrink-0">
                                                <img 
                                                    src={launch.image} 
                                                    alt={launch.title}
                                                    className="w-full h-56 object-cover rounded-lg shadow-md"
                                                    loading="lazy"
                                                />
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="w-full text-center flex-grow flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gram-dark-blue mb-2">
                                                        {launch.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                                        {launch.description}
                                                    </p>
                                                </div>
                                                <button className="bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300 text-sm mt-auto">
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