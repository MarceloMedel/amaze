import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: 'Amaze\u0020Car\u0020Detailing',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative bg-coolGray-50 overflow-hidden bs-section-dragged'>
          <nav>
            <div className='container mx-auto px-4'>
              <div className='flex h-24 items-center'>
                <a className='inline-block' href='#'>
                  <img
                    className='h-15'
                    src='images/logo-svg-1707772027322.webp'
                    alt=''
                  />
                </a>
                <button className='lg:hidden navbar-burger py-1 ml-auto'>
                  <svg
                    width={44}
                    height={16}
                    viewBox='0 0 44 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  > 
                    <rect width={44} height={2} rx={1} fill='black' />
                    <rect y={14} width={44} height={2} rx={1} fill='black' />
                  </svg>
                </button>
                <div className='hidden lg:flex ml-auto mr-12 items-center'>
                  <a className='inline-block hover:underline mr-10' href='#'>
                    Servicios
                  </a>
                  <a
                    className='inline-block hover:underline mr-10'
                    href='#'
                    contentEditable='false'
                  >
                    Clientes
                  </a>
                </div>
                <a
                  className='group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200'
                  href='contacto.html'
                >
                  <span className='mr-2'>Contacto</span>
                  <span className='group-hover:rotate-45 transform transition duration-100'>
                    <svg
                      width={10}
                      height={10}
                      viewBox='0 0 10 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 1L1 9'
                        stroke='currentColor'
                        strokeWidth='1.3'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9 8.33571V1H1.66429'
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
          </nav>
          <div className='container mx-auto px-4'>
            <div className='relative mx-auto mb-12 pt-12 pb-64 xs:pb-40 lg:pb-12 border-b space-y-20'>
              <h1 className='font-heading tracking-tightest text-5xl sm:text-8xl xl:text-12xl md:text-9xl'>
                Renuevate por dentro, brilla por fuera.
              </h1>
              <div className='flex flex-wrap -mx-4 -mb-4 md:mb-0'>
                <div className='w-full md:w-1/3 px-4 mb-4 md:mb-0'>
                  <img
                    className='h-12'
                    src='images/amaze-cdb-png-1707775473066.webp'
                    alt=''
                  />
                </div>
                <div className='w-full md:w-2/3 px-4 mb-4 md:mb-0'>
                  <p className='mb-2'>somos los mejores del mundo blablabla</p>
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
        <section className='py-12 md:py-24 bg-coolGray-50 overflow-hidden'>
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
                      <p className='mb-8'>DESCRIPCION</p>
                      <a
                        className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black'
                        href='contacto.html'
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
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full xl:w-1/2 px-1.5'>
                  <a className='group block mb-3 border rounded-4xl' href='#'>
                    <div className='flex flex-wrap justify-between'>
                      <div className='w-full md:w-7/12 pl-6 sm:pl-12 pr-5 py-0 self-center'>
                        <div className='max-w-xs py-18'>
                          <span className='inline-block mb-3 py-2 px-3 text-sm text-black group-hover:text-white leading-none border-1.5 border-black group-hover:bg-black rounded-full transition duration-200'>
                            Contacto
                          </span>
                          <span className='block text-4xl mb-4'>Car Wash</span>
                          <p>DESCRIPCION</p>
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
                          <span className='inline-block mb-3 py-2 px-3 text-sm text-black group-hover:text-white leading-none border-1.5 border-black group-hover:bg-black rounded-full transition duration-200'>
                            Contacto
                          </span>
                          <span className='block text-4xl mb-4'>Wrapping</span>
                          <p>DESCRIPCION</p>
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
        <div className='container mx-auto'>
          <div className='flex flex-wrap -mx-4 -mb-4 md:mb-0'></div>
        </div>
        <section className='py-12 md:py-20 bg-coolGray-100 bg-black'>
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
                      Whereby Embedded is the easiest way to embed video calls
                      directly into your app, website, or anywhere else you need
                      beautiful, custom video chat – that just works.
                    </p>{' '}
                  </div>{' '}
                  <div className='flex flex-wrap -mx-4 mb-20'>
                    {' '}
                    <div className='w-full sm:w-1/2 px-4 mb-6 sm:mb-0'>
                      {' '}
                      <div className='py-6 text-center border border-coolGray-300 rounded-3xl justify-center items-center'>
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
                      </div>{' '}
                    </div>{' '}
                    <div className='w-full sm:w-1/2 px-4'>
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
      </>
    </React.Fragment>
  );
}

