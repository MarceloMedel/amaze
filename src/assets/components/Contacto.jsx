import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Contacto() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='py-12 md:py-20 bg-coolGray-100 bs-section-dragged'>
        <div className='container mx-auto px-4'>
          {' '}
          <div className='flex flex-wrap -mx-4'>
            {' '}
            <div className='w-full lg:w-1/2 px-4 mb-16 lg:mb-0'>
              {' '}
              <div className='max-w-xl mx-auto lg:mx-0'>
                {' '}
                <div className='max-w-lg mb-10'>
                  {' '}
                  <h1
                    className='font-heading text-4xl xs:text-6xl sm:text-7xl xl:text-8xl tracking-tighter mb-8'
                    contentEditable='false'
                  >
                    Contáctanos
                  </h1>{' '}
                  <p className='text-xl text-coolGray-600'>
                    Asesoramiento personalizado, visítanos en nuestro estudio en Chicureo o escríbenos a través de nuestras redes sociales.
                  </p>{' '}
                </div>{' '}

                <div className='flex flex-wrap -mx-4 mb-20'>
                  {' '}
                  <div className='w-full sm:w-1/2 px-4 mb-6 sm:mb-0'>
                    {' '}
                    <div className='py-6 text-center border border-coolGray-300 rounded-3xl justify-center items-center'>
                      <a href="https://wa.me/56932980046?text=Hola%2C%20me%20contacto%20para%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Amaze%20Car%20Detailing" target="_blank" rel="web">
                        {' '}
                        <div className='flex justify-center'>
                          {' '}
                          <img
                            className='block h-10 rounded-t-4xl'
                            src='images/whatsapp-icons8.svg'
                            alt=''
                          />
                        </div>{' '}
                        <span className='font-medium'>+56 9 3298 0046</span>{' '}
                      </a>
                    </div>{' '}
                  </div>{' '}
                  <div className='w-full sm:w-1/2 px-4'>
                    <a href="https://www.instagram.com/amazecardetailing/" target="_blank" rel="web">
                      {' '}
                      <div className='py-6 text-center border border-coolGray-300 rounded-3xl'>
                        {' '}
                        <div className='flex justify-center'>
                          {' '}
                          <img
                            className='block h-10 rounded-t-4xl object-cover'
                            src='images/icons8-instagram-48.png'
                            alt=''
                          />
                        </div>{' '}
                        <span className='block mb-2 text-sm text-coolGray-500' />{' '}
                        <span className='font-medium'>@amazecardetailing</span>{' '}
                      </div>{' '}
                    </a>
                  </div>{' '}
                </div>{' '}
                <div>
                  {' '}
                  <h1
                    className='font-heading text-4xl xs:text-6xl sm:text-7xl xl:text-8xl tracking-tighter mb-8'
                    contentEditable='false'
                  >
                    Visítanos
                  </h1>{' '}
                  <span className='block mb-4 text-xl'>Amaze - Chicureo</span>{' '}
                  <p className='text-coolGray-600'>
                    Av. Chicureo Km 2,5 - Strip Center Aumotriz, Local E
                  </p>{' '}
                  <div className='max-w-md rounded-3xl border-2 border-white overflow-hidden'>
                    {' '}
                    <a href='https://maps.app.goo.gl/xWa8GaxC9hWeJRAB7'>
                      {' '}
                      <img
                        className='block w-full'
                        src='images/mapa.png'
                        alt=''
                      />
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className='w-full lg:w-1/2 px-4'>
              {' '}
              <div className='py-12 px-8 md:px-10 bg-white rounded-4xl max-w-xl mx-auto lg:mr-0'>
                {' '}
                <h3 className='text-3xl tracking-tight mb-8'>
                  Envíanos un mensaje
                </h3>{' '}
                <form action=''>
                  {' '}
                  <input
                    className='block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full'
                    type='text'
                    placeholder='Tu nombre'
                  />
                  <input
                    className='block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full'
                    type='email'
                    placeholder='E-mail'
                  />
                  <input
                    className='block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full'
                    type='text'
                    placeholder='Phone number'
                  />
                  <div className='relative'>
                    {' '}
                    <span className='absolute top-1/2 right-0 mr-10 transform -translate-y-1/2'>
                      {' '}
                      <svg
                        width={12}
                        height={8}
                        viewBox='0 0 12 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1.33203 1.66439L5.9987 6.33105L10.6654 1.66439'
                          stroke='black'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>{' '}
                  </div>{' '}
                  <textarea
                    className='w-full h-52 py-5 px-8 text-coolGray-500 bg-white border border-coolGray-400 rounded-3xl resize-none mb-8'
                    placeholder='Message'
                    rows={3}
                    defaultValue={''}
                  />
                  <button
                    className='block w-full py-5 px-8 text-center font-medium text-white leading-none bg-black hover:bg-blue-500 rounded-full transition duration-150'
                    type='submit'
                  >
                    Enviar
                  </button>{' '}
                </form>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

