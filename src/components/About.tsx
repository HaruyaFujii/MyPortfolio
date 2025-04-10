"use client";
import React from 'react';
import Image from 'next/image';
import book from "../assets/book.png"
import pc from "../assets/pc.png"
import card from "../assets/card.png"
import stress from "../assets/stressfigure.png"

const About = () => {
    return (
        <div className = "max-w-[1200px] mx-auto bg-black" id = "about">

          <h1 className = "text-white text-6xl max-w-[320px] mx-auto font-semibold  p-4 mb-4">
            About <span className = "text-orange-400">Me</span>
            </h1>

            <div className = "px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

                <div className = "w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className = "absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className = "flex flex-row p-6">
                        <Image src = {book} alt = "book" className = "w-auto h-[130px]"/>
                        <div className = "flex flex-col mt-4">
                            <h2 className = "text-2xl font-bold text-white/80">School</h2>
                            <p className = "text-lg text-white/70 mt-2">I am enrolled in the Department of Information Engineering at Osaka Metropolitan University.</p>
                        </div>
                    </div>
                </div>

                <div className = "w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className = "absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className = "flex flex-row p-6">
                        <Image src = {stress} alt = "stress" className = "w-auto h-[60px]"/>
                        <div className = "flex flex-col mt-4">
                            <h2 className = "text-2xl font-bold text-white/80">My Research</h2>
                            <p className = "text-lg text-white/70 mt-2">I am exploring about quantifying stress levels to avoid long-term effects of stress.</p>
                        </div>
                    </div>
                </div>

                <div className = "w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className = "absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className = "flex flex-row p-6">
                        <Image src = {card} alt = "card" className = "w-auto h-[130px]"/>
                        <div className = "flex flex-col mt-4">
                            <h2 className = "text-2xl font-bold text-white/80">Experience</h2>
                            <p className = "text-lg text-white/70 mt-2">I attended Augmented Humans 2025 to make poster presentations.</p>
                        </div>
                    </div>
                </div>

                <div className = "w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className = "absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className = "flex flex-row p-6">
                        <Image src = {pc} alt = "pc" className = "w-auto h-[130px]"/>
                        <div className = "flex flex-col mt-4">
                            <h2 className = "text-2xl font-bold text-white/80">Technical Skills</h2>
                            <p className = "text-lg text-white/70 mt-2">I studied C, Python and Typescript. I made this portfolio using Typescript, React, Next.js and Tailwindcss.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default About;