import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import all miolo images
import miolo1 from './Assets/miolo/MIOLO1.jpeg';
import miolo2 from './Assets/miolo/MIOLO2.jpeg';
import miolo3 from './Assets/miolo/MIOLO3.jpeg';
import miolo4 from './Assets/miolo/MIOLO4.png';
import miolo5 from './Assets/miolo/MIOLO5.png';
import miolo6 from './Assets/miolo/MIOLO6.png';
import miolo7 from './Assets/miolo/MIOLO7.png';
import miolo8 from './Assets/miolo/MIOLO8.png';
import miolo9 from './Assets/miolo/MIOLO9.png';
import miolo10 from './Assets/miolo/MIOLO10.png';
import miolo11 from './Assets/miolo/MIOLO11.png';
import miolo12 from './Assets/miolo/MIOLO12.png';
import miolo13 from './Assets/miolo/MIOLO13.jpeg';
import miolo14 from './Assets/miolo/MIOLO14.jpeg';

const mioloExamples = [
    { id: 1, image: miolo1, title: "Abertura de Capítulos", description: "Layout profissional para início de capítulos" },
    { id: 2, image: miolo2, title: "Sumário", description: "Índice organizado e bem estruturado" },
    { id: 3, image: miolo3, title: "Folha de Rosto", description: "Página de título elegante" },
    { id: 4, image: miolo4, title: "Diagramação 1", description: "Layout com destaque para termos bíblicos" },
    { id: 5, image: miolo5, title: "Diagramação 2", description: "Estrutura hierárquica clara" },
    { id: 6, image: miolo6, title: "Diagramação 3", description: "Organização visual moderna" },
    { id: 7, image: miolo7, title: "Leitura", description: "Texto bem distribuído e legível" },
    { id: 8, image: miolo8, title: "Capítulo", description: "Abertura de capítulo com estilo" },
    { id: 9, image: miolo9, title: "Miolo com Foto", description: "Integração de texto e imagem" },
    { id: 10, image: miolo10, title: "Layout Acadêmico", description: "Formatação para textos técnicos" },
    { id: 11, image: miolo11, title: "Design Editorial", description: "Composição visual profissional" },
    { id: 12, image: miolo12, title: "Tipografia", description: "Hierarquia tipográfica bem definida" },
    { id: 13, image: miolo13, title: "Espaçamento", description: "Brancos e margens equilibrados" },
    { id: 14, image: miolo14, title: "Composição", description: "Harmonia entre elementos visuais" },
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
                    {/* Introduction Text */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-gram-dark-blue mb-6">
                            A Importância da Diagramação na Construção da Identidade Editorial
                        </h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Em um universo literário cada vez mais visual e competitivo, a capa de um livro deixou de ser apenas uma proteção física para se tornar uma porta de entrada simbólica para o conteúdo que habita suas páginas. É a primeira impressão, o convite silencioso ao leitor e, muitas vezes, o fator decisivo entre o permanecer na estante ou ser levado para casa.
                            </p>
                            <p>
                                Na Grammata Publicações, compreendemos profundamente essa importância e levamos a sério cada etapa do processo de criação da capa. Contamos com uma equipe formada por três grandes capistas, profissionais que unem sensibilidade artística, domínio técnico e visão editorial. Estabelecemos um compromisso com a excelência e com o cuidado estético que cada obra merece. Nossa prioridade é representar com fidelidade a identidade particular de cada livro, equilibrando os elementos gráficos com a essência da narrativa.
                            </p>
                            <p>
                                Mas nosso olhar editorial não se limita à superfície. A diagramação das obras que publicamos é um espetáculo à parte — moderna, profissional e cuidadosamente planejada para encantar. Na Grammata, entendemos que a diagramação é muito mais do que estética visual: ela é o fio condutor da leitura, o suporte que organiza títulos, imagens e textos de maneira harmoniosa. O processo é realizado com base em hierarquias bem definidas por nossos editores e diretores de arte, respeitando o ritmo e a clareza que cada leitor merece.
                            </p>
                            <p>
                                A qualidade de nossas diagramações transforma o ato de ler em uma experiência visual envolvente e funcional. Quando um livro possui uma diagramação bem estruturada, ele não apenas encanta — ele comunica melhor. Isso é essencial, especialmente em peças gráficas como folders informativos, onde uma diagramação mal executada pode dificultar a compreensão e comprometer o propósito da publicação.
                            </p>
                            <p>
                                Na Grammata, tratamos cada projeto como uma expressão de criatividade e propósito. A capa e a diagramação caminham juntas para transformar livros em obras memoráveis. Se você, autor, deseja conhecer nossas diagramações reais e ver como elas valorizam cada conteúdo, procure pela aba Diagramação.
                            </p>
                        </div>
                    </div>

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
                            &times;
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