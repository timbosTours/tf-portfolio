'use client'

import React, { useEffect, useState } from "react";
import "../globals.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';


// Define a type for your project data
type Project = {
    _id: string;
    url: string;
    image: string;
    name: string;
    slug: string
};
    

const carousel: KeenSliderPlugin = (slider) => {
    const z = window.innerWidth * 1;
    function rotate() {
        // Check if slider.track.details is not null before using it
        if (slider.track && slider.track.details) {
            const deg = 360 * slider.track.details.progress;
            slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
        }
    }
    slider.on("created", () => {
        // Check if slider.slides is not null before using it
        if (slider.slides) {
            const deg = 360 / slider.slides.length;
            slider.slides.forEach((element, idx) => {
                element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
            });
        }
        rotate();
    });
    slider.on("detailsChanged", rotate);
};



export default function ProjectsSlider() {
    const [projects, setProjects] = useState<Project[]>([]);
    const { scrollYProgress } = useScroll()
    const rotateZ = useTransform(scrollYProgress, [0.1, 0.4275, 1], [90, 0, -90]);
    const rotateX = useTransform(scrollYProgress, [0.1, 0.4275, 1], [90, 0, -90]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
        loop: true,
        selector: ".carousel__cell",
        renderMode: "custom",
            mode: "snap",
        },
        [carousel]
    );

    // Fetch your data
    useEffect(() => {
        const fetchData = async () => {
        const data = await getProjects();
        setProjects(data);
        };

        fetchData();
    }, []);

    return (
        <motion.div style={{rotateZ, rotateX, scale}} key={projects.length} className="wrapper ">
            <div className="scene">
                <div className="carousel keen-slider " ref={sliderRef}>
                    {projects.map((project) => (
                        <div key={project._id} className="carousel__cell ">
                        <a href={`projects/${project.slug}`}>
                                <Image
                                    className="rounded-3xl" src={project.image} alt={project.name} width={500} height={200} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
}