import React from 'react';
import { Link } from 'react-router-dom';
import { HiSearch } from "react-icons/hi";

const RevisaoPage = () => {
    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviço de Revisão</h1>
                    <p className="text-xl text-gray-200">Nossa equipe de especialistas aprimora seu texto, garantindo clareza e correção.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction Text */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <div className="flex items-center gap-6 mb-6">
                            <HiSearch className="w-16 h-16 text-gram-blue flex-shrink-0" />
                            <h2 className="text-3xl font-bold text-gram-dark-blue">
                                Lapidando Suas Palavras até a Excelência
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Um texto bem escrito é a alma de um livro memorável. O serviço de revisão da Grammata vai além da simples correção de erros gramaticais e ortográficos. Nossa missão é aprimorar a clareza, a coesão e a fluidez do seu manuscrito, garantindo que sua mensagem seja transmitida da forma mais poderosa e eficaz possível.
                            </p>
                            <p>
                                Nossos revisores são profissionais experientes e apaixonados pela língua portuguesa. Eles trabalham em estreita colaboração com o autor para refinar o texto, sugerir melhorias e assegurar que a obra final esteja em conformidade com as normas editoriais, sem nunca perder a voz e o estilo únicos do escritor.
                            </p>
                            <p>
                                Investir em uma revisão profissional é um ato de respeito para com o leitor e um passo decisivo para o sucesso da sua publicação. Na Grammata, cada palavra conta. Deixe-nos cuidar das suas para que elas brilhem com todo o seu potencial.
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

export default RevisaoPage;