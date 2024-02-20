import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import BeforeAfterSlider from './BeforeAfter';
//import { ImgComparisonSlider} from '@img-comparison-slider/react';
import ClienteBeforeAfter from './ClienteBeforeAfter.jsx';
import { dataCliente } from '../../dataCliente.js';
import CarouselGal from './Carousel.jsx';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ClientesGallery() {
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
              // Iterate over the data and render ClienteBeforeAfter if item.type is 'BeforeAfter' else render Carousel
              item.type === 'BeforeAfter' ? (
                <ClienteBeforeAfter key={item.title} {...item} />
              ) : (
                // <ClienteBeforeAfter key={item.title} {...item} />
                // <Carousel key={item.title} {...item} />
                <CarouselGal key={item.title} title={item.title} description={item.description} images={item.images} />
              )
              // <ClienteBeforeAfter key={item.title} {...item}/>

            )
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
