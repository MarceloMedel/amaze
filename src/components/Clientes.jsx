import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Clientes() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section
        className='py-12 md:py-24 bg-coolGray-50 bs-section-dragged'
        id='services-section'
      >
        <div className='container mx-auto px-4'>
          <div className='inline-flex w-full mx-auto items-start justify-center text-center mb-20'>
            <h1 className='font-heading text-3xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-10xl tracking-tighter pt-4'>
              Clientes
            </h1>
          </div>
          <a className='text-black font-medium hover:underline' href='#'>
            Simple link
          </a>
          <div className='flex flex-wrap -mx-4 -mb-20'>
            <div className='w-full lg:w-1/2 px-4 mb-20'>
              <a className='group block' href='#'>
                <img
                  className='block object-cover h-80'
                  src='https://images.unsplash.com/photo-1622210642960-0f6a2cdbdc9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxNHx8cmF2NHxlbnwwfHx8fDE3MDc4Mjk1MzN8MA&ixlib=rb-4.0.3&q=85&w=1920'
                  alt=''
                />
                <div className='relative mb-6 rounded-4xl overflow-hidden'>
                  <div className='absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200'>
                    <img
                      className='block w-full h-full'
                      src='asitrastudio-assets/projects/photo-one-four4.png'
                      alt=''
                    />
                  </div>
                </div>
                <div>
                  <h3 className='text-4xl tracking-tight mb-6'>
                    Toyota RAV4 Híbrida
                  </h3>
                  <p
                    className='max-w-xl text-coolGray-600'
                    contentEditable='false'
                  >
                    Breve descripción del trabajo realizado...
                  </p>
                </div>
              </a>
            </div>
            <div className='w-full lg:w-1/2 px-4 mb-20'>
              <a className='group block' href='#'>
                <img
                  className='block object-cover h-80'
                  src='https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw0fHxmMTUwfGVufDB8fHx8MTcwNzg1NDI3MHww&ixlib=rb-4.0.3&q=85&w=1920'
                  alt=''
                />
                <div className='relative mb-6 rounded-4xl overflow-hidden'>
                  <div className='absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200'>
                    <img
                      className='block w-full h-full'
                      src='https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHxmb3JkJTIwZjE1MHxlbnwwfDB8fHwxNzA3ODI5Njk4fDA&ixlib=rb-4.0.3&q=85&w=1920'
                      alt=''
                    />
                  </div>
                </div>
                <div>
                  <h3 className='text-4xl tracking-tight mb-6'>Ford F150</h3>
                  <p className='max-w-xl text-coolGray-600'>
                    Breve descripción del trabajo realizado...
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='mt-20 text-center'>
            <a
              className='group inline-flex py-4 px-6 md:px-30 font-medium text-black hover:text-white items-center justify-center border-1.5 border-black rounded-full hover:bg-black transition duration-200'
              href='#'
            >
              <span className='mr-2'>Ver todos</span>
              <span className='group-hover:rotate-45 transform transition duration-100'>
                <svg
                  width={10}
                  height={11}
                  viewBox='0 0 10 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 1.5L1 9.5'
                    stroke='currentColor'
                    strokeWidth='1.3'
                    strokeMiterlimit={10}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 8.83571V1.5H1.66429'
                    stroke='currentColor'
                    strokeWidth='1.3'
                    strokeMiterlimit={10}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

