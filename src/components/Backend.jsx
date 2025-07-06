import { useState } from 'react';
import { motion } from "framer-motion";
import SkillsCard from './SkillsCard';
import reactSvg from '../assets/react.svg';
import javascriptSvg from '../assets/javascript-svgrepo-com.svg';
import html from '../assets/html-5-svgrepo-com.svg';
import tailwindcssSvg from '../assets/tailwindcss-icon-svgrepo-com.svg';
import astroSvg from '../assets/astro-svgrepo-com.svg';
import figmaSvg from '../assets/figma-svgrepo-com.svg';

export default function Backend() {
    const skills = [
        {
            type: 'React',
            status: 'Intermediate',
            desc: 'Building dynamic user interfaces with React.',
            img: reactSvg,
        },
        {
            type: 'JavaScript',
            status: 'Advanced',
            desc: 'Creating interactive web applications with Vue.js.',
            img: javascriptSvg,
        },
        {
            type: 'HTML',
            status: 'Beginner',
            desc: 'Developing single-page applications using Angular.',
            img: html,
        },
        {
            type: 'Tailwind CSS',
            status: 'Intermediate',
            desc: 'Building fast and reactive web apps with Svelte.',
            img: tailwindcssSvg,
        },
        {
            type: 'Astro',
            status: 'Advanced',
            desc: 'My favorite static site generator for building fast websites.',
            img: astroSvg,
        },
        {
            type: 'Figma',
            status: 'Advanced',
            desc: 'I use this tool to design and prototype user interfaces before coding.',
            img: figmaSvg,
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="relative snap-start w-full h-screen overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 300, x: -500 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white text-3xl"
            >
                <h2 className="text-6xl font-bold text-white text-center pt-10">
                    Frameworks: <u>Backend</u>
                </h2>

                <div className="flex justify-center p-5 items-center gap-20 mt-32 z-10 relative flex-wrap">
                    {skills.map((skill, index) => (
                        <motion.img
                            key={index}
                            src={skill.img}
                            alt={skill.type}
                            className="w-20 h-20 object-contain cursor-pointer transition-transform duration-200
                            "
                            animate={
                                hoveredIndex === index
                                ? { scale: 1.5 } // en hover: hacer scale
                                : { y: [0, -10, 0] } // sin hover: flotación
                            }
                            transition={{
                                duration: hoveredIndex === index ? 0.1 : 0.5,
                                repeat: hoveredIndex === index ? 0 : Infinity,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            />
                    ))}
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 pointer-events-none p-5 z-20">
                    {hoveredIndex !== null && (
                        <SkillsCard
                            type={skills[hoveredIndex].type}
                            status={skills[hoveredIndex].status}
                            desc={skills[hoveredIndex].desc}
                        />
                    )}
                </div>
            </motion.div>
        </section>
    );
}

