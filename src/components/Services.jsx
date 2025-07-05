import Card from './Card.jsx';

function Services() {
    return (

      <section className="flex flex-col h-screen gap-40 items-center justify-center w-screen overflow-hidden">

        <h2 className="text-6xl">My Services</h2>

        <div className="flex flex-row gap-10 w-full p-5">

            <Card type="Web Development" desc="Creating responsive and modern websites using the latest technologies." />
            <Card type="UI/UX Design" desc="Designing user-friendly interfaces and experiences that enhance user satisfaction." />
            <Card type="Mobile App Development" desc="Building cross-platform mobile applications for both iOS and Android." />
            <Card type="E-commerce Solutions" desc="Developing and managing online stores with secure payment systems." />

        </div>
            

            

        </section>
        
    );
}   
export default Services;