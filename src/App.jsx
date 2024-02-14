import React from 'react';
import './App.css'
import Servicios from './components/Servicios'
import Hero from './components/Hero'
import Contacto from './components/Contacto'
import Clientes from './components/Clientes'
import Call from './components/Call'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <Servicios />
    <Call />
    <Clientes />
    <Contacto />
    </>
  )
}

export default App
