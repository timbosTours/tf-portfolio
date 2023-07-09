import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from '@portabletext/react'
import NavBar from "@/app/components/NavBar";

type Props = {
    params: {project: string}
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    
    return <div className="bg-zinc-800 h-screen ">
        <NavBar/>
        <div className="flex flex-col lg:flex-row h-screen pt-20">
            <div className="w-1/2 mx-auto my-auto">
                <Image src={project.image} alt="project Image" height={540} width={960} className="lg:ml-4"></Image>
            </div>
            <div className="w-1/2 my-auto mx-auto text-center lg:text-left lg:px-10">
                <h1 className="">{ project.name }</h1>
                <div className="my-10"><PortableText value={project.content} /></div>
                {project.url && <a href={`${project.url}`} title="View Project" target="_blank" rel="noopener noreferrer">
                View Project
            </a>}
            </div>
        </div>
    </div>
}