import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar name = "Joaco" atr = "home" atrr = "about" atrrr = "contact" atrrrr = "projects" />

    </>
  )
}

export default App
