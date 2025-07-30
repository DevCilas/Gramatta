// Início do arquivo src/Components/Authors.jsx

import React from 'react';

// Bloco de importações do Swiper
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Bloco de importação de imagens dos autores (fornecido por você)
import AdrianoSantos from './Assets/authors/Adriano Santos.svg';
import AnaPaula from './Assets/authors/Ana Paula.svg';
import AndreFarjão from './Assets/authors/André Farjão.svg';
import AngelicaRodrigues from './Assets/authors/Angélica Rodrigues.svg';
import Atila from './Assets/authors/Atila.svg';
import CristovaoJose from './Assets/authors/Cristovão José.svg';
import DaviSilveira from './Assets/authors/Davi Silveira.svg';
import Djoel from './Assets/authors/Djoel.svg';
import Elisabeth from './Assets/authors/Elisabeth.svg';
import ElmirRibeiro from './Assets/authors/Elmir Ribeiro.svg';
import ElyRobert from './Assets/authors/Ely Robert.svg';
import FabioG from './Assets/authors/Fábio G.svg';
import Felipe from './Assets/authors/Felipe.svg';
import Genildo from './Assets/authors/Genildo.svg';
import Guetemberg from './Assets/authors/Guetemberg.svg';
import HelioRibeiro from './Assets/authors/Helio Ribeiro.svg';
import IsaacDias from './Assets/authors/Isaac Dias.svg';
import IsacOliveira from './Assets/authors/Isac Oliveira.svg';
import IsaelAgenor from './Assets/authors/Isael Agenor.svg';
import Jacsom from './Assets/authors/Jacsom.svg';
import JesseBarosa from './Assets/authors/Jessé Barosa.svg';
import JoaoBatista from './Assets/authors/João Batista.svg';
import JoelXavier from './Assets/authors/Joel Xavier.svg';
import JonasLuppi from './Assets/authors/Jonas Luppi.svg';
import JoseAparecido from './Assets/authors/José Aparecido.svg';
import Katia from './Assets/authors/Katia.svg';
import Kelli from './Assets/authors/Kelli.svg';
import LeoBrito from './Assets/authors/Leo Brito.svg';
import LucasGomes from './Assets/authors/Lucas Gomes.svg';
import LucianoCosta from './Assets/authors/Luciano Costa.svg';
import LucimarOliveira from './Assets/authors/Lucimar de Oliveira.svg';
import Marcel from './Assets/authors/Marcel.svg';
import Marcelo from './Assets/authors/Marcelo.svg';
import MarcosSemiao from './Assets/authors/Marcos Semião.svg';
import Mazinho from './Assets/authors/Mazinho.svg';
import Moises from './Assets/authors/Moisés.svg';
import PedroCarlos from './Assets/authors/Pedro Carlos.svg';
import PraxedesOliveira from './Assets/authors/Praxedes Oliveira.svg';
import Rita from './Assets/authors/Rita.svg';
import Roseli from './Assets/authors/Roseli.svg';
import Sara from './Assets/authors/Sara.svg';
import Shirizu from './Assets/authors/Shirizu.svg';
import Vasti from './Assets/authors/Vasti.svg';
import Wadsom from './Assets/authors/Wadsom.svg';
import Wilker from './Assets/authors/Wilker.svg';

