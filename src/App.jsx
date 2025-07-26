import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Frameworks from './components/Frameworks'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'

export default function App() {

  return (
    <>

    <div className='bg-gradient-to-r from-black via-gray-950 to-black'>

        <Navbar name = "Joaquín Farias Ovelar" atr = "About" atrr = "Services" atrrr = "Projects" atrrrr = "Contact" />
      
      <main className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
        <Hero />
        <About />
        <Services />
        <Frameworks />
        <Projects />
      </main>

    </div>

    </>
  )
}

