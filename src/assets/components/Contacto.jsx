import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

// const meta = {
//   title: '',
//   meta: [],
//   link: [],
//   style: [],
//   script: [],
// };

export default function Contacto() {
  return (
    <React.Fragment>
      {/* <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider> */}
      <section class="py-6 bg-black" id="contacto">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 px-4 order-last lg:order-first">
              <a href='https://maps.app.goo.gl/xWa8GaxC9hWeJRAB7' target="_blank" rel="web">
                <img class="block max-w-lg mx-auto lg:max-w-none h-full w-full rounded-4xl object-cover" src="images/mapa.png" alt=""></img>
              </a>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-lg mx-auto lg:mr-0 pt-14 pb-16 lg:py-24">
                <div className="justify-start">
                  <h1 className="font-heading text-6xl xs:text-8xl sm:text-9xl xl:text-10xl xl:justi tracking-tighter text-white mb-8">Contáctanos</h1>
                  <p className="text-xl text-coolGray-500 mb-16">Asesoramiento personalizado, visítanos en nuestro estudio en Chicureo o escríbenos a través de nuestras redes sociales.</p>
                </div>
                <a href="https://wa.me/56932980046?text=Hola%2C%20me%20contacto%20para%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Amaze%20Car%20Detailing" target="_blank" rel="web">
                  <div className='flex flex-row p-4'>
                    {/* <div className="flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl bg-white"> */}
                    <img className="block h-14 w-14 rounded-xl justify-center align-middle ml-17" src="images/whatsapp-icons8.svg" alt=""></img>
                    {/* </div> */}
                    {/* <div className="mt-6 sm:mt-0 sm:ml-6"> */}
                    <div className="flex flex-col ml-10 text-left">
                      <h1 className="block text-white text-lg font-medium mb-2">Escríbenos</h1>
                      <p className="text-lg text-coolGray-500 mb-1" contenteditable="false">+569 3298 0046</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.instagram.com/amazecardetailing/" target="_blank" rel="web">
                  <div className='flex flex-row p-4'>
                    {/* <div className="flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl bg-white"> */}
                    <img className="block h-14 w-14rounded-xl justify-center align-middle ml-17" src="images/icons8-instagram-48.png" alt=""></img>
                    {/* </div> */}
                    {/* <div className="mt-6 sm:mt-0 sm:ml-6"> */}
                    <div className="flex flex-col ml-10 text-left">
                      <h1 className="block text-white text-lg font-medium mb-2">Síguenos</h1>
                      <p className="text-lg text-coolGray-500 mb-1" contenteditable="false">@amazecardetailing</p>
                    </div>
                  </div>

                </a>

                <a href='https://maps.app.goo.gl/xWa8GaxC9hWeJRAB7' target="_blank" rel="web">
                  <div className='flex flex-row p-4'>
                    {/* <div className="flex h-12 w-12 items-center justify-center border border-coolGray-800 rounded-2xl bg-white"> */}
                    <img className="block h-14 w-14rounded-xl justify-center align-middle ml-17" src="images/icons8-place-marker-96.png" alt=""></img>
                    {/* </div> */}
                    {/* <div className="mt-6 sm:mt-0 sm:ml-6"> */}
                    <div className="flex flex-col ml-10 text-left">
                      <h1 className="block text-white text-lg font-medium mb-2">Visítanos</h1>
                      <p className="text-lg text-coolGray-500 mb-1" contenteditable="false">Amaze Car Detailing</p>
                      <span className="block mb-0.5 text-lg font-medium text-coolGray-500 mb-1" contenteditable="false">Av. Chicureo Km 2,8 - Strip Center Automotriz</span>
                      <span className="text-lg font-medium text-coolGray-500 mb-1" contenteditable="false">Local E</span>
                    </div>
                  </div>

                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment >
  );
}

