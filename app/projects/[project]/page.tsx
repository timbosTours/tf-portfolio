import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from '@portabletext/react'
import NavBar from "@/app/components/NavBar";
import { Antic_Didone, Carter_One } from "next/font/google";
import { Roboto } from "next/font/google";
import Footer from "@/app/components/Footer";

const mainFont = Antic_Didone({
    weight: ['400'],
    subsets: ['latin']
})

const carter = Carter_One({
    weight: ['400'],
    subsets: ['latin']
})

const roboto = Roboto({
  weight: ['300', '400'],
  subsets: ['latin']
})

type Props = {
    params: {project: string}
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    
    return <div className="bg-zinc-800 min-h-screen dark:bg-mountbattenpink-700">
        <NavBar/>
        <div className="flex flex-col lg:flex-row min-h-screen pt-20">
            <div className="w-1/2 mx-auto my-auto">
                <Image src={project.image} alt="project Image" height={540} width={960} className="md:ml-8 mt-10 lg:mt-0"></Image>
            </div>
            <div className="w-1/2 my-auto mx-auto text-center lg:text-left lg:px-10 xl:px-28">

                {/* pro theme */}
                
                <h1 className={`${roboto.className} dark:hidden text-amber-100 text-lg sm:text-3xl md:text-4xl lg:text-5xl`}>{project.name}</h1>
                <div className={`${mainFont.className} dark:hidden text-amber-100 my-10` }><PortableText value={project.content} /></div>
                {project.url && <a href={`${project.url}`} title="View Project" target="_blank" rel="noopener noreferrer" className={`${roboto.className} dark:hidden text-amber-100 underline `}>
                View Project
            </a>}
                
                {/* chill theme */}

                <h1 className={`${carter.className} hidden dark:block bg-gradient-to-t from-white via-columbiaBlue-500 to-columbiaBlue-700 bg-clip-text text-transparent text-lg sm:text-3xl md:text-4xl lg:text-5xl`}>{project.name}</h1>


                <div className={`${roboto.className} hidden dark:block text-zinc-800 my-10` }><PortableText value={project.content} /></div>
                {project.url && <a href={`${project.url}`} title="View Project" target="_blank" rel="noopener noreferrer" className={`${roboto.className} hidden dark:block text-zinc-800 underline `}>
                View Project
            </a>}
            </div>
        </div>
        <Footer/>
    </div>
}