'use client'

import TfLogoChill from "./TfLogoChill";
import TfLogoPro from "./TfLogoPro";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Carter_One, Roboto } from "next/font/google";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import DropMenu from "./DropMenu";

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})
const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})

export default function NavBar() {
    const [isDropOpen, setDropOpen] = useState(false)


    function handleClick() {
        setDropOpen(isDropOpen => !isDropOpen)
    }

    return (
        <div className="w-full">
            <div className="absolute flex mt-4 px-6 pr-0 w-screen justify-between text-amber-100 dark:text-zinc-900">
                <div className="dark:hidden">
                <TfLogoPro />
                </div>
                <div className="hidden dark:flex">
                <TfLogoChill />
                </div>
                <div className="hidden sm:flex mr-6">

                {/* Pro theme navigation */}

                <nav className={`${roboto.className} mt-4 flex dark:hidden`}>
                        <Link
                            href={'/'}
                            className="mx-4">Home
                        </Link>
                        <Link
                            href="/#projects-section"
                            className="mx-4">Projects
                        </Link>
                        <Link
                            href="/#about-section"
                            className="mx-4">About
                        </Link>
                        <Link
                            href={'/contact'}
                            className="ml-4">Contact
                        </Link>
                    <span className="mx-4">
                    <ThemeSwitcher />
                    </span>
                </nav>

                {/* Chill theme navigation */}

                <nav className={`${carter.className} mt-4 hidden dark:flex`}>
                        <Link
                            href={'/'}
                            className="mx-4">Home
                        </Link>
                        <Link
                            href="/#projects-section"
                            className="mx-4">Projects
                        </Link>
                        <Link
                            href="/#about-section"
                            className="mx-4">About
                        </Link>
                        <Link
                            href={'/contact'}
                            className="ml-4">Contact
                        </Link>
                    <span className="mx-4">
                    <ThemeSwitcher />
                    </span>
                </nav>
                </div>
                <button
                    onClick={handleClick}
                    className="mr-6 mb-2 sm:hidden">
                <GiHamburgerMenu className="w-6 h-6" />
                </button>
                {isDropOpen && <DropMenu />}
            </div>
</div>

    )
}
