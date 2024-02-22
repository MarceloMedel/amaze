import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactButton from './ContactButton.jsx';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Servicios() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='py-12 md:py-24 bg-coolGray-50 overflow-hidden' id="servicios-section">
        <div className='container mx-auto px-4'>
          <h1 className='font-heading text-6xl xs:text-8xl sm:text-10xl tracking-tighter mb-20'>
            Servicios
          </h1>
          <div className='max-w-2xl mx-auto xl:max-w-none'>
            <div className='flex flex-wrap -mx-1.5'>
              <div className='w-full xl:w-1/2 px-1.5 mb-4 xl:mb-0'>
                <div className='h-full border rounded-4xl'>
                  <img
                    className='block mb-16 w-full h-88 rounded-4xl object-cover'
                    src='https://images.unsplash.com/photo-1632823469901-5d2cfff5ba50?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxNHx8Y2FyJTIwZGV0YWlsaW5nfGVufDB8fHx8MTcwNzc4MzAwNnww&ixlib=rb-4.0.3&q=85&w=1920'
                    alt=''
                  />
                  <div className='px-6 max-w-lg mx-auto pb-16 text-center'>
                    <img
                      className='inline-block h-15'
                      src='images/detallado-icono-svg-1707782837412.webp'
                      alt=''
                    />
                    <span className='block text-4xl mb-4'>Car Detailing</span>
                    <p className='text-normal text-justify mb-4'>Eleva tu experiencia al volante con nuestro servicio de car detailing, una transformación integral que va más allá de la limpieza para restaurar y proteger tu vehículo por dentro y por fuera. Nuestro meticuloso proceso elimina contaminantes y rayas, aplica sellado cerámico para enfrentar elementos adversos, y detalla interiores para una belleza duradera.</p>
                    {/* <a
                      className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black'
                      href='#contacto'
                    >
                      <span className='mr-4'>Contacto</span>
                      <span className='group-hover:rotate-45 transform transition duration-100'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          className=''
                        >
                          <path d='M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z' />
                        </svg>
                      </span>
                    </a> */}
                    <ContactButton />
                  </div>
                </div>
              </div>
              <div className='w-full xl:w-1/2 px-1.5'>
                <a className='group block mb-3 border rounded-4xl' href='#'>
                  <div className='flex flex-wrap justify-between'>
                    <div className='w-full md:w-7/12 pl-6 sm:pl-12 pr-5 py-0 self-center'>
                      <div className='max-w-xs py-18'>
                        <span className='block text-4xl mb-4'>Car Wash</span>
                        <p className='text-normal text-justify mb-4'>Experimenta el máximo nivel de cuidado automotriz con nuestro servicio premium de car wash, que va más allá de un lavado convencional para ofrecerte una limpieza profunda y un realce de brillo excepcional. Perfecto para el mantenimiento después del sellado cerámico, este servicio garantiza la durabilidad de tu inversión, preservando la protección y estética de tu vehículo. </p>
                        <ContactButton />
                      </div>
                    </div>
                    <div className='w-full md:w-5/12 md:transform group-hover:translate-x-4 transition duration-500'>
                      <img
                        className='block w-full h-full rounded-4xl object-cover'
                        src='https://images.unsplash.com/photo-1641323990095-2110680fe979?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyMHx8Y2FyJTIwd2FzaHxlbnwwfHx8fDE3MDc3ODMwNzB8MA&ixlib=rb-4.0.3&q=85&w=1920'
                        alt=''
                      />
                    </div>
                  </div>
                </a>
                <a className='group block border rounded-4xl' href='#'>
                  <div className='flex flex-wrap justify-between'>
                    <div className='w-full md:w-7/12 pl-6 sm:pl-12 pr-5 py-0 self-center'>
                      <div className='max-w-xs py-18'>
                        <span className='block text-4xl mb-4'>Wrapping</span>
                        <p className='text-normal text-justify mb-4'>Transforma y protege tu auto con nuestros servicios avanzados de wrapping y PPF, diseñados para realzar tu estilo personal y ofrecer una protección superior contra daños. Utilizando materiales de primera calidad, nuestros servicios no solo mejoran la estética de tu vehículo, sino que también aseguran su preservación a largo plazo contra rasguños y elementos externos. Perfecto para mantener tu auto en su mejor versión, visual y funcionalmente.</p>
                        <ContactButton />

                      </div>
                    </div>
                    <div className='w-full md:w-5/12 md:transform group-hover:translate-y-4 transition duration-500'>
                      <img
                        className='block w-full h-full rounded-4xl object-cover'
                        src='https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHxjYXIlMjB3cmFwcGluZ3xlbnwwfHx8fDE3MDc3ODMwOTJ8MA&ixlib=rb-4.0.3&q=85&w=1920'
                        alt=''
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

