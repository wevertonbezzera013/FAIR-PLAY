import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-tex-blue mt-10 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                        <p className="text-white">CNPJ: 45.739.677/0001-84</p>
                        <p className="text-white">Email: CONTATO@ONGFAIRPLAY.ORG</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/4">
                        <ul className="flex flex-wrap justify-end">
                            <li className="mr-4">
                                <a href="/" className="text-white hover:text-gray-300">Início</a>
                            </li>
                            <li className="mr-4">
                                <a href="/blog" className="text-white hover:text-gray-300">Blog</a>
                            </li>
                            <li className="mr-4">
                                <a href="/about" className="text-white hover:text-gray-300">Sobre Nós</a>
                            </li>
                            <li className="mr-4">
                                <a href="/donate" className="text-white hover:text-gray-300">Doe Agora</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-white pt-4">
                    <p className="text-white text-center">&copy; {new Date().getFullYear()} FairPlay - Brazilian Soccer NGO. All rights reserved.</p>
                    <p className="text-white text-center">CENTRO DE OBSERVAÇÃO E FORMAÇÃO DE ATLETAS VISAUM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
