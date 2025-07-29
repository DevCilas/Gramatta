import React from 'react';
import { Link } from 'react-router-dom';
import { HiViewBoards } from "react-icons/hi";

const DiagramacaoPage = () => {
    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviço de Diagramação</h1>
                    <p className="text-xl text-gray-200">Criamos um layout profissional e atraente para o miolo do seu livro.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction Text */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <div className="flex items-center gap-6 mb-6">
                            <HiViewBoards className="w-16 h-16 text-gram-blue flex-shrink-0" />
                            <h2 className="text-3xl font-bold text-gram-dark-blue">
                                A Arquitetura da Experiência de Leitura
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Se a capa é o rosto de um livro, a diagramação é seu esqueleto. Uma boa diagramação (ou layout do miolo) é invisível para o leitor, guiando seus olhos de forma natural e confortável através das páginas. É ela que transforma um bloco de texto em uma experiência de leitura agradável e imersiva.
                            </p>
                            <p>
                                Na Grammata, nossos designers editoriais são especialistas em criar layouts que combinam estética e funcionalidade. Cuidamos de cada detalhe: a escolha da tipografia, o espaçamento entre linhas e parágrafos, as margens, a hierarquia de títulos e a inserção de imagens. Tudo é planejado para refletir o gênero e o tom da obra, valorizando o conteúdo.
                            </p>
                            <p>
                                Um livro com diagramação profissional não apenas parece mais credível, mas também torna a leitura mais fluida e prazerosa. Permita que nossa expertise em design editorial transforme seu manuscrito em uma obra de arte visualmente harmoniosa e convidativa.
                            </p>
                        </div>
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
        </div>
    );
};

export default DiagramacaoPage;