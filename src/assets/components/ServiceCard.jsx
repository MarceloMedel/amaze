// import React from 'react';
import ContactButton from './ContactButton';
import PropTypes from 'prop-types';

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.icon,
    image: PropTypes.image,
    alt: PropTypes.string
  }

export default function ServiceCard({ title, description, icon, image, alt }) {
    return (
        <>
            <div className='w-full xl:w-1/2 px-1.5 mb-4 xl:mb-0'>
                <div className='h-full border rounded-4xl'>
                    <img
                        className='block mb-16 w-full h-88 rounded-4xl object-cover'
                        src={image}
                        alt={alt}
                    />
                    <div className='px-6 max-w-lg mx-auto pb-16 text-center'>
                        <img
                            className='inline-block h-15'
                            src={icon}
                            alt=''
                        />
                        <span className='block text-4xl mb-4'>{title}</span>
                        <p className='text-normal text-justify mb-4'>{description}</p>
                        <ContactButton />
                    </div>
                </div>
            </div>
        </>
    )
}
