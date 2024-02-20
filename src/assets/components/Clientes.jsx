import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import BeforeAfterSlider from './BeforeAfter';
//import { ImgComparisonSlider} from '@img-comparison-slider/react';
import ClienteBeforeAfter from './ClienteBeforeAfter';
import { dataCliente } from '../../dataClienteExample.js';

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
        id='clientes-section'
      >
        <div className='container mx-auto px-4'>
          <div className='inline-flex w-full mx-auto items-start justify-center text-center mb-20'>
            <h1 className='font-heading text-3xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-10xl tracking-tighter pt-4'>
              Clientes
            </h1>
          </div>

          <div className='flex flex-wrap -mx-4'>
            {dataCliente.map((item) => 
              <ClienteBeforeAfter key={item.title} {...item}/>

            )}
          </div>
          <div className='mt-20 text-center'>
            <a
              className='group inline-flex py-4 px-6 md:px-30 font-medium text-black hover:text-white items-center justify-center border-1.5 border-black rounded-full hover:bg-black transition duration-200'
              href='/clientesPage'
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

