import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

const about = () => {
    return (
        <div>

            <Header />

            <div>
                <div className='bg-img-about text-center flex'>

                    <div className='container absolute top-48'>
                        <span className='text-white text-5xl font-bold text-left break-words'>
                            SOBRE NÓS
                        </span>

                    </div>
                </div>
            </div>

            <div>

                <div className='flex flex-col justify-center text-center'>

                    <div className='lg:flex lg:flex-col-reverse'>
                        <h1 className=' text-tex-blue text-2xl pt-10 pl-10 flex justify-start lg:hidden md:hidden'>FAÇA A DIFERENÇA</h1>

                        <div className='flex justify-center pt-10 pb-5 lg:justify-end lg:pr-24 lg:hidden md:hidden'>
                            <div className='bg-img-about-second flex items-center'></div>
                        </div>
                    </div>




                    <div className='flex justify-around mt-10 lg:pl-32 lg:pr-32 md:pl-32 md:pr-32 lg:pt-56 md:pt-56'>
                        <div className='mt-12 hidden lg:block md:block'>
                            <div className='bg-img-kid-goal-keeper'></div>
                        </div>

                        <div className='pl-10 pr-10'>

                            <h1 className=' text-tex-blue text-2xl pt-10 justify-start hidden lg:flex md:flex lg:text-3xl md:text-3xl'>FAÇA A DIFERENÇA</h1>

                            <div className='pt-10 text-left'>
                                <span className='text-black text-4xl font-bold break-words lg:text-5xl md:text-5xl'>
                                    NOSSA MISSÃO
                                </span>
                            </div>
                            <br />
                            <div className='container pt-1 text-left'>
                                <span className='text-black font-thin break-words lg:text-3xl'>A organização tem como missão promover a inclusão social integral de crianças,
                                    adolescentes e jovens através de projetos sociais esportivos, tendo como
                                    atividade principal, mas não limitada, à promoção da observação, treinamento e
                                    formação de novos atletas.
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='bg-img-about-second hidden lg:block md:block lg:bottom-44 md:bottom-44'></div>
                            <div className='bg-img-two-kids hidden lg:block md:block'></div>
                        </div>
                    </div>

                    <div className='flex justify-around mt-10 mb-28 lg:hidden md:hidden'>
                        <div className='mt-12'>
                            <div className='bg-img-kid-goal-keeper'></div>
                        </div>

                        <div>
                            <div className='bg-img-two-kids'></div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='pt-24'>
                <div className='img-kids-playing absolute'>
                    <div className='absolute flex flex-col top-24 lg:top-52 md:top-52 pl-10 pr-10'>
                        <span className='text-white text-4xl pb-2 font-bold break-words lg:text-5xl md:text-5xl'>
                            NOSSA VISÃO
                        </span>
                        <div className='text-white top-24 lg:text-3xl'>

                            Temos como visão que só o desenvolvimento da prática esportiva e o
                            direcionamento de crianças, adolescentes e jovens para a profissionalização no
                            futebol, é insuficiente, uma vez que para promoção do desenvolvimento do ser
                            humano, em especial os de baixa renda, é necessário ir além e, integrar às ações
                            da organização social, atividades complementares para de fato promovermos o
                            desenvolvimento humano integrado e assim preparar ao mercado do futebol,
                            capazes de gerir uma carreira sustentável.
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:justify-center pt-28 pb-28'>
                <div className='text-center lg:hidden md:hidden'>
                    <h1 className='text-1xl text-tex-blue mt-10'>LOCALIZAÇÃO</h1>
                    <br />
                    <h2 className='text-black text-5xl bold font-bold'>VENHA NOS VISITAR</h2>
                    <br />
                    <p className='text-2xl'>FIND US ON GOOGLE MAPS</p>
                </div>

                <div className='flex justify-center lg:hidden md:hidden'>
                    <div className='img-google-maps top-10 '>
                    </div>
                </div>

                <div>
                    <div className='text-left hidden lg:block md:block'>
                        <h1 className='text-1xl text-tex-blue mt-10'>LOCALIZAÇÃO</h1>
                        <br />
                        <h2 className='text-black text-5xl bold font-bold'>VENHA NOS VISITAR</h2>
                        <br />
                        <p className='text-2xl'>ENCONTRE-NOS NO GOOGLE MAPS</p>
                    </div>

                    <div className='flex flex-row justify-center lg:justify-start md:justify-start pt-20'>
                        <div>
                            <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_240_1210)">
                                    <path d="M27.5 10.0801C25.7686 10.0801 24.0761 10.5842 22.6365 11.5286C21.1969 12.473 20.0748 13.8154 19.4122 15.3859C18.7496 16.9564 18.5763 18.6846 18.9141 20.3519C19.2518 22.0191 20.0856 23.5506 21.3099 24.7527C22.5342 25.9547 24.094 26.7733 25.7922 27.1049C27.4903 27.4366 29.2505 27.2664 30.8501 26.6158C32.4497 25.9653 33.8169 24.8636 34.7788 23.4502C35.7408 22.0368 36.2542 20.375 36.2542 18.6751C36.2542 16.3955 35.3319 14.2094 33.6902 12.5975C32.0484 10.9856 29.8218 10.0801 27.5 10.0801ZM27.5 24.2701C26.3729 24.2701 25.2712 23.9419 24.334 23.3272C23.3969 22.7124 22.6665 21.8385 22.2352 20.8162C21.8039 19.7938 21.691 18.6689 21.9109 17.5835C22.1308 16.4982 22.6735 15.5013 23.4705 14.7188C24.2675 13.9363 25.2829 13.4035 26.3883 13.1876C27.4937 12.9717 28.6395 13.0825 29.6808 13.506C30.7221 13.9294 31.6121 14.6466 32.2382 15.5667C32.8644 16.4868 33.1986 17.5685 33.1986 18.6751C33.1946 20.1564 32.5924 21.5756 31.5242 22.6216C30.4559 23.6677 29.0087 24.2551 27.5 24.2551V24.2701Z" fill="black" />
                                    <path d="M27.5 3C22.7413 3.0039 18.1775 4.85653 14.8054 8.15324C11.4334 11.45 9.52702 15.9229 9.50281 20.595C9.50281 27.6 13.5056 33.465 16.4389 37.74L16.9736 38.52C19.8921 42.6729 23.023 46.6781 26.3542 50.52L27.5153 51.855L28.6764 50.52C32.0072 46.6777 35.138 42.6726 38.057 38.52L38.5917 37.725C41.5098 33.45 45.5125 27.6 45.5125 20.595C45.4883 15.9203 43.5799 11.4451 40.2045 8.14796C36.8291 4.85082 32.2614 2.99994 27.5 3ZM36.0403 36L35.4903 36.795C32.8625 40.665 29.3792 45 27.5 47.145C25.6973 45 22.1375 40.665 19.5098 36.795L18.975 36C16.2709 32.04 12.5584 26.625 12.5584 20.535C12.5584 18.6085 12.9448 16.7009 13.6957 14.921C14.4466 13.1412 15.5472 11.524 16.9347 10.1617C18.3221 8.79951 19.9693 7.71892 21.7821 6.98169C23.5949 6.24445 25.5379 5.865 27.5 5.865C29.4622 5.865 31.4051 6.24445 33.218 6.98169C35.0308 7.71892 36.6779 8.79951 38.0654 10.1617C39.4528 11.524 40.5534 13.1412 41.3043 14.921C42.0552 16.7009 42.4417 18.6085 42.4417 20.535C42.4417 26.685 38.7445 32.1 36.0403 36Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_240_1210">
                                        <rect width="55" height="54" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div>
                            <h1 className='text-2xl'>
                                Duque de Caxias
                            </h1>

                            <p className='text-1xl text-gray-600 break-words'>
                                Duque de Caxias
                            </p>

                        </div>
                    </div>

                    <div className='pt-10'>
                        <div className='break-words pl-5 pr-5 py-3 m-2 mt-0 md:mt-10 text-center lg:text-3xl bg-tex-blue hover:bg-sky-600 ease-in-out duration-300 text-white rounded-xl p-2 text-1xl cursor-pointer'>
                            <a href="https://www.instagram.com/fairplay.brasil/">ENTRE EM CONTATO</a>
                        </div>
                    </div>

                </div>

                <div className='hidden md:block lg:block'>
                    <div className='img-google-maps top-10 '>
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    )
}

export default about