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
              
              
            <h1 className='font-avenir tracking-tightest text-4xl sm:text-6xl xl:text-10xl md:text-8xl pb-4'>
              Renuévate por dentro, brilla por fuera.
            </h1>
            <div />
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
                src='images/sellado.jpg'
                alt=''
              />
            </div>
            <div className='hidden md:block md:w-6/12 lg:w-5/12 px-3'>
              <div className='flex flex-wrap -mx-3'>
                <div className='w-5/12 px-3'>
                  <img
                    className='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
                    // src='https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyfHxjYXIlMjBkZXRhaWxpbmd8ZW58MHwxfHx8MTcwNzg1NzA3N3ww&ixlib=rb-4.0.3&q=85&w=1920'
                    src='images/pulido.jpg'
                    alt=''
                  />
                </div>
                <div className='w-7/12 px-3'>
                  <img
                    className='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
                    // src='https://images.unsplash.com/photo-1620247230855-f1967e9d85dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyOXx8Y2FyJTIwZGV0YWlsaW5nfGVufDB8MXx8fDE3MDc4NTcwODN8MA&ixlib=rb-4.0.3&q=85&w=1920'
                    src='images/interior.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
    </React.Fragment>
  );
}

