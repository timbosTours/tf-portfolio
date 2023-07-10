import Link from "next/link"
import { Roboto } from "next/font/google";
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

export default function Footer() {
    return (<>
        <footer className="h-96 w-screen bg-zinc-900">
            <nav className={`${roboto.className} pt-5 flex flex-col text-center`}>
                <Link href={'/'} className="my-5 text-amber-100">Home</Link>
                <Link href="/#projects-section" className="my-5 text-amber-100">Projects</Link> 
                <Link href="/#about-section" className="my-5 text-amber-100" >About</Link>
                <Link href={'/contact'} className="my-5 text-amber-100">Contact</Link>
            </nav>
            <div className='flex flex-row justify-center mt-8'>
            <Link href={'https://github.com/timbosTours'} target="_blank"><AiOutlineGithub className='fill-amber-100 mx-2 h-6 w-6'/></Link>
            <Link href={'https://www.linkedin.com/in/timothyfawcett89/'} target="_blank"><AiFillLinkedin className='fill-amber-100 mx-2 h-6 w-6'/></Link>
            <Link href={'https://twitter.com/timbosTours'} target="_blank"><AiOutlineTwitter className='fill-amber-100 mx-2 h-6 w-6'/></Link>
            </div>
        </footer>
    </>)
}