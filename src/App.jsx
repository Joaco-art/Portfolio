import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Frontend from './components/Frontend'
import Backend from './components/Backend'
import './App.css'

export default function App() {

  return (
    <>

    <div className='bg-black'>

        <Navbar name = "Joaquín Farias Ovelar" atr = "Projects" atrr = "Services" atrrr = "About" atrrrr = "Contact" />
      
      <main className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
        <Hero />
        <Services />
        <Frontend />
        <Backend />
      </main>

    </div>

    </>
  )
}

