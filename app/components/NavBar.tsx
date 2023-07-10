'use client'

import TfLogoChill from "./TfLogoChill";
import TfLogoPro from "./TfLogoPro";
import Link from "next/link";
import { ThemeSwitcher } from './ThemeSwitcher'
import { Roboto } from "next/font/google";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import DropMenu from "./DropMenu";

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

export default function NavBar() {
    const [isDropOpen, setDropOpen] = useState(false)


    function handleClick() {
        setDropOpen(isDropOpen => !isDropOpen)
    }

    return (
        <div  className="w-full">
        <div className="absolute flex mt-4 px-6 pr-0 w-screen justify-between text-amber-100">
            <div>
                <TfLogoPro />
            </div>
            <nav className={`${roboto.className} mt-4 font hidden sm:flex`}>
                <Link href={'/'} className="mx-4">Home</Link>
                <Link href="/#projects-section" className="mx-4" >Projects</Link>
                <Link href="/#about-section" className="mx-4" >About</Link>
                <Link href={'/contact'} className="ml-4">Contact</Link>
                    <span className="mx-4">
                        {/* <ThemeSwitcher /> */}
                    </span>
                </nav>
                <button onClick={handleClick} className="mr-6 mb-2 sm:hidden">
                    <GiHamburgerMenu  className="w-6 h-6"/>
                </button>
                { isDropOpen && <DropMenu/> }
        </div>
        {/* <div className="w-screen m-2 flex justify-between px-4 absolute dark:hidden">
            <div>
                <TfLogo />
            </div>
            <nav>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
            </nav>
            <ThemeSwitcher/>
            </div> */}
        </div>
    )
}

{/* <div className="w-screen m-2 flex justify-between px-4 absolute dark:hidden">
    <div>
        <TfLogo />
    </div>
    <nav>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contact</Link>
    </nav>
    <ThemeSwitcher/>
    </div> */}