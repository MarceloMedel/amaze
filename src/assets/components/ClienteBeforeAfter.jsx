import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
//import '@img-comparison-slider/react/dist/styles.css'; // Ensure you import the CSS


export default function ClienteBeforeAfter({ title, description, before, after }) {

  // Inline styles for the images
  const imageStyles = {
    width: '100%', // Ensure images fill the container width
    // set a fixed height
    height: 'auto',
    objectFit: 'cover', // Cover the container without stretching
  };
  return (


    <div class="w-full lg:w-1/2 px-4 mb-20">
      <a class="group block" href="#">
        <div class="relative mb-6 rounded-4xl overflow-hidden">
          {/* <div class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200"></div> */}
          <ImgComparisonSlider>
            <img slot="first" src={before} style={imageStyles} />
            <img slot="second" src={after} style={imageStyles} />
          </ImgComparisonSlider>
        </div>
        <div>
          
          <h3 class="text-4xl tracking-tight mb-6">{title}</h3>
          <p class="max-w-xl text-coolGray-600">{description}</p>
        </div>
      </a>
    </div>


    // <div className='flex-row flex-wrap w-full lg:w-1/2 px-4 mb-20 p-2'>
    //   <ImgComparisonSlider>
    //     <img slot="first" src={before} style={imageStyles} />
    //     <img slot="second" src={after} style={imageStyles} />
    //   </ImgComparisonSlider>
    //   <div>
    //     <h3 className='text-4xl tracking-tight mb-6'>
    //       {title}
    //     </h3>
    //     <p
    //       className='max-w-xl text-coolGray-600'
    //       contentEditable='false'
    //     >
    //       {description}
    //     </p>
    //   </div>

    // </div>
  );
}