import React from 'react';
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
      <section className='relative py-36 bg-black overflow-hidden'>
        <img
          className='absolute top-0 left-0 w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1632823468619-430ee574ae85?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxNnx8Y2FyJTIwd3JhcHBpbmd8ZW58MHx8fHwxNzA3NzgzMDkyfDA&ixlib=rb-4.0.3&q=85&w=1920'
          alt=''
        />
        <div className='relative container mx-auto px-4'>
          <div className='lg:max-w-3xl mx-auto text-center'>
            <h1 className='font-heading text-5xl sm:text-8xl xl:text-10xl text-white tracking-tighter mb-14'>
              <span className='inline-block'>
                Mejora tu experiencia de conducción
              </span>
              <span />
              <span className='inline-block border-b-4 underline'>
                renueva tu imagen
              </span>
            </h1>
            <a
              className='group inline-flex mb-3 sm:mb-0 sm:mr-4 py-5 px-8 text-black hover:text-white leading-none items-center justify-center bg-white hover:bg-black rounded-full transition duration-150'
              href='#'
            >
              <span className='mr-2.5'>Escríbenos</span>
              <span className='group-hover:rotate-45 transform transition duration-75'>
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

