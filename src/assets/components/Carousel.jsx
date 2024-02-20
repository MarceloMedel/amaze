/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Carousel({title, description, images=[]}) {
    // const [page, setPage] = useState(0);
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }
    return (
        <div className="w-full lg:w-1/2 px-4 mb-20 h-60">
            <div className="relative rounded-4xl">
                <Slide {...properties}>
                    {images.map((image, index) => (
                        <div key={index} >
                            <div className="each-slide-effect" style={{'backgroundImage': `url(${image})`}}>
                                <span>{index}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
            <h3 className="text-4xl tracking-tight mb-6">{title}</h3>
            <p className="max-w-xl text-coolGray-600">{description}</p>
        </div>
    );
}