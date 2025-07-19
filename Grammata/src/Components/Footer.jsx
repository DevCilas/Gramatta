import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gram-dark-blue text-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Company Name */}
                    <h3 className="text-2xl font-bold mb-4">
                        Grammata Editora
                    </h3>
                    
                    {/* Address */}
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Rua Cidade de Diadema<br />
                        Suzano, SP<br />
                        <a href="mailto:daskalosjean@gmail.com" className="hover:text-gram-green transition-colors duration-300">
                            daskalosjean@gmail.com
                        </a>
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center items-center space-x-6 mb-8">
                        {/* Facebook */}
                        <a 
                            href="https://www.facebook.com/grammatapublicacoesoficial?locale=pt_BR" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gram-green transition-colors duration-300 transform hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        
                        {/* YouTube */}
                        <a 
                            href="https://www.youtube.com/@GrammataPublica%C3%A7%C3%B5es" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gram-green transition-colors duration-300 transform hover:scale-110"
                            aria-label="YouTube"
                        >
                            <FaYoutube className="w-6 h-6" />
                        </a>
                        
                        {/* Instagram */}
                        <a 
                            href="https://www.instagram.com/grammatapublicacoes/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gram-green transition-colors duration-300 transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                    
                    {/* Copyright */}
                    <p className="text-gray-400 text-sm">
                        © 2025 Grammata. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 