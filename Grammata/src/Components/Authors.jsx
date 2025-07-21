import React, { useState, useRef, useEffect } from "react";

// Import author images
import AdrianoSantos from "./Assets/authors/Adriano Santos.svg";
import Atila from "./Assets/authors/Atila.svg";
import CarlosFilho from "./Assets/authors/Carlos Filho.svg";
import Djoel from "./Assets/authors/Djoel.svg";
import ElmirRibeiro from "./Assets/authors/Elmir Ribeiro.svg";
import ElyRobert from "./Assets/authors/Ely Robert.svg";
import HelioRibeiro from "./Assets/authors/Hélio Ribeiro.svg";
import IsaacDias from "./Assets/authors/Isaac Dias.svg";
import JosianeAlmeida from "./Assets/authors/Josiane Almeida.svg";
import KellySilva from "./Assets/authors/Kelly Silva.svg";
import LucianoCosta from "./Assets/authors/Luciano Costa.svg";
import Marcelo from "./Assets/authors/Marcelo.svg";
import Mazinho from "./Assets/authors/Mazinho.svg";
import Rita from "./Assets/authors/Rita.svg";
import Shirizu from "./Assets/authors/Shirizu.svg";

const authors = [
    { id: 1, name: "Luciano Costa", image: LucianoCosta },
    { id: 2, name: "Marcelo", image: Marcelo },
    { id: 3, name: "Mazinho", image: Mazinho },
    { id: 4, name: "Rita", image: Rita },
    { id: 5, name: "Shirizu", image: Shirizu },
    { id: 6, name: "Adriano Santos", image: AdrianoSantos },
    { id: 7, name: "Atila", image: Atila },
    { id: 8, name: "Djoel", image: Djoel },
    { id: 9, name: "Elmir Ribeiro", image: ElmirRibeiro },
    { id: 10, name: "Ely Robert", image: ElyRobert },
    { id: 11, name: "Hélio Ribeiro", image: HelioRibeiro },
    { id: 12, name: "Isaac Dias", image: IsaacDias },
    { id: 13, name: "Kelly Silva", image: KellySilva },
    { id: 14, name: "Josiane Almeida", image: JosianeAlmeida },
    { id: 15, name: "Carlos Filho", image: CarlosFilho },
];

// Duplicate authors array for infinite scroll
const repeatCount = 5;
const infiniteAuthors = Array.from({ length: repeatCount }).flatMap(() => authors);
const middleIndex = Math.floor(infiniteAuthors.length / 2);

const Authors = () => {
    const scrollContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // On mount, scroll to the middle set
    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) {
            setTimeout(() => {
                const cardWidth = isMobile ? 80 : 112; // px, matches style width
                el.scrollLeft = cardWidth * middleIndex;
            }, 100);
        }
    }, [isMobile]);

    // Infinite scroll logic
    const handleScroll = () => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const cardWidth = isMobile ? 80 : 112;
        const totalCards = infiniteAuthors.length;
        const visibleCards = isMobile ? 1 : 5;
        const maxScroll = cardWidth * (totalCards - visibleCards);
        if (el.scrollLeft <= cardWidth) {
            // Near start, reset to middle
            el.scrollLeft = cardWidth * (middleIndex - visibleCards);
        } else if (el.scrollLeft >= maxScroll - cardWidth) {
            // Near end, reset to middle
            el.scrollLeft = cardWidth * (middleIndex - visibleCards);
        }
    };

    const scrollLeft = () => {
        const el = scrollContainerRef.current;
        if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const el = scrollContainerRef.current;
        if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gram-dark-blue mb-4 md:mb-6">
                            Nossos autores
                        </h2>
                    </div>

                    {/* Simple Horizontal Scroll for Mobile */}
                    <div className="md:hidden">
                        <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef} onScroll={handleScroll} style={{ scrollBehavior: 'smooth' }}>
                            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                                {infiniteAuthors.map((author, idx) => (
                                    <div key={idx + '-' + author.id} className="flex flex-col items-center flex-shrink-0" style={{ width: '80px' }}>
                                        {/* Author Image */}
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-300">
                                            <img 
                                                src={author.image} 
                                                alt={author.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* Author Name */}
                                        <h3 className="text-xs font-medium text-gram-dark-blue text-center">
                                            {author.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop Horizontal Scroll with Navigation */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Navigation Buttons */}
                            <button 
                                onClick={scrollLeft}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 bg-gram-dark-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button 
                                onClick={scrollRight}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-20 w-12 h-12 bg-gram-dark-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Scrollable Container with Gradients */}
                            <div className="relative mx-16">
                                {/* Gradient Overlays */}
                                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gram-white via-gram-white/80 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gram-white via-gram-white/80 to-transparent z-10 pointer-events-none"></div>
                                
                                {/* Scrollable Content */}
                                <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef} onScroll={handleScroll} style={{ scrollBehavior: 'smooth' }}>
                                    <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                                        {infiniteAuthors.map((author, idx) => (
                                            <div key={idx + '-' + author.id} className="flex flex-col items-center flex-shrink-0">
                                                {/* Author Image */}
                                                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 border-2 border-gray-300 hover:border-gram-green transition-all duration-300 hover:shadow-lg hover:rotate-3">
                                                    <img 
                                                        src={author.image} 
                                                        alt={author.name}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                {/* Author Name */}
                                                <h3 className="text-sm lg:text-base font-medium text-gram-dark-blue text-center transition-all duration-300 hover:text-gram-blue">
                                                    {author.name}
                                                </h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authors; 