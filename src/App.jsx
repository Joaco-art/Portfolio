import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Services from './components/Services'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <body className='bg-gradient-to-r from-[#0f172a]  to-[#334155]'>

      <Navbar name = "Joaquín Farias Ovelar" atr = "Projects" atrr = "Services" atrrr = "About" atrrrr = "Contact" />
    
    <main>
      <Hero />
      <Services />
      


    </main>

    </body>

    </>
  )
}

export default App
