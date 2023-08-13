'use client'


import { Antic_Didone } from 'next/font/google';
import { Carter_One } from 'next/font/google';
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ProjectsSlider = dynamic(() => import('./ProjectsSlider'), {
    loading: () => <h3>Loading Projects...</h3>
});


const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})

const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})


export default function ProjectsSection() {
    
    return (
        <>
            {/* Pro Heading */}

            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                tabIndex={0}
                className={`${mainFont.className} dark:hidden flex justify-center text-4xl md:text-6xl mt-14 mb-40 md:mb-30 lg:mb-20 text-zinc-800`}>
                Projects
                </motion.h2>
            
            {/* Chill Heading */}
                
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                tabIndex={0}
                className={`${carter.className} hidden dark:flex justify-center text-4xl md:text-6xl mt-14 mb-40 md:mb-30 lg:mb-20 text-zinc-800`}>
                Projects
            </motion.h2>

                <ProjectsSlider />
        </>
    )
}