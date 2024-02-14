import React from 'react';
import './App.css'
import Servicios from './assets/components/Servicios'
import Hero from './assets/components/Hero'
import Contacto from './assets/components/Contacto'
import Clientes from './assets/components/Clientes'
import Call from './assets/components/Call'


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
