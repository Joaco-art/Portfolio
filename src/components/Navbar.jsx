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
            className="fixed bg-black w-screen h-32 p-10 flex justify-start items-center border-b-4 border-transparent z-10"
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
                <li className="mr-auto ml-10 cursor-pointer">{navbarProps.name}</li>
                <li className="hover:underline duration-300 cursor-pointer">{navbarProps.atr}</li>
                <li className="hover:underline duration-300 cursor-pointer">{navbarProps.atrr}</li>
                <li className="hover:underline duration-300 cursor-pointer">{navbarProps.atrrr}</li>
                <li className="mr-10 hover:underline duration-300 cursor-pointer">{navbarProps.atrrrr}</li>
            </ul>
        </motion.nav>
    );
}

export default Navbar;

