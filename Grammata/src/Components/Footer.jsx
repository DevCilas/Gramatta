import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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
                        Rua da Poesia, 123 - Bairro das Letras<br />
                        Cidade Literária, BR
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center items-center space-x-6 mb-8">
                        {/* Facebook */}
                        <a 
                            href="#" 
                            className="text-white hover:text-gram-green transition-colors duration-300 transform hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        
                        {/* Twitter */}
                        <a 
                            href="#" 
                            className="text-white hover:text-gram-green transition-colors duration-300 transform hover:scale-110"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        
                        {/* Instagram */}
                        <a 
                            href="#" 
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