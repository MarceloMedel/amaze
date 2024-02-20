import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { Link } from "react-router-dom";

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Hero() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='relative bg-coolGray-50 overflow-hidden bs-section-dragged'>
        <div className='container mx-auto px-1 overflow-auto'>
          <div className='relative mx-auto mb-auto pt-8 pb-24 xs:pb-40 lg:pb-12 border-b'>
              <div className='w-full md:w-1/3 px-4 mb-4 md:mb-0'>
                <img
                  className='w-full left-0 pb-4'
                  src='images/amaze-cdb-png-1707775473066.webp'
                  alt=''
                />
              </div>
              
            <h1 className='font-avenir tracking-tightest text-4xl sm:text-6xl xl:text-10xl md:text-8xl pb-4'>
              Renuevate por dentro, brilla por fuera.
            </h1>
            <div />
            <div className='flex flex-wrap -mx-4 -mb-4 md:mb-0 p-3'>
              <div className='w-full md:w-2/3 px-0 mb-2 md:mb-0 '>
                <p className='mb-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  sit eaque totam aliquid veritatis assumenda temporibus harum
                  unde!
                </p>
              </div>
            </div>
            <div className='absolute bottom-0 right-0 mb-10 max-w-sm ml-auto text-right'>
              <p></p>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 align-items-end'>
            <div className='w-full md:w-6/12 lg:w-7/12 px-3 relative'>
              <div className='absolute top-0 right-0 w-44 h-44 mt-4 mr-5 flex items-center justify-center'>
                <img
                  className='absolute top-0 left-0 animate-pulse'
                  style={{ animationDirection: 'reverse' }}
                  src='images/isologo-white.svg'
                  alt=''
                />
              </div>
              <img
                className='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
                src='https://images.unsplash.com/photo-1508974239320-0a029497e820?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw0fHxjYXIlMjBkZXRhaWxpbmd8ZW58MHwwfHx8MTcwNzg1NzA3NHww&ixlib=rb-4.0.3&q=85&w=1920'
                alt=''
              />
            </div>
            <div className='hidden md:block md:w-6/12 lg:w-5/12 px-3'>
              <div className='flex flex-wrap -mx-3'>
                <div className='w-5/12 px-3'>
                  <img
                    className='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
                    src='https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyfHxjYXIlMjBkZXRhaWxpbmd8ZW58MHwxfHx8MTcwNzg1NzA3N3ww&ixlib=rb-4.0.3&q=85&w=1920'
                    alt=''
                  />
                </div>
                <div className='w-7/12 px-3'>
                  <img
                    className='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
                    src='https://images.unsplash.com/photo-1620247230855-f1967e9d85dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyOXx8Y2FyJTIwZGV0YWlsaW5nfGVufDB8MXx8fDE3MDc4NTcwODN8MA&ixlib=rb-4.0.3&q=85&w=1920'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50'>
          <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-50' />
          <nav className='relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto'>
            <div className='flex mb-auto items-center'>
              <a className='inline-block mr-auto' href='#'>
                <img
                  className='h-4'
                  src='asitrastudio-assets/logos/logo-asi.svg'
                  alt=''
                />
              </a>
              <a className='navbar-close' href='#'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 18L18 6M6 6L18 18'
                    stroke='#111827'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </div>
            <div className='py-12 mb-auto'>
              <ul className='flex-col'>
                <li className='mb-6'>
                  <a className='inline-block text-black' href='#'>
                    About
                  </a>
                </li>
                <li className='mb-6'>
                  <a className='inline-block text-black' href='#'>
                    Services
                  </a>
                </li>
                <li className='mb-6'>
                  <a className='inline-block text-black' href='#'>
                    Projects
                  </a>
                </li>
                <li>
                  <a className='inline-block text-black' href='#'>
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a
                className='block mb-3 px-4 py-4 text-center font-medium text-black hover:text-white border border-black hover:bg-black rounded-full transition duration-200'
                href='#'
              >
                Login
              </a>
              <a
                className='block px-4 py-4 text-center font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                href='#'
              >
                Sign in
              </a>
            </div>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
}

