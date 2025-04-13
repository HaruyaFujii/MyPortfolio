"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project from "../assets/project.png";
import project1 from "../assets/project1.png";

const projects = [
    {
        title: "Portfolio Website",
        desc: "My first portfolio website built with Next.js and Tailwind CSS.",
        devStack: "Next.js, Tailwind CSS",
        link: "https://my-project-psi-smoky.vercel.app/",
        git: "https://github.com/HaruyaFujii/MyPortfolio",
        src: project,
    },
    {
        title: "The N-back task for mobile",
        desc: "This app was used to measure stress levels using the N-back task.",
        devStack: "React Native, Tailwind CSS, Expo",
        link: "#",
        git: "#",
        src: project1,
    },
];

const Portfolio = () => {
    return (
        <div className="text-[#005f99] bg-gradient-to-b from-[#e6f7ff] to-[#d4f1f9] py-18 mt-48" id="projects">
            <h1 className="text-[#005f99] text-6xl max-w-[320px] mx-auto font-semibold my-12">
                Selected <span className="text-[#007acc]">Projects</span>
            </h1>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-[#007acc]/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-[#005f99]/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-[#007acc] font-semibold">{project.devStack}</p>
                            <div className="w-64 h-[1px] bg-gray-300 my-4">
                                <a href={project.link} className="text-[#005f99] hover:underline mr-6">
                                    Link
                                </a>
                                <a href={project.git} className="text-[#005f99] hover:underline">
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image
                                src={project.src}
                                alt={project.title}
                                className="mt-4 w-full max-w-[500px] h-auto object-cover border rounded border-gray-300"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;