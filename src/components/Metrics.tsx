import React from 'react';
import {motion} from "framer-motion";

function Metrics() {
    const textVariants = {
        initial: {
            opacity: 0,
            transform: `translate3d(0, 90px, 0.1px)`,
        },
        scale: {
            opacity: 0,
            scale: 0,
        },
        scaleInView: {
            opacity: 1,
            scale: 1,
        },
        inView: {
            opacity: 1,
            transform: `translate3d(0,0,0)`,
        }
    };
    const transition = {duration: 1, delay: .5, ease: [.25, 1, .45, 1]}
    return (
        <div className='text-7xl px-8 mt-6'>
            <h1 className=' tracking-[-2px] space-y-1'>
                <motion.p initial='initial' whileInView='inView' transition={transition} variants={textVariants}
                          className='w-[80%] text-[8rem] leading-[1.2]'>We give you full
                </motion.p>
                <motion.p initial='initial' whileInView='inView' transition={transition} variants={textVariants}
                          className='text-[8rem]'><span className='text-gray-300 '>control</span> over your data
                </motion.p>
            </h1>
            <div className='grid grid-cols-2 gap-4 mt-[100px]'>
                <img src="/images/png/improved-customer.png" className=''
                     alt="revenue"/>
                <img src="/images/png/monitoring-key-indicator.png" className=''
                     alt="monitoring"/>
            </div>
        </div>
    );
}

export default Metrics;
