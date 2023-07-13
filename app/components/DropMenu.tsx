import { useState, useEffect, useRef } from 'react';
import Link from "next/link"
import { Carter_One, Roboto } from "next/font/google"
import { ThemeSwitcher } from "./ThemeSwitcher"

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})

const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})

export default function DropMenu() {
    const [isOpen, setIsOpen] = useState(true);
    const node = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current?.contains(e.target as Node)) {
            // inside click
            return;
        }
        // outside click 
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return isOpen ? (
        <div ref={node} className=" sm:hidden absolute h-96 w-56 xs:w-80 bg-amber-100 dark:bg-columbiaBlue-700 rounded-lg right-6 mt-14 z-20">
            <nav className={`${roboto.className} flex flex-col text-center text-zinc-900 m-4 dark:hidden`}>
                <Link href={'/'} className="mx-4 my-5 text-xl">Home</Link>
                <Link href="/#projects-section" className="mx-4 my-5 text-xl" >Projects</Link>
                <Link href="/#about-section" className="mx-4 my-5 text-xl" >About</Link>
                <Link href={'/contact'} className="mx-4 my-5 text-xl">Contact</Link>
                        <ThemeSwitcher />
            </nav>
            <nav className={`${carter.className} hidden dark:flex flex-col text-center text-zinc-900 m-4`}>
                <Link href={'/'} className="mx-4 my-5 text-xl">Home</Link>
                <Link href="/#projects-section" className="mx-4 my-5 text-xl" >Projects</Link>
                <Link href="/#about-section" className="mx-4 my-5 text-xl" >About</Link>
                <Link href={'/contact'} className="mx-4 my-5 text-xl">Contact</Link>
                <ThemeSwitcher />
            </nav>
        </div>
    ) : null;
}
