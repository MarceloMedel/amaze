import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
//import { images } from "./image-data";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1 : -1,
            // opacity: 0
        };
    },
    center: {
         zIndex: 0,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1 : -1,
            // opacity: 0,
            // scrollY: 0

        };
    }
};

// const swipeConfidenceThreshold = 1000;
// const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity;
// };

export default function Carousel({ title, description, images = [] }) {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page); 



    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="w-full lg:w-1/2 sm:w-1 py-4 mb-1" >
            <div className="relative rounded-4xl">
                        
                            <div class="prev" onClick={() => paginate(-1)}>
                                {/* insert a previous arrow */}
                                &#8594; {/* Unicode for left arrow */}
                            </div>
                            <div class="next" onClick={() => paginate(1)}>
                                {/* insert a next arrow */}
                                &#8594; {/* Unicode for right arrow */}
                                
                            </div>
                <AnimatePresence initial={true} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 10000, damping: 50 },
                             opacity: { duration: 10 }
                        }}
                        // drag="x"
                        // dragConstraints={{ left: 0, right: 0 }}
                        // dragElastic={0}
                        // onDragEnd={(e, { offset, velocity }) => {
                        //     const swipe = swipePower(offset.x, velocity.x);

                        //     if (swipe < -swipeConfidenceThreshold) {
                        //         paginate(1);
                        //     } else if (swipe > swipeConfidenceThreshold) {
                        //         paginate(-1);
                        //     }
                        // }}
                    />
                </AnimatePresence>
            </div>
            <div>
               
                <h3 className="text-4xl tracking-tight mb-6">{title}</h3>
                <p className="max-w-xl text-coolGray-600">{description}</p>
            </div>
        </div>

    );
}