// Lista de autores (fornecida por você)
const authors = [
  { id: 1, name: 'Adriano Santos', image: AdrianoSantos },
  { id: 2, name: 'Ana Paula', image: AnaPaula },
  { id: 3, name: 'André Farjão', image: AndreFarjão },
  { id: 4, name: 'Angélica Rodrigues', image: AngelicaRodrigues },
  { id: 5, name: 'Átila', image: Atila },
  { id: 6, name: 'Cristóvão José', image: CristovaoJose },
  { id: 7, name: 'Davi Silveira', image: DaviSilveira },
  { id: 8, name: 'Djoel', image: Djoel },
  { id: 9, name: 'Elisabeth', image: Elisabeth },
  { id: 10, name: 'Elmir Ribeiro', image: ElmirRibeiro },
  { id: 11, name: 'Ely Robert', image: ElyRobert },
  { id: 12, name: 'Fábio G', image: FabioG },
  { id: 13, name: 'Felipe', image: Felipe },
  { id: 14, name: 'Genildo', image: Genildo },
  { id: 15, name: 'Guetemberg', image: Guetemberg },
  { id: 16, name: 'Hélio Ribeiro', image: HelioRibeiro },
  { id: 17, name: 'Isaac Dias', image: IsaacDias },
  { id: 18, name: 'Isac Oliveira', image: IsacOliveira },
  { id: 19, name: 'Isael Agenor', image: IsaelAgenor },
  { id: 20, name: 'Jacsom', image: Jacsom },
  { id: 21, name: 'Jessé Barosa', image: JesseBarosa },
  { id: 22, name: 'João Batista', image: JoaoBatista },
  { id: 23, name: 'Joel Xavier', image: JoelXavier },
  { id: 24, name: 'Jonas Luppi', image: JonasLuppi },
  { id: 25, name: 'José Aparecido', image: JoseAparecido },
  { id: 26, name: 'Kátia', image: Katia },
  { id: 27, name: 'Kelli', image: Kelli },
  { id: 28, name: 'Leo Brito', image: LeoBrito },
  { id: 29, name: 'Lucas Gomes', image: LucasGomes },
  { id: 30, name: 'Luciano Costa', image: LucianoCosta },
  { id: 31, name: 'Lucimar de Oliveira', image: LucimarOliveira },
  { id: 32, name: 'Marcel', image: Marcel },
  { id: 33, name: 'Marcelo', image: Marcelo },
  { id: 34, name: 'Marcos Semião', image: MarcosSemiao },
  { id: 35, name: 'Mazinho', image: Mazinho },
  { id: 36, name: 'Moisés', image: Moises },
  { id: 37, name: 'Pedro Carlos', image: PedroCarlos },
  { id: 38, name: 'Praxedes Oliveira', image: PraxedesOliveira },
  { id: 39, name: 'Rita', image: Rita },
  { id: 40, name: 'Roseli', image: Roseli },
  { id: 41, name: 'Sara', image: Sara },
  { id: 42, name: 'Shirizu', image: Shirizu },
  { id: 43, name: 'Vasti', image: Vasti },
  { id: 44, name: 'Wadsom', image: Wadsom },
  { id: 45, name: 'Wilker', image: Wilker },
];

const Authors = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gram-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Cabeçalho da Seção */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gram-dark-blue mb-4 md:mb-6">
                            Nossos autores
                        </h2>
                    </div>

                    {/* Wrapper do Carrossel */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            className="authors-carousel-wrapper"
                            // Rolagem em blocos/páginas
                            breakpoints={{
                                320: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
                                640: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 30 },
                                768: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 30 },
                                1024: { slidesPerView: 7, slidesPerGroup: 7, spaceBetween: 40 },
                            }}
                        >
                            {authors.map((author) => (
                                <SwiperSlide key={author.id} className="text-center group">
                                    <div className="flex flex-col items-center">
                                        {/* Imagem do Autor */}
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 border-2 border-gray-300 group-hover:border-gram-green transition-all duration-300 group-hover:shadow-lg">
                                            <img 
                                                src={author.image} 
                                                alt={author.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        {/* Nome do Autor */}
                                        <h3 className="text-sm lg:text-base font-medium text-gram-dark-blue group-hover:text-gram-blue transition-colors duration-300">
                                            {author.name}
                                        </h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <p className="text-center text-gram-blue/80 italic mt-8 lg:hidden">
                        Arraste para conhecer
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Authors;

// Fim do arquivo src/Components/Authors.jsx