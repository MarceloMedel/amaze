// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import Header from '../assets/components/Header'
import Hero from '../assets/components/Hero'
import Servicios from '../assets/components/Servicios'
import Call from '../assets/components/Call'
import Portafolio from '../assets/components/Portafolio'
import Contacto from '../assets/components/Contacto'
import ReactGA from "react-ga4";
ReactGA.initialize("G-MBYPX02PNC");


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <Portafolio />
      <Call />
      {/* <Clientes /> */}
      <Contacto />
    </>
  );
}
