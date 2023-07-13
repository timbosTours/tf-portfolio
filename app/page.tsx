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
      
      
      {/* Pro first section */}
      <section className={`${mainFont.className}  min-h-screen w-full justify-center flex dark:hidden`}>
        <div className='flex flex-col  mt-44 dark:block dark:ml-24 dark:mt-56'>
          <h1 tabIndex={0} className={`dark:hidden text-amber-100 text-2xl xs:text-4xl mx-auto sm:text-6xl md:text-7xl xl:text-9xl border-b-2 border-b-amber-100 font-light`}>TIMOTHY FAWCETT</h1>
        <br />
        <h2 tabIndex={0} className=" text-2xl md:text-5xl xl:text-7xl text-amber-100 mx-auto mt-4 dark:hidden"> Web Developer</h2>
        <p tabIndex={0} className={`${roboto.className} text-xs md:text-base font-light text-amber-100 mx-auto mt-4 `}>Building where the possibilities are infinite.</p>
        <span className='mx-auto mt-4 scale-75 dark:hidden'>
          <InfiniteCode />
        </span>
        <Link href={'/contact'} className={`${roboto.className} mx-auto mt-28 text-amber-100 border-2 border-amber-100 py-2 px-4 text-2xl rounded-sm hover:animate-bounce`}>Lets Talk!</Link>
        <span className='flex justify-center mt-16'>
          
          <p tabIndex={0} aria-label='Location Tasmania, Australia' className={`${roboto.className} text-amber-100 font-light`}>Tasmania, Australia</p>
          <span className='flex flex-row ml-4'>
            <Link aria-label='github account' href={'https://github.com/timbosTours'} target="_blank"><AiOutlineGithub className='fill-amber-100 mx-2 h-6 w-6'/></Link>
            <Link aria-label='linkedin account' href={'https://www.linkedin.com/in/timothyfawcett89/'} target="_blank"><AiFillLinkedin className='fill-amber-100 mx-2 h-6 w-6'/></Link>
            <Link aria-label='twitter account' href={'https://twitter.com/timbosTours'} target="_blank"><AiOutlineTwitter className='fill-amber-100 mx-2 h-6 w-6'/></Link>
          </span>
        </span>
      </div>
      </section>


      {/* Chill First Section */}
<section className={`${mainFont.className} hidden dark:block min-h-screen w-full justify-center`}>
  <div className='flex flex-row justify-between min-h-screen pt-44 pl-10 sm:pl-28 overflow-hidden'>
          <div className='flex flex-col sm:flex-row justify-between'>
            <div>
      <h1 tabIndex={0} className={`${roboto.className} hidden dark:block mx-auto text-zinc-800 font-medium lg:text-lg`}>Hello friends, I'm Tim</h1>
              <h2 tabIndex={0} className={`${roboto.className}  hidden dark:block text-2xl xs:text-3xl lg:text5xl xl:text-7xl text-zinc-800 mx-auto mt-4`}>A Web <span tabIndex={0} className={`${carter.className} bg-gradient-to-t from-white via-columbiaBlue-500 to-columbiaBlue-700 bg-clip-text text-transparent text-3xl xs:text-4xl lg:text6xl xl:text-8xl`}>Developer</span></h2>
      <p tabIndex={0} className={`${roboto.className} font-medium lg:text-lg text-zinc-800 mx-auto mt-4 `}>Building where the possibilities are infinite.</p>
      <br className='xs:mb-8 sm:mb-44'/>
            <Link href={'/contact'} className={`${carter.className} bg-gradient-to-t from-white  via-columbiaBlue-500 to-columbiaBlue-700 bg-clip-text text-transparent py-2 px-4 mt-auto xl:mt-40 text-2xl lg:text-5xl rounded-lg hover:animate-pulse border-2 border-zinc-800`}>Reach Out!</Link>
            </div>
            <div className='max-w-2xl pr-8 -ml-24 xs:m-4 sm:-ml-16 sm:mt-24 md:ml-20 lg:ml-40 xl:absolute xl:right-24 scale-75 md:scale-100 lg:scale-125 xl:scale-150 overflow-hidden' >
              
              <ComputerImage />
            </div>
    </div>
  </div>
    <span className='flex justify-center mb-10 '>
      <p tabIndex={0} aria-label='location, Tasmania, Australia' className={`${roboto.className} text-zinc-800`}>Tasmania, Australia</p>
      <span className='flex flex-row sm:ml-4'>
        <Link aria-label='github account' href={'https://github.com/timbosTours'} target="_blank"><AiOutlineGithub className='fill-zinc-800 mx-2 h-6 w-6'/></Link>
        <Link aria-label='linkedin account' href={'https://www.linkedin.com/in/timothyfawcett89/'} target="_blank"><AiFillLinkedin className='fill-zinc-800 mx-2 h-6 w-6'/></Link>
        <Link aria-label='twitter account' href={'https://twitter.com/timbosTours'} target="_blank"><AiOutlineTwitter className='fill-zinc-800 mx-2 h-6 w-6'/></Link>
      </span>
    </span>
      </section>
      
      {/* Project section */}

      <section tabIndex={0} aria-label='projects section' id='projects-section' className="min-h-screen w-full bg-amber-100 overflow-hidden dark:bg-columbiaBlue-700">
      <h2 tabIndex={0} className={`${mainFont.className} dark:hidden flex justify-center text-4xl md:text-6xl mt-14 mb-40 md:mb-30 lg:mb-20 text-zinc-800`}>
        Projects
        </h2>
      <h2 tabIndex={0} className={`${carter.className} hidden dark:flex justify-center text-4xl md:text-6xl mt-14 mb-40 md:mb-30 lg:mb-20 text-zinc-800`}>
        Projects
        </h2>

          <ProjectsSlider />

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
        <Image src="/webDevDisplay2.png" alt="Timothy Fawcett" height={200} width={200} className="absolute w-full h-full object-cover "/>
        <div className="absolute w-full h-full bg-columbiaBlue-900 opacity-50"></div>
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

