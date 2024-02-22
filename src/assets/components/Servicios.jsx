import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ServiceCard from './ServiceCard.jsx';
import { dataServicio } from '../../dataServicio.js';


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
          <div className='flex flex-wrap -mx-1.5'>
            {dataServicio.map((item) =>
              <ServiceCard key={item.title} {...item} />
            )
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

