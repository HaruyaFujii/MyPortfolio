import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';

const skillIcons = [
    { icon: <FaHtml5 size = {140} className="text-orange-500"/>, label: "HTML" },
    { icon: <FaCss3Alt size = {140} className="text-blue-500"/>, label: "CSS" },
    { icon: <FaReact size = {110} className="text-blue-400"/>, label: "React" },
    { icon: <FaJsSquare size = {140} className="text-yellow-500"/>, label: "JavaScript" },
];

const Skills = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-[#e6f7ff] text-[#005f99] p-8 rounded-lg" id="skills">
            <h1 className="text-6xl font-bold text-center mb-8">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skillIcons.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                        {skill.icon}
                        <p className="mt-4 text-lg font-semibold">{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;