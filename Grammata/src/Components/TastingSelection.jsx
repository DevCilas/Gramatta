import React from "react";

// Import actual book cover images
import coverVidaSansao from "./Assets/books-pdf/avidadesansao.png";
import coverTraducoesBiblia from "./Assets/books-pdf/astraducoesdabiblia.png";
import coverMelhorarEBD from "./Assets/books-pdf/comomelhorarumaescoladominical.png";
import coverMaoDireitaDeus from "./Assets/books-pdf/amaodireitadedeus.png";
import coverComentarioRute from "./Assets/books-pdf/rute.png";
import coverUmaCoisaFaco from "./Assets/books-pdf/umacoisafaco.png";

// Import PDF files
import pdfVidaSansao from "./Assets/books-pdf/A Vida de Sansão Obra Completa Digital.pdf";
import pdfTraducoesBiblia from "./Assets/books-pdf/As Traduções da Bíblia Uma obra do Professor Jean Carlos A.pdf";
import pdfMelhorarEBD from "./Assets/books-pdf/Como Melhorar uma EBD livro digital.pdf";
import pdfMaoDireitaDeus from "./Assets/books-pdf/Livro a Mão direita de Deus - Degustação.pdf";
import pdfComentarioRute from "./Assets/books-pdf/Novíssimo Comentário Exositivo e Exegético de Rute Versão Digital.pdf";
import pdfUmaCoisaFaco from "./Assets/books-pdf/Uma coisa faço degustação do José Aparecido.pdf";

const tastingBooks = [
    {
        id: 1,
        title: "A Vida de Sansão - Obra Completa Digital",
        author: "Jean Carlos",
        description: "Uma obra completa sobre a vida de Sansão, explorando sua história bíblica de forma detalhada e envolvente.",
        cover: coverVidaSansao,
        pdf: pdfVidaSansao
    },
    {
        id: 2,
        title: "As Traduções da Bíblia",
        author: "Jean Carlos",
        description: "Uma obra fundamental sobre as traduções bíblicas, sua história e importância para o estudo das escrituras.",
        cover: coverTraducoesBiblia,
        pdf: pdfTraducoesBiblia
    },
    {
        id: 3,
        title: "Como Melhorar uma escola dominical",
        author: "Jean Carlos",
        description: "Um guia prático para aprimorar o ensino na Escola Bíblica Dominical com metodologias eficazes.",
        cover: coverMelhorarEBD,
        pdf: pdfMelhorarEBD
    },
    {
        id: 4,
        title: "A Mão Direita de Deus - Degustação",
        author: "Gerson Luis Silva",
        description: "Uma degustação especial deste livro que explora a mão direita de Deus em nossas vidas.",
        cover: coverMaoDireitaDeus,
        pdf: pdfMaoDireitaDeus
    },
    {
        id: 5,
        title: "Novíssimo Comentário Expositivo e Exegético de Rute",
        author: "Jean Carlos",
        description: "Um comentário detalhado e exegético do livro de Rute, versão digital completa.",
        cover: coverComentarioRute,
        pdf: pdfComentarioRute
    },
    {
        id: 6,
        title: "Uma Coisa Faço - Degustação",
        author: "José Aparecido",
        description: "Uma degustação especial da obra de José Aparecido, explorando temas profundos da fé.",
        cover: coverUmaCoisaFaco,
        pdf: pdfUmaCoisaFaco
    }
];

const TastingSelection = () => {
    const handleDownload = (pdfUrl, title) => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${title}.pdf`;
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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

                    {/* Books Grid - Updated for 6 books */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                            {tastingBooks.map((book) => (
                                <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                    {/* Book Cover - 9:16 aspect ratio */}
                                    <div className="relative w-full" style={{ paddingBottom: '177.78%' }}> {/* 16/9 = 1.7778 */}
                                        <img 
                                            src={book.cover} 
                                            alt={book.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    {/* Book Info - Flex container to push button to bottom */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-bold text-gram-dark-blue mb-2">
                                                {book.title}
                                            </h3>
                                            <p className="text-gram-blue font-medium mb-2 text-sm">
                                                {book.author}
                                            </p>
                                            <p className="text-gray-600 leading-relaxed text-sm mb-3">
                                                {book.description}
                                            </p>
                                        </div>
                                        
                                        {/* Action Button - Always at bottom */}
                                        <button 
                                            onClick={() => handleDownload(book.pdf, book.title)}
                                            className="w-full bg-gram-green text-gram-dark-blue font-medium py-3 px-4 rounded-lg hover:bg-gram-dark-blue hover:text-white hover:scale-105 transform transition-all duration-300 ease-in-out text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 mt-auto"
                                        >
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Baixar PDF
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