import { motion } from "framer-motion";

function Navbar(navbarProps) {
    const navbarVariants = {
        hidden: { scale: 2.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.nav
            className="fixed bg-gradient-to-r from-[#172444] to-[#2d3f58] w-screen h-32 p-8 flex justify-between items-center border-b-4 border-transparent"
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            <motion.div
                className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "easeInOut", }}
            />
            <ul className="flex w-screen gap-5 text-xl z-10">
                <li className="mr-auto ml-10">{navbarProps.name}</li>
                <li>{navbarProps.atr}</li>
                <li>{navbarProps.atrr}</li>
                <li>{navbarProps.atrrr}</li>
                <li className="mr-10">{navbarProps.atrrrr}</li>
            </ul>
        </motion.nav>
    );
}

export default Navbar;

