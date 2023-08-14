'use client'

import Image from "next/image";
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss } from "react-icons/si";
import { Antic_Didone } from 'next/font/google';
import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'


const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})
        

export default function ProAboutSection() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });
    const inView4 = useInView(ref4, { once: true });

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    

    useEffect(() => {
        if (inView1) {
            animation1.start({ x: 0, opacity: 1, transition: { delay: 0 } });
        }
        if (inView2) {
            animation2.start({ x: 0, opacity: 1, transition: { delay: 0.1 } });
        }
        if (inView3) {
            animation3.start({ x: 0, opacity: 1, transition: { delay: 0.2 } });
        }
        if (inView4) {
            animation4.start({ x: 0, opacity: 1, transition: { delay: 0.5 } });
        }
    }, [inView1, inView2, inView3, inView4, animation1, animation2, animation3, animation4]);
    return (
        <div className="min-h-screen flex flex-col md:flex-row ">
            <div className='relative m-4 md:ml-20 mx-auto md:w-2/5 mt-10 md:mt-40 align-middle h-1/2 md:h-full'>
                <motion.div ref={ref1}
                    initial={{ x: -50, opacity: 0}}
                    animate={animation1}
                    className=""
                >
                <Image
                    src={'/webDevDisplay.webp'} alt={'Timothy Fawcett'}
                    height={200}
                    width={200} className='mx-auto lg:ml-16 rounded-full scale-50 md:scale-100 filter sepia contrast-75 brightness-90 md:mb-10'>
                    </Image>
                </motion.div>
                <motion.p ref={ref2}
                    initial={{ x: -50, opacity: 0}}
                    animate={animation2}
                    tabIndex={0}
                    className={`${mainFont.className} text-amber-100 mx-6 text-xs xs:text-sm md:text-md xl:text-xl text-center md:text-left`}>G&apos;day, I&apos;m Tim! A web developer/designer from beautiful Northern Tasmania. I use modern technology to craft digital experiences that will make brands stand out! I build websites that are responsive, accessible, and built with an emphasis on performance and SEO. I&apos;m open to both freelance collaborations and contributing to a progressive team environment. If you&apos;re seeking a blend of innovation and efficiency, whether for a team or a project, let&apos;s connect and create unparalleled digital solutions together
                    <br />
                    <motion.br ref={ref3}
                        initial={{ x: -50, opacity: 0 }}
                        animate={animation3}
                    /> I am currently building with...
                </motion.p>
            </div>
            <div className="relative md:w-1/3 h-2/3 w-2/3 rounded-full scale-50 sm:scale-75 md:scale-50 lg:scale-90 xl:scale-100 mx-auto md:my-auto">
                <motion.span ref={ref4}
                    initial={{ x: -50, opacity: 0, scale: 0.1 }}
                animate={animation4}
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
            </div>
        </div>
    )
}