import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './Assets/icon.svg';

const navLinks = [
    { href: '/', label: 'Início', isRoute: true },
    { href: '/quem-somos', label: 'Quem somos', isRoute: true },
    { href: '/capas', label: 'Capas', isRoute: true },
    { href: '/miolo', label: 'Miolo', isRoute: true },
    { href: '/dentro-do-livro', label: 'Dentro do livro', isRoute: true },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

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

    const handleNavClick = (link) => {
        if (link.isRoute) {
            setMenuOpen(false);
        } else {
            scrollToSection(link.href);
        }
    };

    return (
        <header className="w-full bg-gram-white shadow-md fixed top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Grammata Logo" className="h-14 w-auto" loading="lazy" />
                    <span className="font-bold text-xl text-gram-dark-blue font-semibold">Grammata <span className='text-xl text-gram-green font-light'>Publicações</span></span>
                </Link>
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
                        link.isRoute ? (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-gram-blue hover:text-gram-dark-blue text-lg font-medium transition-colors cursor-pointer"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className="text-gram-blue hover:text-gram-dark-blue text-lg font-medium transition-colors cursor-pointer"
                            >
                                {link.label}
                            </button>
                        )
                    ))}
                </nav>
            </div>
            {/* Mobile menu drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-gram-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Grammata Logo" className="h-8 w-auto" loading="lazy" />
                        <span className="font-bold text-lg text-gram-dark-blue">Grammata</span>
                    </Link>
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
                        link.isRoute ? (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-gram-blue hover:text-gram-dark-blue font-medium text-lg transition-all duration-200 cursor-pointer text-left py-2 px-3 rounded-lg hover:bg-gram-green hover:bg-opacity-20 active:scale-95 active:bg-gram-green active:bg-opacity-30"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className="text-gram-blue hover:text-gram-dark-blue font-medium text-lg transition-all duration-200 cursor-pointer text-left py-2 px-3 rounded-lg hover:bg-gram-green hover:bg-opacity-20 active:scale-95 active:bg-gram-green active:bg-opacity-30"
                            >
                                {link.label}
                            </button>
                        )
                    ))}
                </nav>
            </aside>
        </header>
    );
};

export default Header;