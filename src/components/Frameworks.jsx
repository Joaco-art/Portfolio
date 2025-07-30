import { useState } from 'react';
import { color, motion } from "framer-motion";
import SkillsCard from './SkillsCard';
import reactSvg from '../assets/react.svg';
import javascriptSvg from '../assets/javascript-svgrepo-com.svg';
import html from '../assets/html-5-svgrepo-com.svg';
import tailwindcssSvg from '../assets/tailwindcss-icon-svgrepo-com.svg';
import astroSvg from '../assets/astro-svgrepo-com.svg';
import figmaSvg from '../assets/figma-svgrepo-com.svg';

export default function Frameworks() {
    const skills = [
    {
        type: 'React',
        status: 'Intermediate',
        desc: 'One of the best and simple JavaScript libraries for building dynamic user interfaces. His syntax is way understandable.',
        img: reactSvg,
        color: '#61DBFB', // Azul React
    },
    {
        type: 'JavaScript',
        status: 'Advanced',
        desc: 'JavaScript means the beggining of an interactive web application. Suitable for those frameworks that have dynamic user interfaces.',
        img: javascriptSvg,
        color: '#f7df1e', // Amarillo JS
    },
    {
        type: 'HTML',
        status: 'Expert',
        desc: 'A hypertext markup language for creating web pages. It is the backbone of any web application. I do use semantic practices to ensure accessibility and SEO.',
        img: html,
        color: '#e34c26',
    },
    {
        type: 'Tailwind CSS',
        status: 'Advanced',
        desc: 'Tailwind CSS is an useful framework that allows me to create an unique UI/UX with inline-shorten CSS. Ideal for making custom designs.',
        img: tailwindcssSvg,
        color: '#38bdf8',
    },
    {
        type: 'Astro',
        status: 'Advanced',
        desc: 'My favorite static site generator for building fast websites. Way similar to React, but with a focus on performance and static site generation.',
        img: astroSvg,
        color: '#ff5d01',
    },
    {
        type: 'Figma',
        status: 'Intermediate',
        desc: 'I use this tool to design and prototype user interfaces before coding. It sounds familiar to me due to Autolayout, which has the same concept as flexbox',
        img: figmaSvg,
        color: '#a259ff',
    },
];


    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="relative flex flex-col items-center lg:justify-center justify-start lg:snap-start w-full md:h-screen h-auto overflow-hidden p-4 md:p-10">
            <motion.div
                initial={{ opacity: 0, y: 300, x: -500 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-white text-3xl"
            >
                <h2 className="text-6xl font-bold text-white text-center pt-10">
                    Frameworks
                </h2>

                <div className="flex justify-center p-5 items-center gap-20 mt-20 z-10  flex-wrap">
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
                                : { y: [0, -30, 0] } // sin hover: flotación
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

                <div className="absolute lg:top-10/12 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 pointer-events-none lg:p-5 z-20">
                    {hoveredIndex !== null && (
                        <SkillsCard
                            type={skills[hoveredIndex].type}
                            status={skills[hoveredIndex].status}
                            color={skills[hoveredIndex].color}  
                            desc={skills[hoveredIndex].desc}
                        />
                    )}
                </div>
            </motion.div>
        </section>
    );
}




