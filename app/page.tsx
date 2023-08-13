import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Antic_Didone } from 'next/font/google';
import dynamic from 'next/dynamic';

import ProHeroSection from './components/ProHeroSection';
const ChillHeroSection = dynamic(() => import('./components/ChillHeroSection'), {});

const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), {
  ssr: false,
});
const ProAboutSection = dynamic(() => import('./components/ProAboutSection'), {});

const ChillAboutSection = dynamic(() => import('./components/ChillAboutSection'), {});

const SnowFlakeAnimation = dynamic(() => import('./components/SnowFlakeAnimation'), {});

const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})


export default async function Home() {

  return (
    <main className="flex w-full min-h-full flex-col items-center justify-between m-0 bg-zinc-800 dark:bg-mountbattenpink-700">
      <NavBar />
      
      {/* Pro Hero section */}
      {/* Each Section element is there to control the theme with tailwind */}

      <section className={`${mainFont.className}  min-h-screen w-full justify-center flex dark:hidden`}>
        <ProHeroSection/>
      </section>

      {/* Chill Hero Section */}
      <section className={`${mainFont.className} hidden dark:block min-h-screen w-full justify-center`}>
        <div className="absolute z-50">
                    <SnowFlakeAnimation />
                </div>
      <ChillHeroSection/>
      </section>

      {/* Project section */}

      <section tabIndex={0} aria-label='projects section' id='projects-section' className=" min-h-screen w-full bg-amber-100 overflow-hidden dark:bg-columbiaBlue-700">
      
      <ProjectsSection/>

      </section>

      {/* Pro About Section */}
      <section aria-label='about section' id='about-section'>

      <div tabIndex={0} className='h-screen w-full bg-zinc-800 flex dark:hidden flex-col flex-grow justify-center md:flex-row md:justify-between overflow-hidden dark:bg-mountbattenpink-700'>
        
      <ProAboutSection/>

      </div>

      {/* About Section Chill */}

      <div tabIndex={0} className='hidden min-h-screen w-full dark:flex  flex-col justify-center xl:flex-row md:justify-between overflow-hidden dark:bg-mountbattenpink-700'>
        <ChillAboutSection/>

        </div>
      </section>
      <Footer/>
    </main>
  )
}

