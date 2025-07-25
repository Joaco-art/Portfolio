import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Avatar from '../assets/peeps-avatar-alpha.png';
import { AnimatePresence } from "framer-motion";

function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const containerVariants = {
        hidden: { scale: 10, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const childVariants = {
        hidden: { scale: 3, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.section
            ref={ref}
            className="flex flex-row snap-start h-[90%] w-screen overflow-hidden justify-center items-center p-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex flex-col items-center justify-center h-[90%] w-[50%]"
                variants={childVariants}
            >
                <motion.div
                    className="flex flex-col gap-5 p-8 mt-32 rounded-lg"
                    variants={childVariants}
                >
                    <motion.p className="text-lg font-semibold" variants={childVariants}>
                        Welcome to my portfolio!
                    </motion.p>
                    <motion.h1 className="text-7xl font-bold text-white mb-4" variants={childVariants}>
                        Joaquín Farias Ovelar
                    </motion.h1>
                    <motion.p className="text-4xl font-bold animated-gradient-text pb-4" variants={childVariants}>
                        Software Engineer & UI/UX Designer
                    </motion.p>
                    <motion.p className="text-xl max-w-[75ch] mb-10" variants={childVariants}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur dignissimos beatae optio accusamus magni ducimus modi soluta maxime! Hic nobis sunt excepturi eos molestiae similique cumque nam consequuntur pariatur.
                    </motion.p>
                    <motion.div className="flex flex-row gap-4 text-lg text-gray-300 mb-8" variants={childVariants}>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                            View Projects
                        </button>
                        <button className="px-6 py-3 bg-transparent border-4 border-white text-white rounded-lg hover:bg-blue-700 transition duration-500 hover:scale-105">
                            Download CV
                        </button>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center h-[90%] w-[50%]"
                variants={childVariants}
            >
                <motion.div
                    className="p-8 m-20 rounded-lg"
                    variants={childVariants}
                >
                    <p className="text-lg">
                        <AnimatePresence>
                            {isInView && (
                                <motion.img 
                                    src={Avatar} 
                                    alt="Avatar" 
                                    className="absolute bottom-0 right-10 z-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                        </AnimatePresence>
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Hero;
