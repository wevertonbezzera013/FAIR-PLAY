import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap backdrop-blur-sm p-6">
                <div className="flex items-center text-white mr-6 logo">
                    <img className='w-10 h-full' src="https://s3-alpha-sig.figma.com/img/1ff4/88a0/9170b65b55cf94a37bd7e028d40ec718?Expires=1671408000&Signature=SfLZcu3oM34pCHrecC~TypQjXXM89y3NUu4dvHcrHTQsNZcjkCYZ62QNUS0ctjUWO7EMcHXyoVp3E-81rj4pYjY2-7WpTRYXP9v6yTZgoO2FerULRKig3IBMEs4BvEahms54Ji9unuFd5FX5Yyqb253oGrWIB6TSIJ3-0UVN270ENz4tegZzEoGe6tm97-AZBr7H9WwEFrEZTNwEt6wju~8vAnLfrFDrEssZ-9qCbEzpsS8Cq~Mm7OuWS6jTIO2hKiACY2ilgEg30~1mkhcTUAvNW~stzWYZYnRcU-0z05BWWOOVB4ki5y6Kxu7Kr2e-ZbSfmNszhexJ161pu4Rs3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <span className="font-semibold text-xl tracking-tight">Fair Play</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-black hover:border-white hover:bg-white ease-in duration-300">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 border-solid border-b-2 border-white">
                            INÍCIO
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 border-solid border-b-2 border-white">
                            SOBRE NÓS
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white border-solid border-b-2 border-white">
                            Blog
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 ">DOE AGORA</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
