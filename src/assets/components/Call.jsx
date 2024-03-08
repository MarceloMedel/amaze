import React from 'react';
import ContactButton from './ContactButton.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Call() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className="py-1 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-5/12 px-4 order-last lg:order-first pb-5 ">
              <img className="block mx-auto w-full h-full rounded-4xl object-contain" src="images/estudio-amaze.png" alt=""></img>
            </div>
            <div className="w-full lg:w-7/12 px-4 py-10 md:py-28">
              <div className="max-w-md md:max-w-xl xl:max-w-3xl mx-auto lg:mr-0 text-center">
                <h1 className="font-heading text-5xl md:text-7xl xl:text-8xl text-black tracking-tighter mb-8" contenteditable="false">Mejora tu experiencia de manejo</h1>
                <div className="max-w-xl mx-auto mb-10">
                  <p className="text-lg text-coolGray-500" contenteditable="false">Limpia, Renueva, Protege y Personaliza tu vehículo. Visítanos en nuestro Estudio de Chicureo.</p>
                </div>
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

