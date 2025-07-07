import { motion } from "framer-motion";

function Hero() {
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
            className="flex flex-row snap-start h-[90%] w-screen overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex flex-col items-center justify-center h-[90%] w-[50%]"
                variants={childVariants}
            >
                <motion.div
                    className="flex flex-col gap-5 border-4 border-white p-8 mt-32 rounded-lg"
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
                    className="border-4 border-white p-8 mt-20 rounded-lg"
                    variants={childVariants}
                >
                    <p className="text-lg">Welcome to my portfolio!</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Hero;
