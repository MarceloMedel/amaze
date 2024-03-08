import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { slide as Menu } from 'react-burger-menu';

// import { Link } from "react-router-dom";

const meta = {
    title: '',
    meta: [],
    link: [],
    style: [],
    script: [],
};

// Define custom styles for the menu
const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        // left: '36px',
        right: '36px',
        top: '70px',
    },
    bmBurgerBars: {
        background: '#000000',
    },
    bmBurgerBarsHover: {
        background: '#a90000',
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
    },
    bmCross: {
        background: '#bdc3c7',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
    },
    bmMenu: {
        background: '#007088',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    // bmMorphShape: {
    //     fill: '#373a47',
    // },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    bmItem: {
        // display: 'inline-block',
        textDecoration: 'none',
        color: '#d1d1d1',
        marginBottom: '10px',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
    },
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };


    return (
        <React.Fragment>
            <HelmetProvider>
                <Helmet {...meta}></Helmet>
            </HelmetProvider>

            <section className='relative bg-coolGray-50 overflow-hidden bs-section-dragged'>
                <nav>
                    <div className='container mx-auto px-4'>
                        <div className='flex h-24 items-center sm:flex-auto-row'>

                            <div className='flex xl:flex-row xd:flex-col'>
                                <img
                                    className='h-15 mb-4 mt-2'
                                    src='images/logo.svg'
                                    alt=''
                                />

                                <img
                                    className='h-12 ml-10 mt-5 hidden lg:block'
                                    src='images/amaze-cdb-png-1707775473066.webp'
                                    alt=''
                                />
                            </div>
                            {/* <button className='lg:hidden navbar-burger py-1 ml-auto' onClick={() => setMenuOpen(!menuOpen)}>
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
                                
                            </button> */}
                            {/* <div className='lg:hidden navbar-burger py-1 ml-auto' onClick={() => setMenuOpen(!menuOpen)}> */}
                                {/* <Menu isOpen={menuOpen} onStateChange={handleMenuStateChange} styles={styles}> */}
                                    {/* Add your menu items here */}
                                    {/* <li><a className="menu-item" href="/" onClick={() => setMenuOpen(!menuOpen)}>
                                        Home
                                    </a></li>
                                    <li><a className="menu-item" href="/#servicios" onClick={() => setMenuOpen(!menuOpen)} >
                                        Servicios
                                    </a></li>
                                    <li><a className="menu-item" href="/#contacto" onClick={() => setMenuOpen(!menuOpen)} >
                                        Contacto
                                    </a></li> */}
                                {/* </Menu> */}
                            {/* </div> */}
                            <div className='hidden lg:flex ml-auto mr-12 items-center'>
                                <a className='inline-block hover:underline mr-10' href='/#servicios'>
                                    Servicios
                                </a>
                                {/* <a
                                    className='inline-block hover:underline mr-10'
                                    href='#clientes-section'
                                    contentEditable='false'
                                >
                                    Portafolio
                                </a> */}
                                {/* <a
                                    className='inline-block hover:underline mr-10'
                                    href='#clientes-section'
                                    contentEditable='false'
                                >
                                    Nosotros
                                </a> */}
                                <a
                                    className='group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200'
                                    href='/#contacto'
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
