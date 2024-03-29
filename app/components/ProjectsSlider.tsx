'use client'

import React, { useEffect, useState } from "react";
import "../globals.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

type Project = {
    _id: string;
    url: string;
    image: string;
    name: string;
    slug: string
};

const animation = { duration: 10000, easing: (t: number) => t }

const carousel: KeenSliderPlugin = (slider) => {
    const z = window.innerWidth * 1;
    function rotate() {
        if (slider.track && slider.track.details) {
            const deg = 360 * slider.track.details.progress;
            slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
        }
    }
    slider.on("created", () => {
        if (slider.slides) {
            const deg = 360 / slider.slides.length;
            slider.slides.forEach((element, idx) => {
                element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
            });
        }
        rotate();
        if (window.innerWidth > 960) {
            slider.moveToIdx(5, true, animation)
        }
    });
    slider.on("detailsChanged", rotate);
    slider.on("updated", () => {
        if (window.innerWidth > 960) {
            slider.moveToIdx(slider.track.details.abs + 5, true, animation)
        }
    });
    slider.on("animationEnded", () => {
        if (window.innerWidth > 960) {
            slider.moveToIdx(slider.track.details.abs + 5, true, animation)
        }
    });
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

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProjects();
            setProjects(data);
        };

        fetchData();
    }, []);

    // Check if window is defined (so if we're on the server-side, we don't run this)
    const isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 960;

    return (
        <motion.div style={isLargeScreen ? {rotateZ, rotateX, scale} : {}} key={projects.length} className="wrapper ">
            <div className="scene">
                <div className="carousel keen-slider " ref={sliderRef}>
                        {projects.map((project) => (
                            <div key={project._id} className="carousel__cell ">
                            <a href={`projects/${project.slug}`}>
                                    <Image
                                        className="rounded-3xl" src={project.image} alt={project.name} width={400} height={160} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    }
