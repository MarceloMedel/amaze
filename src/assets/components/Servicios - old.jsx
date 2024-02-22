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
          <div className='max-w-lg mx-auto xl:max-w-none'>
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

