import { useRef, useEffect } from "react";
import Avatar from '../assets/peeps-avatar-alpha.png';
import Socials from "./Socials";
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

function Hero() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);
    const avatarRef = useRef(null);
    const { animateText, animateFromLeft, animateFromRight, animateFromBottom, animateScale } = useGSAPAnimations();

    useEffect(() => {
        // Solo ejecutar animaciones en pantallas grandes (lg y superiores)
        const isLargeScreen = window.innerWidth >= 1024; // 1024px es el breakpoint de lg en Tailwind
        
        if (isLargeScreen) {
            // Animación del título con efecto de texto
            animateText(titleRef, 0.2);
            
            // Animación del subtítulo
            animateText(subtitleRef, 0.8);
            
            // Animación de la descripción desde la izquierda
            animateFromLeft(descriptionRef, 1.2);
            
            // Animación de los botones con stagger
            animateFromBottom(buttonsRef, 1.6);
            
            // Animación del avatar desde la derecha
            animateFromRight(avatarRef, 0.5);
            
            // Animación de escala para el avatar
            animateScale(avatarRef, 0.5);
        }
    }, []);

    return (
        <section
            id="hero"
            className="flex md:flex-row md:snap-start flex-col-reverse md:min-h-screen h-auto w-screen overflow-hidden justify-center items-center p-4 md:mt-20 mt-0 bg-transparent"
        >
            <div className="flex flex-col md:items-start items-center justify-center md:w-[50%] w-full h-full md:gap-5 gap-2 p-4 md:p-8 rounded-lg">
                <p className="xl:text-lg text-sm font-semibold">
                    Welcome to my portfolio!
                </p>
                <h1 ref={titleRef} className="xxl:text-7xl lg:text-6xl text-3xl font-bold text-white mb-4">
                    Joaquín Farias Ovelar
                </h1>
                <p ref={subtitleRef} className="xxl:text-4xl lg:text-2xl text-xl font-bold animated-gradient-text pb-4">
                    Software Engineer & UI/UX Designer
                </p>
                <p ref={descriptionRef} className="lg:text-xl text-sm md:max-w-[75ch] max-w-[50ch] mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur dignissimos beatae optio accusamus magni ducimus modi soluta maxime! Hic nobis sunt excepturi eos molestiae similique cumque nam consequuntur pariatur.
                </p>
                <div ref={buttonsRef} className="flex flex-row gap-4 md:text-lg text-small text-gray-300 mb-8">
                    <button className="px-6 md:py-3 py-1 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 text-sm lg:text-xl">
                        View Projects
                    </button>
                    <button className="md:px-6 px-4 py-3 bg-transparent border-4 border-white text-white rounded-lg hover:bg-accent transition duration-500 text-sm lg:text-xl">
                        Download CV
                    </button>
                </div>
                <div className="w-full flex justify-center md:justify-start duration-300">
                    <Socials/>
                </div>
            </div>

            <div ref={avatarRef} className="flex flex-col items-center justify-center md:w-[50%] w-full h-full">
                    <img 
                        src={Avatar} 
                        alt="Avatar" 
                        className="w-auto h-auto"
                        
                    />
            </div>
        </section>
    );
}

export default Hero;
