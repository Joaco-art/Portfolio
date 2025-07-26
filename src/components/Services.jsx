import Card from './Card.jsx';
import './global.css';
import { motion } from "framer-motion";


function Services() {
    return (

      <section className="flex flex-col snap-start h-screen items-center justify-center w-screen overflow-hidden">
        <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 }  }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        
      

        <h2 className="text-6xl font-bold text-center animated-gradient-text">My Services</h2>

        <div className="flex flex-row w-full p-5 items-center gap-10 mt-10">

            <Card type="Web Development" desc="Creating responsive and modern websites using the latest technologies." />
            <Card type="UI/UX Design" desc="Designing user-friendly interfaces and experiences that enhance user satisfaction." />
            <Card type="Mobile App Development" desc="Building cross-platform mobile applications for both iOS and Android." />
            <Card type="E-commerce Solutions" desc="Developing and managing online stores with secure payment systems." />

        </div>
            

            
        </motion.div>
        </section>
        
    );
}   
export default Services;