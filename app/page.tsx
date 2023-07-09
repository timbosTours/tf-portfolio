import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Antic_Didone} from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Carter_One } from 'next/font/google';
import InfiniteCode from './components/InfiniteCode';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import {SiNextdotjs} from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiTypescript} from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiSass } from 'react-icons/si'
import ProjectsSlider from './components/ProjectsSlider';
import { Suspense } from 'react';
import Loading from './components/Loading';

const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})

const roboto = Roboto({
  weight: ['300', '400'],
  subsets: ['latin']
})

const carter = Carter_One({
  weight: '400',
  subsets: ['latin']
})



export default async function Home() {

  return (
    <main className="flex w-full min-h-full flex-col items-center justify-between m-0 bg-zinc-800 dark:bg-mountbattenpink-700">
      <NavBar/>

      <section className={`${mainFont.className}  h-screen w-full justify-center flex`}>
        <div className='flex flex-col mt-44'>
        <h1 className={` text-amber-100 text-2xl xs:text-4xl mx-auto sm:text-6xl md:text-7xl xl:text-9xl border-b-2 border-b-amber-100 font-light`}>TIMOTHY FAWCETT</h1>
        <br />
        <h2 className="text-2xl md:text-5xl xl:text-7xl text-amber-100 mx-auto mt-4"> Web Developer</h2>
        <p className={`${roboto.className} text-xs md:text-base font-light text-amber-100 mx-auto mt-4`}>Building where the possibilities are infinite.</p>
        <span className='mx-auto mt-4 scale-75 dark:hidden'>
          <InfiniteCode />
        </span>
        <Link href={'/contact'} className={`${roboto.className} mx-auto mt-28 text-amber-100 border-2 border-amber-100 py-2 px-4 text-2xl rounded-sm hover:animate-bounce`}>Lets Talk!</Link>
        <span className='flex justify-center mt-24 '>
          
          <p className={`${roboto.className} text-amber-100 font-light`}>Tasmania, Australia</p>
          <span className='flex flex-row ml-4'>
            <AiOutlineGithub className='fill-amber-100 mx-2 h-6 w-6'/>
            <AiFillLinkedin className='fill-amber-100 mx-2 h-6 w-6'/>
            <AiOutlineTwitter className='fill-amber-100 mx-2 h-6 w-6'/>
          </span>
        </span>
      </div>
      </section>

      <section id='projects-section' className="h-screen w-full bg-amber-100 overflow-hidden">
      <h2 className={`${mainFont.className} flex justify-center text-4xl md:text-6xl mt-14 mb-40 md:mb-30 lg:mb-20 underline text-zinc-800`}>
        Projects
        </h2>
        <Suspense fallback={<Loading/>}>
          <ProjectsSlider />
        </Suspense>
    </section>

      <section id='about-section' className='h-screen w-full bg-zinc-800 flex  flex-col justify-center md:flex-row md:justify-between overflow-hidden'>
        <div className='m-4 md:ml-20 mx-auto md:w-2/5 mt-10 md:mt-40 h-1/2 md:h-full'>
          <Image src={'/webDevDisplay.jpeg'} alt={'Timothy Fawcett'} height={200} width={200} className='mx-auto lg:ml-16 rounded-full scale-50 md:scale-100 filter sepia contrast-75 brightness-90 md:mb-10'></Image>
          <p className={`${mainFont.className} text-amber-100 mx-6 text-xs xs:text-sm md:text-md xl:text-xl text-center md:text-left`}>G'day, I'm Tim! A self-taught developer working remotely from beautiful Northern Tasmania. Before discovering my love for web development, I spent most of my life traveling and working in a wide variety of industries and jobs, primarily in marine tourism, hospitality, and wine, with plenty of hard yakka to get by along the way. I am currently diving deep into design and SEO and am always open to learning new tech! <br /> <br /> I am currently building with...</p>
        </div>
        <div className="relative h-2/5 sm:h-2/3 w-2/3 rounded-full my-auto scale-50 sm:scale-75 lg:scale-100 mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-zinc-800 to-zinc-800 blur-3xl rounded-full">
          </div>
          <div className="absolute inset-0 flex justify-center items-center animate-spin-slow">
            {[...Array(8)].map((_, i) => {
              const Icon = [SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss][i];
              const rotate = (i * (360 / 8)) - 90;
              return (
                <div key={i} className="absolute w-1/3 h-full flex justify-center" style={{ transform: `rotate(${rotate}deg)` }}>
                  <Icon className=' fill-amber-100 h-16 w-16 animate-bounce'/>
                </div>
              )
            })}
          </div>
        </div>


      </section>
      <Footer/>
    </main>
  )
}

