import React from "react";

// Import book cover images
import capaAbertaPedro from "./Assets/books/Capa aberta pedro_Prancheta 1.jpg";
import capaAberta from "./Assets/books/CAPA ABERTA_Prancheta 1.jpg";
import capaCompaixa from "./Assets/books/Capa da Compaixa_Prancheta 1.jpg";

const tastingBooks = [
    {
        id: 1,
        title: "Amostra do Livro 1",
        author: "Autor Convidado",
        description: "Uma amostra especial dos nossos melhores trabalhos editoriais.",
        cover: capaAbertaPedro
    },
    {
        id: 2,
        title: "Amostra do Livro 2", 
        author: "Autor Convidado",
        description: "Descubra a qualidade da nossa edição através desta seleção.",
        cover: capaAberta
    },
    {
        id: 3,
        title: "Amostra do Livro 3",
        author: "Autor Convidado", 
        description: "Uma experiência editorial completa em formato de amostra.",
        cover: capaCompaixa
    },
    
];

const TastingSelection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-cream-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gram-dark-blue mb-6">
                            Seleção degustação
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Conheça alguns dos nossos trabalhos através desta seleção especial de livros.
                        </p>
                    </div>

                    {/* Books Grid - Centered for 4 books */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 max-w-6xl">
                            {tastingBooks.map((book) => (
                                <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    {/* Book Cover - 9:16 aspect ratio */}
                                    <div className="relative w-full" style={{ paddingBottom: '177.78%' }}> {/* 16/9 = 1.7778 */}
                                        <img 
                                            src={book.cover} 
                                            alt={book.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    {/* Book Info */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-gram-dark-blue mb-2">
                                            {book.title}
                                        </h3>
                                        <p className="text-gram-blue font-medium mb-2 text-sm">
                                            {book.author}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-sm mb-3">
                                            {book.description}
                                        </p>
                                        
                                        {/* Action Button */}
                                        <button className="w-full bg-gram-green text-gram-dark-blue font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 text-sm flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Baixar ODF
                                        </button>
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

export default TastingSelection; 