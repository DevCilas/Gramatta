import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DentroDoLivro = () => {
    // YouTube video IDs - you can replace these with your actual video IDs
    const videos = [
        {
            id: 1,
            title: "Por dentro do livro",
            description: " Escola Bíblia AD Min",
            videoId: "FoKBcxmR1wA",
            author: "Canal Editora Grammata"
        },
        {
            id: 2,
            title: "Por dentro do livro",
            description: "Para onde você irá quando morrer?",
            videoId: "83LkzH5bm9U",
            author: "Canal Editora Grammata"
        },
        {
            id: 3,
            title: "Por dentro do livro",
            description: "101 verdades sobre a oração",
            videoId: "fcq8ddtXgcA",
            author: "Canal Editora Grammata"
        }
    ];

    const [selectedVideo, setSelectedVideo] = useState(null);

    const openModal = (video) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'unset';
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Dentro do Livro</h1>
                    <p className="text-xl text-gray-200">Conheça nossos livros através de vídeos exclusivos</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction Text */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-gram-dark-blue mb-6">
                            Descubra o Conteúdo dos Nossos Livros
                        </h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Na Grammata Publicações, acreditamos que cada livro tem uma história única para contar. Nossa seção "Dentro do Livro" oferece uma experiência imersiva, onde você pode conhecer mais sobre nossas obras através de vídeos exclusivos.
                            </p>
                            <p>
                                Aqui você encontrará apresentações dos autores, resumos dos capítulos, entrevistas exclusivas e muito mais. Cada vídeo foi cuidadosamente produzido para trazer você mais perto do conteúdo e da essência de cada obra.
                            </p>
                            <p>
                                Assista aos vídeos para descobrir os temas abordados, conhecer os autores e entender melhor o que cada livro tem a oferecer. É uma forma única de explorar o universo literário da Grammata antes mesmo de abrir as páginas.
                            </p>
                        </div>
                    </div>

                    {/* Videos Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => openModal(video)}>
                                <div className="relative">
                                    {/* YouTube Thumbnail */}
                                    <img 
                                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-48 object-cover rounded-lg shadow-md"
                                        loading="lazy"
                                    />
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                        <div className="bg-white bg-opacity-90 rounded-full p-4">
                                            <svg className="w-8 h-8 text-gram-dark-blue" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <h3 className="text-white font-bold text-lg mb-1">
                                            {video.title}
                                        </h3>
                                        <p className="text-white/90 text-sm mb-1">
                                            {video.description}
                                        </p>
                                        <p className="text-white/80 text-sm">
                                            {video.author}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* See More Videos Button */}
                    <div className="text-center mt-12 mb-8">
                        <a 
                            href="https://www.youtube.com/@GrammataPublica%C3%A7%C3%B5es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            Ver Mais no Nosso Canal do YouTube
                        </a>
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

            {/* Video Modal */}
            {selectedVideo && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={handleModalClick}
                >
                    <div className="relative max-w-sm w-full">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
                            aria-label="Fechar"
                        >
                            &times;
                        </button>
                        
                        {/* YouTube Video - 9:16 aspect ratio for Shorts */}
                        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                                title={selectedVideo.title}
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        
                        {/* Video Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                            <h3 className="text-white font-bold text-lg mb-1">
                                {selectedVideo.title}
                            </h3>
                            <p className="text-white/90 text-sm mb-1">
                                {selectedVideo.description}
                            </p>
                            <p className="text-white/80 text-sm">
                                {selectedVideo.author}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DentroDoLivro; 