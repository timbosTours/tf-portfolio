'use client'

import Image from "next/image"
import { useEffect, useRef } from "react";
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiCss3, SiSass } from "react-icons/si"
import { Roboto } from 'next/font/google';
import { motion, useAnimation, useInView } from "framer-motion";

const roboto = Roboto({
    weight: ['400'],
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
                        src="/8bit-snowboarder-blueBg.webp"
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
                    G&apos;day, I&apos;m Tim! When I&apos;m not using the latest tech to create beautiful, interactive web experiences that have excellent performance, accessibility and SEO. I like to get outdoors, I love playing in the snow, playing my guitar, and going on adventures with my cats, Vino & Zola! Prior to finding my love of web design/development, I spent my life traveling, working in mostly Tourism and Hospitality. I am always looking to connect with like-minded people who are passionate about creating memorable web experiences.
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
