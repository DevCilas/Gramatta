import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import all miolo images
import miolo1 from './Assets/miolo/1.svg';
import miolo2 from './Assets/miolo/2.svg';
import miolo3 from './Assets/miolo/3.svg';
import miolo4 from './Assets/miolo/4.svg';
import miolo5 from './Assets/miolo/5.svg';
import miolo6 from './Assets/miolo/6.svg';
import miolo7 from './Assets/miolo/7.svg';
import miolo8 from './Assets/miolo/8.svg';
import miolo9 from './Assets/miolo/9.svg';
import miolo10 from './Assets/miolo/10.svg';
import miolo11 from './Assets/miolo/11.svg';
import miolo12 from './Assets/miolo/12.svg';
import miolo13 from './Assets/miolo/13.svg';
import miolo14 from './Assets/miolo/14.svg';
import miolo15 from './Assets/miolo/15.svg';
import miolo16 from './Assets/miolo/16.svg';
import miolo17 from './Assets/miolo/17.svg';
import miolo18 from './Assets/miolo/18.svg';
import miolo19 from './Assets/miolo/19.svg';
import miolo20 from './Assets/miolo/20.svg';
import miolo21 from './Assets/miolo/21.svg';
import miolo22 from './Assets/miolo/22.svg';
import miolo23 from './Assets/miolo/23.svg';
import miolo24 from './Assets/miolo/24.svg';
import miolo25 from './Assets/miolo/25.jpg';
import miolo26 from './Assets/miolo/26.jpg';
import miolo27 from './Assets/miolo/27.jpg';
import miolo28 from './Assets/miolo/28.jpg';
import miolo29 from './Assets/miolo/29.jpg';
import miolo30 from './Assets/miolo/30.jpg';
import miolo31 from './Assets/miolo/31.jpg';
import miolo32 from './Assets/miolo/32.jpg';
import miolo33 from './Assets/miolo/33.jpg';
import miolo34 from './Assets/miolo/34.jpg';
import miolo35 from './Assets/miolo/35.jpg';
import miolo36 from './Assets/miolo/36.jpg';
import miolo37 from './Assets/miolo/37.jpg';
import miolo38 from './Assets/miolo/38.jpg';
import miolo39 from './Assets/miolo/39.jpg';
import miolo40 from './Assets/miolo/40.jpg';
import miolo41 from './Assets/miolo/41.jpg';
import miolo42 from './Assets/miolo/42.jpg';

const mioloExamples = [
    { id: 1, image: miolo1, title: "Índice ", description: "Layout profissional para organização dos capítulos" },
    { id: 2, image: miolo2, title: "Capítulo", description: "Abertura de capítulo com estilo" },
    { id: 3, image: miolo3, title: "Folha de Rosto", description: "Página de título elegante" },
    { id: 4, image: miolo4, title: "Diagramação 1", description: "Layout com destaque para termos bíblicos" },
    { id: 5, image: miolo5, title: "Composição", description: "Abertura de capítulo com imagem" },
    { id: 6, image: miolo6, title: "Diagramação 2", description: "Organização visual moderna" },
    { id: 7, image: miolo7, title: "Sumário", description: "Descrição intuitiva e coerente" },
    { id: 8, image: miolo8, title: "Sumário", description: "Índice organizado e bem estruturado" },
    { id: 9, image: miolo9, title: "Sumário", description: "Capítulos e conteúdo" },
    { id: 10, image: miolo10, title: "Layout Acadêmico", description: "Formatação para textos técnicos" },
    { id: 11, image: miolo11, title: "Design Editorial", description: "Composição visual profissional" },
    { id: 12, image: miolo12, title: "Tipografia", description: "Hierarquia tipográfica bem definida" },
    { id: 13, image: miolo13, title: "Espaçamento", description: "Brancos e margens equilibrados" },
    { id: 14, image: miolo14, title: "Composição", description: "Margens bem definidas" },
    { id: 15, image: miolo15, title: "Abertura de Capítulos", description: "Destaque na letra inicial" },
    { id: 16, image: miolo16, title: "Composição", description: "Harmonia entre elementos visuais" },
    { id: 17, image: miolo17, title: "Imagem", description: "Imagem alinhada ao contexto" },
    { id: 18, image: miolo18, title: "Composição", description: "Destaque para textos bíblicos" },
    { id: 19, image: miolo19, title: "Layout Acadêmico", description: "Visual limpo e direcional" },
    { id: 20, image: miolo20, title: "Design Editorial", description: "Arte profissional e conectada" },
    { id: 21, image: miolo21, title: "Sumário", description: "Capítulos e conteúdo" },
    { id: 22, image: miolo22, title: "Diagramação", description: "Texto em inglês" },
    { id: 23, image: miolo23, title: "Composição", description: "Harmonia entre elementos visuais" },
    { id: 24, image: miolo24, title: "Elementos Visuais", description: "Elementos visuais que contribuem na experiência" },
    { id: 25, image: miolo25, title: "Página de Texto", description: "Organização simples e fluida" },
    { id: 26, image: miolo26, title: "Estrutura Visual", description: "Composição equilibrada e clara" },
    { id: 27, image: miolo27, title: "Design Básico", description: "Apresentação objetiva e limpa" },
    { id: 28, image: miolo28, title: "Página Ilustrada", description: "Integração de elementos visuais e texto" },
    { id: 29, image: miolo29, title: "Diagramação Linear", description: "Alinhamento consistente e bem distribuído" },
    { id: 30, image: miolo30, title: "Formatação Simples", description: "Layout direto e legível" },
    { id: 31, image: miolo31, title: "Seção Visual", description: "Disposição harmoniosa de conteúdo" },
    { id: 32, image: miolo32, title: "Página Clássica", description: "Composição tradicional de leitura" },
    { id: 33, image: miolo33, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 34, image: miolo34, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 35, image: miolo35, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 36, image: miolo36, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 37, image: miolo37, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 38, image: miolo38, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 39, image: miolo39, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 40, image: miolo40, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 41, image: miolo41, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
    { id: 42, image: miolo42, title: "Exemplo de Página", description: "Composição genérica de diagramação" },
];


const Miolo = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (miolo) => {
        setSelectedImage(miolo);
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
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
    };

    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Diagramação</h1>
                    <p className="text-xl text-gray-200">Conheça nossos modelos de layout interno</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Bloco de Texto Introdutório REMOVIDO */}

                    {/* Miolo Examples Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mioloExamples.map((miolo) => (
                            <div key={miolo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => openModal(miolo)}>
                                <div className="relative">
                                    <img 
                                        src={miolo.image} 
                                        alt={miolo.title}
                                        className="w-full h-80 object-cover"
                                        onError={handleImageError}
                                        loading="lazy"
                                    />
                                    <div className="hidden w-full h-80 bg-gray-200 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">📄</div>
                                            <p className="text-gray-600">{miolo.title}</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <h3 className="text-white font-bold text-lg mb-1">
                                            {miolo.title}
                                        </h3>
                                        <p className="text-white/90 text-sm">
                                            {miolo.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Back to Home Button */}
                    <div className="text-center mt-12">
                        <Link 
                            to="/"
                            className="inline-block bg-gram-dark-blue hover:bg-gram-blue text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                        >
                            Voltar ao Início
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal/Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={handleModalClick}
                >
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
                            aria-label="Fechar"
                        >
                            ×
                        </button>
                        
                        {/* Image */}
                        <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            loading="lazy"
                        />
                        
                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                            <h3 className="text-white font-bold text-2xl mb-2">
                                {selectedImage.title}
                            </h3>
                            <p className="text-white/90 text-lg">
                                {selectedImage.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Miolo;