'use client'

import TfLogoChill from "./TfLogoChill";
import TfLogoPro from "./TfLogoPro";
import Link from "next/link";
import { ThemeSwitcher } from './ThemeSwitcher'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin']
})

export default function NavBar() {


    return (
        <div  className="w-full">
        <div className="absolute flex mt-4 px-4 pr-0 w-screen justify-between text-amber-100">
            <div>
                <TfLogoPro />
            </div>
            <nav className={`${roboto.className} flex m-4 font`}>
                <Link href={'/'} className="mx-4">About</Link>
                <Link href={'/'} className="mx-4">Contact</Link>
                    <span className="mx-4">
                        <ThemeSwitcher />
                    </span>
            </nav>
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