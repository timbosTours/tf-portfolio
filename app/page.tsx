import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Antic_Didone } from 'next/font/google';
import { Carter_One} from 'next/font/google';
import { Roboto } from 'next/font/google';
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
import ComputerImage from './components/ComputerImage';
import ProHeroSection from './components/ProHeroSection';
import ChillHeroSection from './components/ChillHeroSection';
import ProjectsSection from './components/ProjectsSection';

const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin']
})

const carter = Carter_One({
  weight: ['400'],
  subsets: ['latin']
})



export default async function Home() {

  return (
    <main className="flex w-full min-h-full flex-col items-center justify-between m-0 bg-zinc-800 dark:bg-mountbattenpink-700">
      <NavBar />
      
      
      {/* Pro Hero section */}
      <section className={`${mainFont.className}  min-h-screen w-full justify-center flex dark:hidden`}>
        <ProHeroSection/>
      </section>


      {/* Chill Hero Section */}
      <section className={`${mainFont.className} hidden dark:block min-h-screen w-full justify-center`}>
      <ChillHeroSection/>
      </section>

      
      {/* Project section */}

      <section tabIndex={0} aria-label='projects section' id='projects-section' className=" min-h-screen w-full bg-amber-100 overflow-hidden dark:bg-columbiaBlue-700">
      
      <ProjectsSection/>

      </section>

      {/* Pro About Section */}

      <section tabIndex={0} aria-label='about section' id='about-section' className='h-screen w-full bg-zinc-800 flex dark:hidden flex-col flex-grow justify-center md:flex-row md:justify-between overflow-hidden dark:bg-mountbattenpink-700'>
        <div className='m-4 md:ml-20 mx-auto md:w-2/5 mt-10 md:mt-40 h-1/2 md:h-full'>
          <Image src={'/webDevDisplay1.jpeg'} alt={'Timothy Fawcett'} height={200} width={200} className='mx-auto lg:ml-16 rounded-full scale-50 md:scale-100 filter sepia contrast-75 brightness-90 md:mb-10'></Image>
          <p tabIndex={0} className={`${mainFont.className} text-amber-100 mx-6 text-xs xs:text-sm md:text-md xl:text-xl text-center md:text-left`}>G'day, I'm Tim! A self-taught developer working remotely from beautiful Northern Tasmania. Before discovering my love for web development, I spent most of my life traveling and working in a wide variety of industries and jobs, primarily in marine tourism, hospitality, and wine, with plenty of hard yakka to get by along the way. I am currently diving deep into design and SEO and am always open to learning new tech! <br /> <br/> I am currently building with...</p>
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

      {/* About Section Chill */}

      <section tabIndex={0} aria-label='about section' id='about-section' className='hidden min-h-screen w-full dark:flex  flex-col justify-center xl:flex-row md:justify-between overflow-hidden dark:bg-mountbattenpink-700'>
        <div className='mx-auto lg:mt-24'>
                <div className="mx-auto xs:mt-10 mb-10 relative w-48 h-48 rounded-full overflow-hidden">
        <Image src="/webDevImageBlueBG.png" alt="Timothy Fawcett" height={200} width={200} className="absolute w-full h-full object-cover "/>
        <div className="absolute w-full h-full bg-columbiaBlue-900 opacity-20"></div>
          </div>
          
          <p tabIndex={0} className={`${roboto.className} text-zinc-800 max-w-xl mx-12 pb-4 text-xs xs:text-sm md:text-lg text-center xl:text-left`}>G'day, I'm Tim! A self-taught developer working remotely from beautiful Northern Tasmania. Before discovering my love for web development, I spent most of my life traveling and working in a wide variety of industries and jobs, primarily in marine tourism, hospitality, and wine, with plenty of hard yakka to get by along the way. I am currently diving deep into design and SEO and am always open to learning new tech! <br /> <br /> I am currently building with...</p>
        </div>
          <div className="flex flex-row my-40 md:my-auto mx-auto">
            <SiNextdotjs className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-1'/>
            <SiReact className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-2'/>
            <SiTypescript className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-3'/>
            <SiJavascript className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-4'/>
            <SiHtml5 className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-5'/>
            <SiTailwindcss  className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-6'/>
            <SiCss3 className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-7'/>
            <SiSass tabIndex={0} className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-8'/>
          </div>


      </section>
      <Footer/>
    </main>
  )
}

