import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import ComputerImage from "./ComputerImage";
import { Carter_One } from 'next/font/google';
import { Roboto } from 'next/font/google';

const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

export default function ChillHeroSection() {
    return (
        <>
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
        </>
    )
}