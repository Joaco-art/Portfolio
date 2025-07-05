

function Hero() {
    return (
        <section className="flex flex-row h-[90%] w-screen overflow-hidden">

        <div className="flex flex-col items-center justify-center h-[90%] w-[50%]">
            

            <div className="flex flex-col gap-5 border-4 border-white p-8 mt-32 rounded-lg">

            <p className="text-lg">Welcome to my portfolio!</p>
            <h1 className="text-7xl font-bold text-white mb-4">Joaquín Farias Ovelar</h1>
            <p className="text-4xl bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent pb-4">Software Engineer & UI/UX Designer</p>
            <p className="text-xl max-w-[75ch] mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur dignissimos beatae optio accusamus magni ducimus modi soluta maxime! Hic nobis sunt excepturi eos molestiae similique cumque nam consequuntur pariatur.</p>
            <p className="flex flex-row gap-4 text-lg text-gray-300 mb-8">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                View Projects
            </button>
            <button className="px-6 py-3 bg-transparent border-4  border-white text-white rounded-lg hover:bg-blue-700 transition duration-500 hover:scale-105">
                Download CV
            </button>
            </p>

            </div>
            
        </div>

            <div className="flex flex-col items-center justify-center h-[90%] w-[50%]">
            
                <div className="            border-4 border-white p-8 mt-20 rounded-lg">
                <p className="text-lg">Welcome to my portfolio!</p>
                </div>
            
            </div>

        </section>
    );
}
export default Hero;