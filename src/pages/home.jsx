import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from '../assets/components/Header'
import Hero from '../assets/components/Hero'
import Servicios from '../assets/components/Servicios'
import Call from '../assets/components/Call'
import Clientes from '../assets/components/Clientes'
import Contacto from '../assets/components/Contacto'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <Call />
      <Clientes />
      <Contacto />
    </>
  );
}
