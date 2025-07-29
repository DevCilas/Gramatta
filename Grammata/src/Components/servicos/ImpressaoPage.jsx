import React from 'react';
import { Link } from 'react-router-dom';
import { HiTruck } from "react-icons/hi";

const ImpressaoPage = () => {
    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressão e Entrega</h1>
                    <p className="text-xl text-gray-200">Cuidamos da produção gráfica e da logística para que seu livro chegue até você.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction Text */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <div className="flex items-center gap-6 mb-6">
                            <HiTruck className="w-16 h-16 text-gram-blue flex-shrink-0" />
                            <h2 className="text-3xl font-bold text-gram-dark-blue">
                                Do Digital ao Físico: Materializando Seu Sonho
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                A etapa final da jornada de publicação é talvez a mais gratificante: ver seu livro ganhar vida como um objeto físico. O serviço de Impressão e Entrega da Grammata garante que a qualidade do produto final seja tão impecável quanto o conteúdo que ele carrega.
                            </p>
                            <p>
                                Trabalhamos com gráficas parceiras de alta confiança para oferecer as melhores opções de papel, acabamento e tipo de capa, adequando a produção às necessidades e ao orçamento de cada autor. Supervisionamos todo o processo para assegurar que cada exemplar seja impresso com cores vibrantes, texto nítido e encadernação durável.
                            </p>
                            <p>
                                Além da produção, gerenciamos toda a logística de entrega, garantindo que os livros cheguem com segurança ao autor ou aos seus leitores. Com a Grammata, você tem a tranquilidade de saber que seu projeto está em boas mãos, desde a primeira palavra até o livro em suas mãos.
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

export default ImpressaoPage;