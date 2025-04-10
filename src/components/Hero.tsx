"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import me from "../assets/me.jpg";
import mee from "../assets/mee.jpg";

const Hero = () => {
    return (
        // bg-[linear-gradient(to_bottom, #000, #2B1942_35%, #8F5C55_60%, #DBAF6E_80%)]
        <div className="hero-bg py-24 relative z-10 overflow-clip bg-[linear-gradient(to_bottom, #000, #2B1942_35%, #8F5C55_60%, #DBAF6E_80%)]" id = "portfolio">

            <div className = "absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

            <div className = "relative">     
                <div className = "text-8xl font-bold text-center">
                    <h1 className = "text-[#98B4CE]">Hi, I am</h1>
                    <h1 className = "text-[#E48A57]">Haruya Fujii</h1>
                </div>

                <motion.div
                    className = "hidden md:block absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image
                        src = {cursor}
                        height = "170"
                        width = "170"
                        alt = "cursor"
                        className = ""
                        draggable = "false"
                        />

                </motion.div>

                <motion.div
                    className = "hidden md:block absolute right-[220px] top-[20px]"
                    drag
                >
                    <Image
                        src = {lightning}
                        height = "120"
                        width = "120"
                        alt = "message"
                        className = ""
                        draggable = "false"
                    />

                </motion.div>            

            <p className = "text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
                I am a full-stack developer with a passion for creating dynamic and responsive web applications. I have experience in various technologies and frameworks, and I am always eager to learn more and improve my skills.
            </p>

            <Image
                src = {mee}
                alt = "profile picture"
                className = "h-auto w-auto max-w-[500px] mx-auto"
            />
        </div>

        </div>
    )
}

export default Hero;