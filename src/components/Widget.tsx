import React from 'react';
import {motion} from "framer-motion";

function Widget() {
    const textVariants = {
        initial: {
            opacity: 0,
            transform: `translate3d(0, 90px, 0.1px)`
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
            transform: `translate3d(0,0,0)`
        }
    };
    const transition = {duration: 1, delay: 2, ease: [.25, 1, .45, 1]}
    return (
        <motion.div initial='initial' whileInView='inView'
                    transition={{...transition, delay: .5}}
                    variants={textVariants}
                    className='py-32 px-12 rounded-[120px] bg-gray-100 space-y-12'>
            <div className='flex justify-between items-center'>
                <div className='flex-1 text-6xl w-[65%]'>
                    <motion.p className='font-medium'
                              initial='initial' whileInView='inView'
                              transition={{...transition, delay: .5}}
                              variants={textVariants}
                    >Your key to strategic
                    </motion.p>
                    <motion.p className='font-medium'
                              initial='initial' whileInView='inView'
                              transition={{...transition, delay: .5}}
                              variants={textVariants}
                    >Success through analytics
                    </motion.p>
                </div>
                <div className='text-2xl w-[35%]'>
                    <p className=' mx-auto'> Ready for exciting, instantaneous,
                    </p> <p className=' mx-auto'> all-accessible insights in real
                    time ?
                </p>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3'>
                <div
                    className='col-span-3 overflow-auto relative mr-3 flex p-5 bg-white rounded-2xl border shadow-b-lg'>
                    <img src='/images/png/fast-easy.png'/>
                </div>
                <div className='col-span-2 space-y-4 bg-black px-4 py-6 rounded-2xl border shadow-b-lg'>
                    <img src='/images/png/widget-control.png'/>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <div className='flex-1 w-[50%]'>
                    <h3 className='flex items-end justify-end'>
                        <span className='text-2xl leading-tight font-normal pb-[30px]'>Up to</span> <span
                        className='text-big leading-tight font-normal'>45%</span>
                    </h3>
                </div>
                <div className='w-[50%]'>
                    <p className='w-[55%] leading-normal'>
                        Increase your analytic efficiency by up to 45% unique algorithms provide insights from data,
                        reduce time for analytics and save time for making important, informed decisions
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Widget;
