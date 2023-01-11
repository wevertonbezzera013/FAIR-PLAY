import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className=''>
        <div className='bg-img'>
          <div className='container pl-10 absolute top-32'>
            <span className=' text-white text-5xl font-bold text-left break-words'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <br />
            <div className='container pt-1'>
              <span className='text-white text-1xl font-thin break-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</span>
            </div>

            <div className='pt-4'>
              <span className='bg-butt-back rounded-full p-2 text-1xl font-bold cursor-pointer'>
                DOE AGORA
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto p-32'>
        <h1 className='text-tex-blue'>O QUE IMPORTA</h1>
        <h2 className='text-5xl font-bold text-left break-words'>LOREM IPSUM DOLOR SIT</h2>
        <br />
        <div className='flex flex-row justify-around'>
          <div>
            <img className="w-40 h-36" src="https://s3-alpha-sig.figma.com/img/6b9c/6a88/7cfac50f98da1421bdedfa0f17d9b536?Expires=1673222400&Signature=nPCvQ7gbQ7HN-FSCerjaIBEqCKB~BeD-N3-vh-sqWhfoTQQEvPJ~cSTHF~9zljnQdZv~yZL~HpQLIO7ZwpXiyNGB7eNtJLQddaoCJIuS48xiSXkdbmu8WII3CFtBBLLPxPhXfnB5JbH967eMmC4C2Rv9Xz8V-8QWNotp7~~RblKomLt~7N~hk~Zu-37oZyRq0ROPOhUsz7c6gY~E4fXbJCSqiGBfMGxrj7I~2FWc8doIyTSN0hHB5WaFUiVi413pFiOoOtshoV-DLly2MCIZDXTAM9qDJe34dAwSHeyhxgJtCu4B1dlpNAxhwhlnetPkJahSptjcf4wdyZFAbxkM3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <span className='container break-words text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>

          <div>
            <img className="w-40 h-36" src="https://s3-alpha-sig.figma.com/img/8c3d/7a7e/32630af7597e7cb69c54c51a5aceedbe?Expires=1673222400&Signature=o7j79oTbwaUeg7s~oudatpdPC-NwNVwWK5~MqSbtX81OmeIvseiUhKYNZZy81367sdD02BYrWWOF4Je46TTCm3d0QcFgJ9~5M86qhmFUzbqDXLPm1ayvXPNfo3QhewRjkz7FjotwqMLzg66e-QJcHSzvS3Sy7q-P9lUebgLneTjXDVn~Agsr7ptRcVwkMt7KoQz2OsRjbUumfEz0bMKEm43dz04JlQWrKzFGWLRGllo5Vpu48pRMhBzavnhz7QGjpizw8gGY1zCXmUSThejeYAxSX3ZHDQLLekLMFxkO0IszMyDAhZ7IYKZbOAovW4ZSLiDXjf1YPSWW1IzLTmMXKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <span className='container break-words text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>

          <div>
            <img className="w-40 h-36" src="https://s3-alpha-sig.figma.com/img/0b10/0b90/5ec78630992a310173d0293845dfde52?Expires=1673222400&Signature=RjehOO4LgyMsZRogMva5EdL0Kl8Aleg0FTF~RjGmw0VZS3tv6RpjYtPyAesHs2o4fNH7IJo3AU6SOikDhiwrqkA0TEn21V5tmOU181n9wkpWmmTW59RLQR43QFTALs7wbzUKKiU98dC1~FGit1vzqAsY~qMCJ5DaqAv2GlsUCquaf8prouvTJuBEobH1aCfRcYl~vRDM9kyJDEXHzS-6Yd1cgaIhRMm9PfC2OMvBh6CWUu0GsIndGL~~bMhElsUqnNody~pqxJeKNZAEwpL9R7Npc5z8t2quWMNcvmVNpZ2ysv1QiYqSinN63NrNf2z4TUeaEl-Gj7YlzulgtDrXmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <span className='container break-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
        </div>
      </div>

      <div className='px-32 py-5 flex flex-row-reverse'>

        <div className='px-10'>
          <h1 className='text-tex-blue'>SOBRE NÓS</h1>
          <br />
          <h2 className='text-5xl font-bold text-left break-words'>LOREM IPSUM</h2>
          <br />
          <span className='text-left break-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
          <br />
          <div className='py-3 m-2 text-center bg-tex-blue text-white rounded-full p-2 text-1xl font-bold cursor-pointer'>LEIA MAIS</div>
        </div>

        <div className='aspect-square'>
          <img className='w-full h-full' src="https://s3-alpha-sig.figma.com/img/a1c2/268d/b06ddcd6bee990ed1da7691de7c9ff24?Expires=1674432000&Signature=ghoqz~~hEXsRHiuNNzwv9zVdpvwalRxfsLjkMAm~bUAs1eM9O~l~l4JMbPvs3ruex-IwvJdStXXb58mD0JKnBYIoYTHI~FD~c-CI9AZ3k~IQ8EA5S60SkLOyU3HDiNW6hssIwuSuDB8vvH1KWdq9AH7RqtTn6slIXyEIQ5~LBbf248LYbaAVEq00X970SLH2jfKx2-OYSU9R~dShnyDLIS1WnomEZidXu5JQal45BAzYeqp4Z~0QZulo6rZfHk8JHj865k7OUTPZfbwfLeBrnwiTJm6WH9dOH30Pq9PfwPCTG-Z2AzHwqUP9YmhZ7~f994uvZfAWTYGk7IkA1FP0MA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </div>
      </div>
    </div>
  )
}

export default Home
