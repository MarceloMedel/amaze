import React from 'react';
import './App.css'
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/home";
import ClientesPage from "./pages/clientes";
import Servicios from './assets/components/Servicios';


import Contacto from './assets/components/Contacto';
import Portafolio from './assets/components/Portafolio'



function App() {
  // const [count, setCount] = useState(0)

  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/servicios",
      element: (
        <Servicios />
      )
    },
    {
      path: "/portafolio",
      element: (
        <Portafolio />
      )
    },
    {
      path: "/contacto",
      element: (
        <Contacto />
      )
    },
    {
      path: "/clientesPage",
      element: (
        <ClientesPage />
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <>
    {React.cloneElement(element, { key: location.pathname })}
    {/* <Hero /> */}
    {/* <Servicios /> */}
    {/* <Call /> */}
    {/* <Clientes /> */}
    {/* <Contacto /> */}
    </>
  )
}

export default App
