// import { useRef } from "react";
import Avatar from '../assets/peeps-avatar-alpha.png';
import Socials from "./Socials";

function Hero() {
    return (
        <section
            className="flex md:flex-row md:snap-start flex-col-reverse md:min-h-screen h-auto w-screen overflow-hidden justify-center items-center p-4 md:mt-20 mt-0 bg-transparent"
        >
            <div className="flex flex-col md:items-start items-center justify-center md:w-[50%] w-full h-full md:gap-5 gap-2 p-4 md:p-8 rounded-lg">
                <p className="xl:text-lg text-sm font-semibold">
                    Welcome to my portfolio!
                </p>
                <h1 className="xxl:text-7xl lg:text-6xl text-3xl font-bold text-white mb-4">
                    Joaquín Farias Ovelar
                </h1>
                <p className="xxl:text-4xl lg:text-2xl text-xl font-bold animated-gradient-text pb-4">
                    Software Engineer & UI/UX Designer
                </p>
                <p className="lg:text-xl text-sm md:max-w-[75ch] max-w-[50ch] mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur dignissimos beatae optio accusamus magni ducimus modi soluta maxime! Hic nobis sunt excepturi eos molestiae similique cumque nam consequuntur pariatur.
                </p>
                <div className="flex flex-row gap-4 md:text-lg text-small text-gray-300 mb-8">
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

            <div className="flex flex-col items-center justify-center md:w-[50%] w-full h-full">
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
