import React, { useState } from 'react';
import logo from './Assets/icon.png';

const navLinks = [
    { href: '#carousel', label: 'Capas' },
    { href: '#about', label: 'Quem somos' },
    { href: '#services', label: 'Miolo' },
    { href: '#authors', label: 'Autores' },
    { href: '#tasting', label: 'Dentro do livro' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setMenuOpen(false);
    };

    return (
        <header className="w-full bg-gram-white shadow-md fixed top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img src={logo} alt="Grammata Logo" className="h-14 w-auto" />
                    <span className="font-bold text-xl text-gram-dark-blue font-semibold">Grammata <span className='text-xl text-gram-green font-light'>Publicações</span></span>
                </a>
                {/* mobile hamburguer */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <span className={`block w-6 h-0.5 bg-gram-dark-blue mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gram-dark-blue mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gram-dark-blue transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="text-gram-blue hover:text-gram-dark-blue text-lg font-medium transition-colors cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            </div>
            {/* Mobile menu drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-gram-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <a href="#" className="flex items-center gap-2">
                        <img src={logo} alt="Grammata Logo" className="h-8 w-auto" />
                        <span className="font-bold text-lg text-gram-dark-blue">Grammata</span>
                    </a>
                    <button
                        className="text-2xl text-gram-blue hover:text-gram-dark-blue transition-colors"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                </div>
                <nav className="flex flex-col gap-6 p-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="text-gram-blue hover:text-gram-dark-blue font-medium text-lg transition-colors cursor-pointer text-left"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            </aside>
        </header>
    );
};

export default Header;