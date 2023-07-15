import Link from "next/link";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import InfiniteCode from "./InfiniteCode";
import { Roboto } from 'next/font/google';


const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

export default function () { 
    return (
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
    )
}