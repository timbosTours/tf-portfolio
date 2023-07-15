import ProjectsSlider from "./ProjectsSlider";
import { Antic_Didone } from 'next/font/google';
import { Carter_One} from 'next/font/google';

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

            <h2
                tabIndex={0}
                className={`${mainFont.className} dark:hidden flex justify-center text-4xl md:text-6xl mt-14 mb-40 md:mb-30 lg:mb-20 text-zinc-800`}>
                Projects
                </h2>
            
            {/* Chill Heading */}
                
            <h2
                tabIndex={0}
                className={`${carter.className} hidden dark:flex justify-center text-4xl md:text-6xl mt-14 mb-40 md:mb-30 lg:mb-20 text-zinc-800`}>
                Projects
            </h2>

            <ProjectsSlider />
        </>
    )
}