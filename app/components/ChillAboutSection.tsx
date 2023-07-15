import Image from "next/image"
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiCss3, SiSass } from "react-icons/si"
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin']
})


export default function ChillAboutSection() {
    return (
        <>
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
        </>
    )
}