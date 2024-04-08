import Header from '../assets/components/Header'
import ClientesGallery from '../assets/components/ClientesGallery'
import Contacto from '../assets/components/Contacto'

import ReactGA from "react-ga4";
ReactGA.initialize("G-MBYPX02PNC");


export default function ClientesPage() {
  return (
    <>
      <Header />
      <ClientesGallery />
      <Contacto />
    </>
  );
}