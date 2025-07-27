// import { useRef } from "react";
import Avatar from '../assets/peeps-avatar-alpha.png';
import Socials from "./Socials";

function Hero() {
    return (
        <section
            className="relative flex flex-col min-h-screen w-screen overflow-hidden justify-center items-center p-4 md:p-10 bg-transparent"
        >
            <div className="flex flex-col items-center justify-center w-full max-w-4xl h-auto gap-5 p-4 md:p-8 rounded-lg flex-1">
                <p className="lg:text-lg text-base font-semibold">
                    Welcome to my portfolio!
                </p>
                <h1 className="lg:text-7xl text-3xl font-bold text-white mb-4">
                    Joaquín Farias Ovelar
                </h1>
                <p className="lg:text-4xl text-2xl font-bold animated-gradient-text pb-4">
                    Software Engineer & UI/UX Designer
                </p>
                <p className="lg:text-xl text-base max-w-[75ch] mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur dignissimos beatae optio accusamus magni ducimus modi soluta maxime! Hic nobis sunt excepturi eos molestiae similique cumque nam consequuntur pariatur.
                </p>
                <div className="flex flex-row gap-4 lg:text-lg text-small text-gray-300 mb-8">
                    <button className="px-6 md:py-3 py-1 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300">
                        View Projects
                    </button>
                    <button className="md:px-6 px-4 md:py-3 py-1 bg-transparent border-4 border-white text-white rounded-lg hover:bg-accent transition duration-500">
                        Download CV
                    </button>
                </div>
                <div className="w-full flex justify-center">
                    <Socials/>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-4xl h-auto relative mt-8 md:mt-0 flex-1">
                <div className="w-full h-full flex items-end justify-center relative">
                    <img 
                        src={Avatar} 
                        alt="Avatar" 
                        className="w-3/4 md:w-2/3 lg:w-1/2 h-auto max-h-[60vh] md:max-h-[70vh] object-contain"
                        style={{objectFit: 'contain'}}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
