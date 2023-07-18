'use client'

import Image from "next/image";
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss } from "react-icons/si";
import { Antic_Didone } from 'next/font/google';
import {motion} from 'framer-motion'

const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})
        

export default function ProAboutSection() {
    return (
        <>
            <div className='m-4 md:ml-20 mx-auto md:w-2/5 mt-10 md:mt-40 h-1/2 md:h-full'>
                <motion.div
                    initial={{ x: -50, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ delay: 0.2 }}
                    className=""
                >
                <Image
                    src={'/webDevDisplay1.jpeg'} alt={'Timothy Fawcett'}
                    height={200}
                    width={200} className='mx-auto lg:ml-16 rounded-full scale-50 md:scale-100 filter sepia contrast-75 brightness-90 md:mb-10'>
                    </Image>
                </motion.div>
                <motion.p
                    initial={{ x: -50, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{delay: 0.4}}
                    tabIndex={0}
                    className={`${mainFont.className} text-amber-100 mx-6 text-xs xs:text-sm md:text-md xl:text-xl text-center md:text-left`}>G'day, I'm Tim! A self-taught developer working remotely from beautiful Northern Tasmania. Before discovering my love for web development, I spent most of my life traveling and working in a wide variety of industries and jobs, primarily in marine tourism, hospitality, and wine, with plenty of hard yakka to get by along the way. I am currently diving deep into design and SEO and am always open to learning new tech!
                    <br />
                    <motion.br
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{delay: 0.6}}
                    /> I am currently building with...
                </motion.p>
            </div>
            <span className="relative h-2/5 sm:h-2/3 w-2/3 rounded-full my-auto scale-50 sm:scale-75 lg:scale-100 mx-auto">
            <motion.span
                animate={{ scale: [0, 1.5, 1], }}
                transition={{delay: 1}}
                >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-zinc-800 to-zinc-800 blur-3xl rounded-full">
            </div>
            <div className="absolute inset-0 flex justify-center items-center animate-spin-slow">
                {[...Array(8)].map((_, i) => {
                const Icon = [SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss][i];
                const rotate = (i * (360 / 8)) - 90;
                return (
                    <div key={i} className="absolute w-1/3 h-full flex justify-center" style={{ transform: `rotate(${rotate}deg)` }}>
                    <Icon className=' fill-amber-100 h-16 w-16 animate-bounce'/>
                    </div>
                )
                })}
            </div>
                </motion.span>
            </span>
        </>
    )
}