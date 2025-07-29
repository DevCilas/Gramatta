import React from 'react';
import { Link } from 'react-router-dom';
import { HiDocumentText } from "react-icons/hi";

const TranscricaoPage = () => {
    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviço de Transcrição</h1>
                    <p className="text-xl text-gray-200">Convertemos seus manuscritos ou áudios em texto digital com precisão e cuidado.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction Text */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <div className="flex items-center gap-6 mb-6">
                            <HiDocumentText className="w-16 h-16 text-gram-blue flex-shrink-0" />
                            <h2 className="text-3xl font-bold text-gram-dark-blue">
                                A Ponte Entre a Ideia Falada e o Texto Escrito
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Toda grande obra literária começa com uma ideia. Muitas vezes, essa ideia nasce em uma palestra, sermão, entrevista ou até mesmo em anotações manuscritas. O serviço de transcrição da Grammata é o primeiro passo fundamental para transformar esse conteúdo bruto em um livro polido e profissional.
                            </p>
                            <p>
                                Nossa equipe especializada ouve atentamente cada palavra e transcreve com máxima fidelidade, preservando a voz e a intenção original do autor. Entendemos que a transcrição não é apenas um processo mecânico; é uma arte que exige atenção aos detalhes, compreensão do contexto e um profundo respeito pelo material de origem.
                            </p>
                            <p>
                                Seja a partir de um áudio, vídeo ou folhas de papel, nós garantimos que seu conteúdo seja digitalizado com precisão, criando uma base sólida sobre a qual construiremos as próximas etapas do processo editorial. Confie na Grammata para dar o primeiro passo na jornada de transformar suas palavras em um legado duradouro.
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

export default TranscricaoPage;