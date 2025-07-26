import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Frameworks from './components/Frameworks'
import About from './About'
import Projects from './Projects'
import './App.css'

export default function App() {

  return (
    <>

    <div className='bg-black'>

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

