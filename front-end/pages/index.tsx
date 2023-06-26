import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>FairPlay</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <div>
        <div className='bg-img'>
          <div className='container pl-10 pr-10 absolute top-24'>
            <span className='text-white text-3xl font-bold text-left break-words lg:text-7xl'>
              Transformando vidas por meio da arte.
            </span>
            <br />
            <div className='container pt-1'>
              <span className='text-white text-2xl font-thin break-words lg:text-5xl'>O futebol é um esporte que une pessoas de diversas origens, descobre talentos e constrói caminhos promissores.</span>
            </div>

            <a href="/donate">
              <div className='mt-7 py-3 m-2 md:mt-10 text-center lg:text-3xl bg-butt-back hover:bg-amber-200 ease-in-out duration-300 text-white rounded-xl p-2 text-1xl font-bold cursor-pointer lg:w-1/3 md:w-1/3'>
                <span className=''>
                  DOE AGORA
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <h1 className=' text-tex-blue text-4xl font-bold pt-10 pl-10 md:hidden'>SOBRE NÓS</h1>
      </div>

      <div className='md:flex md:pl-10 md:pt-10 md:max-w-full lg:pl-64 lg:pr-64'>
        <div className='pt-20 flex justify-center'>
          <div className='relative'>
            <div className='bg-image-top'></div>
            <div className='bg-image-over'></div>
          </div>
        </div>

        <div className='secText md:pl-48 lg:pl-48 lg:pt-16'>
          <div className=''>
            <h1 className='text-2xl hidden md:block lg:block lg:text-5xl text-tex-blue mt-10'>SOBRE NÓS</h1>
            <br />
            <h2 className='hidden md:block lg:block lg:text-6xl md:text-black md:text-3xl md:font-bold md:text-left md:break-words'>TRANSFORMANDO SONHOS EM REALIDADE</h2>
            <br />
            <p className='p-5 text-center lg:text-3xl'>
              Desde 2006, o Centro de Observação e Formação de Atleta tem desempenhado um papel fundamental como organização não governamental em Duque de Caxias, atendendo jovens que almejam se tornar atletas. Com um compromisso inabalável, nossa equipe dedica-se a transformar sonhos em realidade, proporcionando treinamento, suporte e oportunidades para que os jovens desenvolvam seu potencial máximo no esporte. Continuamos a inspirar e capacitar uma nova geração de atletas, moldando suas carreiras e contribuindo para seu sucesso dentro e fora dos campos. Leia mais para conhecer nossa história e impacto na comunidade.</p>
            <a href="/about">
              <div className='py-3 m-2 mt-0 md:mt-10 text-center lg:text-3xl bg-tex-blue hover:bg-sky-600 ease-in-out duration-300 text-white rounded-xl p-2 text-1xl font-bold cursor-pointer'>
                LEIA MAIS
              </div>
            </a>
          </div>
        </div>

      </div>


      <div className='mx-auto my-auto md:max-w-2xl lg:max-w-2xl mt-6 md:mt-0 mb-10 lg:text-3xl'>
        <div className='md:flex lg:flex'>
          <div className="mt-6 flex flex-row items-center md:flex lg:flex md:flex-col lg:flex-col">
            <svg width="135" height="131" viewBox="0 0 135 131" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_278_575)">
                <path d="M66.6444 60.0305C76.2444 60.0305 83.7111 52.2694 83.7111 42.7444C83.7111 33.2194 75.8888 25.811 66.2888 25.811C56.6888 25.811 49.2222 33.5721 49.2222 42.7444C49.2222 52.2694 57.0444 60.0305 66.6444 60.0305ZM66.2888 32.8666C66.6444 32.8666 66.6444 32.8666 66.2888 32.8666C71.9777 32.8666 76.5999 37.4527 76.5999 43.0971C76.5999 48.7416 71.9777 52.9749 66.2888 52.9749C60.5999 52.9749 56.3333 48.3888 56.3333 43.0971C56.3333 37.4527 60.9555 32.8666 66.2888 32.8666Z" fill="#01479D" />
                <path d="M119.267 57.9139C112.511 51.9166 103.622 48.7416 94.3777 49.0944H91.5333C90.8221 51.9166 89.7555 54.3861 88.3333 56.5027C90.4666 56.15 92.2444 56.15 94.3777 56.15C101.133 55.7972 107.889 57.9139 113.222 61.7944V87.1944H120.333V58.9722L119.267 57.9139Z" fill="#01479D" />
                <path d="M86.1999 26.5167C87.9777 22.2833 92.9555 20.1667 97.5777 21.9305C101.844 23.6944 103.978 28.6333 102.2 33.2194C100.778 36.3944 97.5777 38.5111 94.3777 38.5111C93.6666 38.5111 92.5999 38.5111 91.8888 38.1583C92.2444 39.9222 92.2444 41.6861 92.2444 43.0972V45.2139C92.9555 45.2139 93.6666 45.5667 94.3777 45.5667C103.267 45.5667 110.378 38.5111 110.378 30.0444C110.378 21.225 103.267 14.1694 94.7333 14.1694C89.0444 14.1694 84.0666 16.9917 81.2222 21.9305C82.9999 22.9889 84.7777 24.4 86.1999 26.5167Z" fill="#01479D" />
                <path d="M45.6667 56.8556C44.2445 54.7389 43.1779 52.2695 42.4667 49.4472H39.6223C30.3779 49.0945 21.489 52.2695 14.7334 57.9139L13.6667 58.9722V87.1945H20.7779V61.7945C26.4667 57.9139 32.8667 55.7972 39.6223 56.15C41.7556 56.15 43.889 56.5028 45.6667 56.8556Z" fill="#01479D" />
                <path d="M39.6222 45.214C40.3333 45.214 41.0444 45.214 41.7555 44.8612V42.7445C41.7555 40.9807 41.7555 39.2168 42.1111 37.8057C41.4 38.1584 40.3333 38.1584 39.6222 38.1584C35 38.1584 31.0889 34.2779 31.0889 29.6918C31.0889 25.1057 35 21.2251 39.6222 21.2251C43.1777 21.2251 46.3777 23.3418 47.8 26.5168C49.2222 24.7529 51.3555 22.989 53.1333 21.5779C48.5111 14.1695 38.9111 11.7001 31.4444 16.2862C23.9777 20.8723 21.4889 30.3973 26.1111 37.8057C28.9555 42.3918 33.9333 45.214 39.6222 45.214Z" fill="#01479D" />
                <path d="M95.8001 79.0805L95.089 78.0222C87.9779 70.2611 78.0223 65.675 67.3557 66.0278C56.689 65.675 46.3779 70.2611 39.2668 78.0222L38.5557 79.0805V105.892C38.5557 109.067 41.0446 111.889 44.6001 111.889H90.1112C93.3112 111.889 96.1557 109.067 96.1557 105.892V79.0805H95.8001ZM88.689 104.833H45.6668V81.55C51.3557 75.9055 59.1779 73.0833 67.3557 73.0833C75.1779 72.7305 83.0001 75.9055 88.689 81.55V104.833Z" fill="#01479D" />
              </g>
              <g clip-path="url(#clip1_278_575)">
                <path d="M67.125 60.8897C77.25 60.8897 85.125 52.8842 85.125 43.0592C85.125 33.2342 76.875 25.5925 66.75 25.5925C56.625 25.5925 48.75 33.5981 48.75 43.0592C48.75 52.8842 57 60.8897 67.125 60.8897ZM66.75 32.8703C67.125 32.8703 67.125 32.8703 66.75 32.8703C72.75 32.8703 77.625 37.6009 77.625 43.4231C77.625 49.2453 72.75 53.612 66.75 53.612C60.75 53.612 56.25 48.8814 56.25 43.4231C56.25 37.6009 61.125 32.8703 66.75 32.8703Z" fill="#01479D" />
                <path d="M122.625 58.7064C115.5 52.5203 106.125 49.2453 96.3752 49.6092H93.3752C92.6252 52.5203 89.5002 54.8167 88.0002 57C90.2502 56.6361 94.1252 56.887 96.3752 56.887C103.5 56.5231 110.625 58.7064 116.25 62.7092L113 88.9092H123.75V59.7981L122.625 58.7064Z" fill="#01479D" />
                <path d="M86 26.5C87.875 22.1333 94.875 19.7703 99.75 21.5898C104.25 23.4092 106.5 28.5037 104.625 33.2342C103.125 36.5092 99.75 38.6926 96.375 38.6926C95.625 38.6926 92.75 38.8639 92 38.5C92.375 40.3194 94.125 41.9676 94.125 43.4231V45.6064C94.875 45.6064 95.625 45.9703 96.375 45.9703C105.75 45.9703 113.25 38.6926 113.25 29.9592C113.25 20.862 105.75 13.5842 96.75 13.5842C90.75 13.5842 85.5 16.4953 82.5 21.5898C84.375 22.6814 84.5 24.3167 86 26.5Z" fill="#01479D" />
                <path d="M46.5 57.5C45 55.3167 42.375 52.8843 41.625 49.9732H38.625C28.875 49.6093 19.5 52.8843 12.375 58.7066L11.25 59.7982V88.9093H21L20.5 61.5C26.5 57.4972 31.5 56.5232 38.625 56.8871C40.875 56.8871 44.625 57.1361 46.5 57.5Z" fill="#01479D" />
                <path d="M38.6249 45.6064C39.3749 45.6064 40.1249 45.6064 40.8749 45.2426V43.0592C40.8749 41.2398 40.8749 39.4203 41.2499 37.9648C40.4999 38.3287 39.3749 38.3287 38.6249 38.3287C33.7499 38.3287 29.6249 34.3259 29.6249 29.5953C29.6249 24.8648 33.7499 20.862 38.6249 20.862C42.3749 20.862 45.7499 23.0453 47.2499 26.3203C48.7499 24.5009 50.9999 22.6814 52.8749 21.2259C47.9999 13.5842 37.8749 11.037 29.9999 15.7676C22.1249 20.4981 19.4999 30.3231 24.3749 37.9648C27.3749 42.6953 32.6249 45.6064 38.6249 45.6064Z" fill="#01479D" />
                <path d="M97.875 80.5398L97.125 79.4482C89.625 71.4426 79.125 66.712 67.875 67.0759C56.625 66.712 46.5 69.9944 39 78L37.5 80.5398V108.195C37.5 111.47 40.125 114.381 43.875 114.381H91.875C95.25 114.381 98.25 111.47 98.25 108.195L97.875 81V80.5398ZM90.375 107.104H45V83.087C51 77.2648 59.25 74.3537 67.875 74.3537C76.125 73.9898 84.375 77.2648 90.375 83.087V107.104Z" fill="#01479D" />
              </g>
              <defs>
                <clipPath id="clip0_278_575">
                  <rect width="128" height="127" fill="white" transform="translate(3 1)" />
                </clipPath>
                <clipPath id="clip1_278_575">
                  <rect width="135" height="131" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className='container break-words text-center font-bold md:font-normal lg:font-normal'>O futebol, com sua essência artística, proporciona oportunidades únicas para a formação de cidadãos.</span>
          </div>

          <div className="mt-6 flex flex-row items-center md:flex lg:flex md:flex-col lg:flex-col">
            <svg width="128" height="127" viewBox="0 0 128 127" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M115.787 44.0903C122.453 37.4757 119.413 29.7499 115.787 25.9928L99.7866 10.1178C93.0666 3.50321 85.3333 6.51946 81.5466 10.1178L72.4799 19.1665H58.6666C48.5333 19.1665 42.6666 24.4582 39.6799 30.5436L15.9999 54.0386V75.2053L12.2133 78.9095C5.54661 85.577 8.58661 93.2499 12.2133 97.007L28.2133 112.882C31.0933 115.739 34.1866 116.798 37.1199 116.798C40.9066 116.798 44.3733 114.946 46.4533 112.882L60.8533 98.5415H79.9999C89.0666 98.5415 93.6533 92.9324 95.3066 87.429C101.333 85.8415 104.64 81.2907 105.973 76.8457C114.24 74.729 117.333 66.9503 117.333 61.4999V45.6249H114.187L115.787 44.0903ZM106.667 61.4999C106.667 63.8811 105.653 66.7915 101.333 66.7915H95.9999V72.0832C95.9999 74.4645 94.9866 77.3749 90.6666 77.3749H85.3333V82.6665C85.3333 85.0478 84.3199 87.9582 79.9999 87.9582H56.4799L38.9866 105.315C37.3333 106.849 36.3733 105.95 35.7866 105.368L19.8399 89.5986C18.2933 87.9582 19.1999 87.0057 19.7866 86.4236L26.6666 79.5445V58.3778L37.3333 47.7945V56.2082C37.3333 62.6111 41.5999 72.0832 53.3333 72.0832C65.0666 72.0832 69.3333 62.6111 69.3333 56.2082H106.667V61.4999ZM108.213 36.5761L99.1466 45.6249H58.6666V56.2082C58.6666 58.5895 57.6533 61.4999 53.3333 61.4999C49.0133 61.4999 47.9999 58.5895 47.9999 56.2082V40.3332C47.9999 37.899 48.9066 29.7499 58.6666 29.7499H76.8533L89.0133 17.6849C90.6666 16.1503 91.6266 17.0499 92.2133 17.632L108.16 33.4011C109.707 35.0415 108.8 35.994 108.213 36.5761Z" fill="#01479D" />
            </svg>

            <span className='container break-words text-center font-bold md:font-normal lg:font-normal'>Através do futebol, encontramos uma oportunidade de unir a arte e a formação de cidadãos em um só objetivo.</span>
          </div>

          <div className="mt-6 flex flex-row items-center md:flex lg:flex md:flex-col lg:flex-col">
            <svg width="128" height="127" viewBox="0 0 128 127" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M74.6666 77.3751C74.6666 83.2488 69.9199 87.9584 63.9999 87.9584C61.1709 87.9584 58.4578 86.8434 56.4575 84.8586C54.4571 82.8739 53.3333 80.182 53.3333 77.3751C53.3333 71.5013 58.0799 66.7917 63.9999 66.7917C66.8289 66.7917 69.542 67.9068 71.5424 69.8915C73.5428 71.8763 74.6666 74.5682 74.6666 77.3751ZM69.8133 103.833C70.4533 107.643 71.7866 111.189 73.6533 114.417H31.9999C29.1709 114.417 26.4578 113.302 24.4574 111.317C22.4571 109.332 21.3333 106.64 21.3333 103.833V50.9167C21.3333 45.043 26.0799 40.3334 31.9999 40.3334H37.3333V29.7501C37.3333 15.1451 49.2799 3.29175 63.9999 3.29175C78.7199 3.29175 90.6666 15.1451 90.6666 29.7501V40.3334H95.9999C98.8289 40.3334 101.542 41.4484 103.542 43.4332C105.543 45.418 106.667 48.1099 106.667 50.9167V67.268C104.907 67.0034 103.147 66.7917 101.333 66.7917C99.5199 66.7917 97.7599 67.0034 95.9999 67.268V50.9167H31.9999V103.833H69.8133ZM47.9999 40.3334H79.9999V29.7501C79.9999 20.9659 72.8533 13.8751 63.9999 13.8751C55.1466 13.8751 47.9999 20.9659 47.9999 29.7501V40.3334ZM113.813 81.8201L94.6666 100.817L86.1866 92.4034L79.9999 98.5417L94.6666 114.417L120 89.2813L113.813 81.8201Z" fill="#01479D" />
            </svg>

            <span className='container break-words text-center font-bold md:font-normal lg:font-normal'>A arte do futebol abre portas para oportunidades de formação de cidadãos engajados e conscientes.</span>
          </div>
        </div>
      </div>

      <div className='.mx-auto lg:pl-48 lg:pr-48 lg:pt-20'>

        <div className='flex place-content-center'>
          <div className='bg-mobile flex items-center md:flex md:flex-row-reverse'>
            <div className='bg-image px-10 bg-cover bg-center bg-no-repeat'>
              <h1 className='text-white lg:text-5xl text-2xl md:text-tex-blue mt-10'>MOTIVAÇÃO</h1>
              <br />
              <h2 className='text-tex-blue md:text-black lg:text-6xl text-2xl font-bold text-left break-words uppercase'>Esperança e transformação</h2>
              <br />
              <span className='text-lg text-left break-words lg:text-3xl text-white md:text-black'>No Brasil, conhecido como o país do futebol, esse esporte oferece oportunidades únicas para mudar vidas em comunidades vulneráveis. Para crianças e jovens, o futebol é o esporte dos sonhos, uma chance de transformar suas vidas e de suas famílias.</span>
              <br />
              <a href="/about"><div className='py-3 m-2 mt-12 md:mt-10 text-center lg:text-3xl bg-tex-blue hover:bg-sky-600 ease-in-out duration-300 text-white rounded-xl p-2 text-1xl font-bold cursor-pointer'>LEIA MAIS</div></a>
            </div>

            <div className='aspect-square'>
              <img className='hidden md:block w-full h-full rounded-3xl md:rounded-none' src="/kids-pic.jpg" />
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Home
