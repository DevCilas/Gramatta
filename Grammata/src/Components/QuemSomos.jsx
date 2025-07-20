import React from 'react';
import { Link } from 'react-router-dom';
import jeanCarlosImage from './Assets/JeanCarlos.jpeg';
import logo from './Assets/logo.png';

const QuemSomos = () => {
    return (
        <div className="min-h-screen bg-gram-cream-white">
            {/* Header */}
            <div className="bg-gram-dark-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Quem Somos</h1>
                    <p className="text-xl text-gray-200">Conheça a história da Grammata Publicações</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Company Overview */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="lg:w-1/2">
                                <img 
                                    src={logo}
                                    alt="Grammata Publicações Logo"
                                    className="w-full h-80 object-contain rounded-lg shadow-md"
                                    loading="lazy"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-gram-dark-blue mb-6">Nossa História</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    A Grammata Publicações é uma editora fundada pelo professor Jean Carlos. De forma geral, o trabalho começou em 2010, contudo, profissionalmente iniciamos as atividades em 2017.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Hoje, contamos com mais de 40 lançamentos em português. Autores de várias partes desse imenso Brasil. Alguns autores já lançamos inclusive, mais de uma obra, fazendo com que este autor chegue em outras partes do Brasil.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How it Started */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-gram-dark-blue mb-6">Como começou o trabalho?</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                No ano de 1994, ainda quando professor Jean Carlos estava no bairro da Lapa, em São Paulo, sentiu uma grande chamada para escrita, antes disso, já tinha escrito pequenas redações, hinos para congresso, peças de teatro e pequenos roteiros.
                            </p>
                            <p>
                                Foi neste ano que ele escreveu uma pequena apostila de umas 1000 palavras sobre a Doutrina do Espírito Santo, claro, trabalho bem limitado, modesto e pequeno. Daí, foi escrevendo de forma tímida alguns pequenos projetos sobre comentários bíblicos, temas diversos, nada com ambição profissional, tudo fazendo como hobby e de forma amadora.
                            </p>
                            <p>
                                Em 2010, então neste ano, já tinha aí uns rascunhos de alguns comentários bíblicos, e já com certo domínio de grego e latim, começou seus estudos no hebraico e Aramaico e, sendo assim, sentiu a necessidade de começar um trabalho, a princípio apenas para editar seus próprios livros.
                            </p>
                            <p>
                                Três anos depois, já tinha publicado uns quatro livros e contando com uma pequena cadeia de cliente.
                            </p>
                            <p>
                                No ano de 2017, foi o ano que eu entendo como a profissionalização, pois já estava com empresa aberta e alguns novos autores já estava me procurando para também editar seus livros e obras.
                            </p>
                        </div>
                    </div>

                    {/* About Jean Carlos */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-gram-dark-blue mb-6">Sobre o Fundador</h2>
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            <div className="lg:w-1/3">
                                <img 
                                    src={jeanCarlosImage}
                                    alt="Professor Jean Carlos da Silva"
                                    className="w-full h-96 object-cover rounded-lg shadow-md"
                                    loading="lazy"
                                />
                            </div>
                            <div className="lg:w-2/3">
                                <h3 className="text-2xl font-bold text-gram-dark-blue mb-4">Professor Jean Carlos da Silva</h3>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Nascido na linda cidade de Mossoró-RN em 1975 e admirador da IEADERN naquela cidade. Na época de criança tinha lá um homem de Deus chamado Pastor João Gomes.
                                    </p>
                                    <p>
                                        Ainda na adolescência fui morar com um tio no estado de Rondônia, contudo, pouco tempo depois fui morar em Campinas -SP, onde na época do Pastor Marinézio Soares da Silva comecei a seguir o evangelho com compromisso, nesta linda igreja em Campinas, fui batizado nas águas, lá no Pq Itália, sede, batizado com Espírito Santo e fiz a primeira pregação.
                                    </p>
                                    <p>
                                        Meu ministério começou mesmo em 1994 no setor 5 da Lapa (Assembleia de Deus Ministério do Belém). Aqui, comecei a escrever.
                                    </p>
                                    <p>
                                        Em 2010 comecei a publicar meus livros e, já morando em Suzano-SP, comecei a publicar livros de outros autores no ano de 2017.
                                    </p>
                                    <p className="text-gram-dark-blue font-semibold">
                                        Deus abençoe sua vida.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About the name Grammata */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-gram-dark-blue mb-6">Sobre o termo 'grammata'</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Não é segredo de ninguém minha paixão pelo hebraico, aramaico, grego, latim e português. Após 1 (um) ano de atividade preparatória, precisava de um nome para livraria virtual que nos identifica-se com o ramo e essa paixão. Foi então que escolhemos 'Grammata'.
                            </p>
                            <p>
                                O substantivo 'grammata' está flexionado (mudanças nas terminações que sofrem os substantivos gregos) para caso acusativo vindo da forma básica 'gramma', traduzido significa 'letra' e 'letra do alfabeto grego'. Foi deste radical que surgiu o conhecido termo em nossa língua: gramática. O substantivo aparece em (Lc 16.6; Jo 7.15; At 26.24; 2 Co 3.6, 16 e Gl 6.11).
                            </p>
                            <p>
                                Se a forma básica é 'gramma' e não 'grammata' por que a escolha foi 'grammata'? Para que o som não soasse meio estranho e não fosse confundido com 'mato' e/ou 'capim'.
                            </p>
                        </div>
                    </div>

                    {/* Back to Home Button */}
                    <div className="text-center">
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

export default QuemSomos; 