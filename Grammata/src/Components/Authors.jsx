import React, { useState, useRef } from "react";

// Import author images
import lucianoCosta from "./Assets/authors/eSCRITOR lUCIANO cOSTA.jpg";
import marcelo from "./Assets/authors/ESCRITOR MARCELO.jpeg";
import mazinho from "./Assets/authors/Escritor Mazinho.jpg";
import moises from "./Assets/authors/Escritor Moisés.jpeg";
import rita from "./Assets/authors/Escritor Rita.JPG";
import shirizu from "./Assets/authors/escritor shirizu.jpg";
import adrianoSantos from "./Assets/authors/ESCRITOR ADRIANO SANTOS.jpg";
import andreFarjao from "./Assets/authors/ESCRITOR ANDRÉ FARJÃO.jpg";
import atila from "./Assets/authors/Escritor Atila.jpg";
import djoel from "./Assets/authors/ESCRITOR DJOEL.jpg";
import elmirRibeiro from "./Assets/authors/ESCRITOR ELMIR RIBEIRO.JPEG";
import elyRobert from "./Assets/authors/Escritor Ely Robert.jpg";
import fabioG from "./Assets/authors/ESCRITOR FÁBIO G..jpg";
import helioRibeiro from "./Assets/authors/Escritor Helio Ribeiro.jpg";
import isaacDias from "./Assets/authors/Escritor Isaac Dias.jpg";

const authors = [
    { id: 1, name: "Luciano Costa", image: lucianoCosta },
    { id: 2, name: "Marcelo", image: marcelo },
    { id: 3, name: "Mazinho", image: mazinho },
    { id: 4, name: "Moisés", image: moises },
    { id: 5, name: "Rita", image: rita },
    { id: 6, name: "Shirizu", image: shirizu },
    { id: 7, name: "Adriano Santos", image: adrianoSantos },
    { id: 8, name: "André Farjão", image: andreFarjao },
    { id: 9, name: "Atila", image: atila },
    { id: 10, name: "Djoel", image: djoel },
    { id: 11, name: "Elmir Ribeiro", image: elmirRibeiro },
    { id: 12, name: "Ely Robert", image: elyRobert },
    { id: 13, name: "Fábio G.", image: fabioG },
    { id: 14, name: "Hélio Ribeiro", image: helioRibeiro },
    { id: 15, name: "Isaac Dias", image: isaacDias },
];

const Authors = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
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
                        <div className="overflow-x-auto scrollbar-hide">
                            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                                {authors.map((author) => (
                                    <div key={author.id} className="flex flex-col items-center flex-shrink-0" style={{ width: '80px' }}>
                                        {/* Author Image */}
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-300">
                                            <img 
                                                src={author.image} 
                                                alt={author.name}
                                                className="w-full h-full object-cover"
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
                                <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef}>
                                    <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                                        {authors.map((author) => (
                                            <div key={author.id} className="flex flex-col items-center flex-shrink-0">
                                                {/* Author Image */}
                                                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 border-2 border-gray-300 hover:border-gram-green transition-all duration-300 hover:shadow-lg hover:rotate-3">
                                                    <img 
                                                        src={author.image} 
                                                        alt={author.name}
                                                        className="w-full h-full object-cover"
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