import React from 'react';

export default function FormContacto() {
    return (
        <>
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
        </>
    )
}