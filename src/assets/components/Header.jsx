
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

export default function Header() {
    return (
        <React.Fragment>
            <HelmetProvider>
                <Helmet {...meta}></Helmet>
            </HelmetProvider>

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
                                <a className='inline-block hover:underline mr-10' href='/#servicios-section'>
                                    Servicios
                                </a>
                                <a
                                    className='inline-block hover:underline mr-10'
                                    href='#clientes-section'
                                    contentEditable='false'
                                >
                                    Clientes
                                </a>
                            <a
                                className='group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200'
                                href='/#contacto-section'
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
                    </div>
                </nav>
            </section>
        </React.Fragment>
    );
}
