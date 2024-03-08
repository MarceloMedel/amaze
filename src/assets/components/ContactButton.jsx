/* eslint-disable no-unused-vars */
import React from 'react';


export default function ContactButton() {

    return (
        <>
        <a
              className='group border-2 inline-flex mb-3 sm:mb-0 sm:mr-4 py-5 px-8 text-black hover:text-white leading-none items-center justify-center bg-white hover:bg-black rounded-full transition duration-150'
              href='#contacto'
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
        </>
    )
}
