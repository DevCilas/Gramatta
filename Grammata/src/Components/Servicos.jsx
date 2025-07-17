import React from "react";
import { HiDocumentText, HiSearch, HiViewBoards, HiTruck } from "react-icons/hi";

const services = [
    {
        id: 1,
        title: "Transcrição",
        description: "Convertemos seus manuscritos ou áudios em texto digital com precisão e cuidado.",
        icon: <HiDocumentText className="w-12 h-12 text-gram-blue" />
    },
    {
        id: 2,
        title: "Revisão",
        description: "Nossa equipe de especialistas aprimora seu texto, garantindo clareza e correção.",
        icon: <HiSearch className="w-12 h-12 text-gram-blue" />
    },
    {
        id: 3,
        title: "Diagramação",
        description: "Criamos um layout profissional e atraente para o miolo do seu livro.",
        icon: <HiViewBoards className="w-12 h-12 text-gram-blue" />
    },
    {
        id: 4,
        title: "Impressão e Entrega",
        description: "Cuidamos da produção gráfica e da logística para que seu livro chegue até você.",
        icon: <HiTruck className="w-12 h-12 text-gram-blue" />
    }
];

const Servicos = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-cream-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gram-dark-blue mb-6">
                            Nossos serviços que oferecemos
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Do original à publicação, oferecemos um suporte completo para a realização do seu sonho de publicar um livro.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gram-green rounded-full flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gram-dark-blue mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicos; 