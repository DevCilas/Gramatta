import React from "react";

const services = [
    {
        id: 1,
        title: "Transcrição",
        description: "Convertemos seus manuscritos ou áudios em texto digital com precisão e cuidado.",
        icon: (
            <svg className="w-12 h-12 text-gram-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Revisão",
        description: "Nossa equipe de especialistas aprimora seu texto, garantindo clareza e correção.",
        icon: (
            <svg className="w-12 h-12 text-gram-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Diagramação",
        description: "Criamos um layout profissional e atraente para o miolo do seu livro.",
        icon: (
            <svg className="w-12 h-12 text-gram-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        )
    },
    {
        id: 4,
        title: "Impressão e Entrega",
        description: "Cuidamos da produção gráfica e da logística para que seu livro chegue até você.",
        icon: (
            <svg className="w-12 h-12 text-gram-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        )
    }
];

const Servicos = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-cream-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gram-green rounded-full flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gram-dark-blue mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
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