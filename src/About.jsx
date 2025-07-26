

export default function About() {
    return (
        <section className="flex flex-col items-center justify-center snap-start w-screen p-10 h-screen overflow-hidden">
            <h2>About me</h2>
            <div className="flex flex-row items-center  w-[80%] h-[60%] bg-red-500 mt-32">
                <div className="flex flex-col items-center justify-center w-[50%] h-full bg-blue-500">
                <h3 className="text-4xl font-bold">About me</h3>
                <p className="text-lg text-center">
                    I am a software engineer with a passion for building web applications.
                </p>
                </div>
                
                
            </div>
            
        </section>
    )
}