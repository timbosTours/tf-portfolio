'use client'

import Image from "next/image"
import { useEffect, useRef } from "react";
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiCss3, SiSass } from "react-icons/si"
import { Roboto } from 'next/font/google';
import { motion, useAnimation, useInView } from "framer-motion";

const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin']
})

export default function ChillAboutSection() {
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
            animation1.start({ y: 0, opacity: 1, transition: { delay: 0 } });
        }
        if (inView2) {
            animation2.start({ y: 0, opacity: 1, transition: { delay: 0.1 } });
        }
        if (inView3) {
            animation3.start({ y: 0, opacity: 1, transition: { delay: 0.2 } });
        }
        if (inView4) {
            animation4.start({ y: 0, opacity: 1, transition: { delay: 0.5 } });
        }
    }, [inView1, inView2, inView3, inView4, animation1, animation2, animation3, animation4]);

    return (
        <>
            <div className='mx-auto lg:mt-24'>
                <motion.div ref={ref1}
                    initial={{ y: 50, opacity: 0 }}
                    animate={animation1}
                    className="mx-auto xs:mt-10 mb-10 relative w-48 h-48 rounded-full overflow-hidden">
                    <Image
                        src="/8bit-snowboarder-blueBg.png"
                        alt="Timothy Fawcett"
                        height={200}
                        width={200}
                        className="absolute w-full h-full object-cover " />
                    <div className="absolute w-full h-full bg-columbiaBlue-900 opacity-20">
                    </div>
                </motion.div>

                <motion.p ref={ref2}
                    initial={{ y: 50, opacity: 0 }}
                    animate={animation2}
                    tabIndex={0}
                    className={`${roboto.className} text-zinc-800 max-w-xl mx-12 pb-4 text-xs xs:text-sm md:text-lg text-center xl:text-left`}>
                    G&apos;day, I&apos;m Tim! A self-taught developer working remotely from beautiful Northern Tasmania. Before discovering my love for web development, I spent most of my life traveling and working in a wide variety of industries and jobs, primarily in marine tourism, hospitality, and wine, with plenty of hard yakka to get by along the way. I am currently diving deep into design and SEO and am always open to learning new tech! 
                </motion.p>
                <br />
                <br /> 
                <motion.p ref={ref3}
                    initial={{ y: 50, opacity: 0 }}
                    animate={animation3}
                    className={`${roboto.className} text-zinc-800 max-w-xl mx-12 pb-4 text-base xs:text-lg md:text-xl text-center xl:text-left`}>
                    I am currently building with...
                </motion.p>
            </div>
            <motion.div ref={ref4}
                    initial={{ y: 50, opacity: 0 }}
                    animate={animation4}
                    className="flex flex-row my-40 md:my-auto mx-auto">
                <SiNextdotjs className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-1'/>
                <SiReact className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-2'/>
                <SiTypescript className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-3'/>
                <SiJavascript className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-4'/>
                <SiHtml5 className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-5'/>
                <SiTailwindcss  className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-6'/>
                <SiCss3 className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-7'/>
                <SiSass
                    tabIndex={0}
                    className='h-8 w-8 lg:h-16 sm:w-16 mx-2 fill-columbiaBlue-700 animate-bounce-delay-8' />
            </motion.div>
        </>
    )
}
