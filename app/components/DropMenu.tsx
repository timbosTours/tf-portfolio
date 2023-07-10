import Link from "next/link"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

export default function DropMenu() {


    return (
        <div className=" sm:hidden absolute h-80 w-44 xs:w-64 bg-amber-100 rounded-lg right-6 mt-14 z-20">
            <nav className={`${roboto.className} flex flex-col text-center text-zinc-900 m-4`}>
                <Link href={'/'} className="mx-4 my-5 text-xl">Home</Link>
                <Link href="/#projects-section" className="mx-4 my-5 text-xl" >Projects</Link>
                <Link href="/#about-section" className="mx-4 my-5 text-xl" >About</Link>
                <Link href={'/contact'} className="mx-4 my-5 text-xl">Contact</Link>
                    <span className="mx-4">
                        {/* <ThemeSwitcher /> */}
                    </span>
            </nav>
        </div>
    )
}