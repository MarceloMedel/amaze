import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from '../assets/components/Header'
import ClientesGallery from '../assets/components/ClientesGallery'
import Contacto from '../assets/components/Contacto'


export default function ClientesPage() {
  return (
    <>
      <Header />
      <ClientesGallery />
      <Contacto />
    </>
  );
}