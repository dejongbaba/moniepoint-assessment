import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Component() {
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
        <div className='space-y-4 text-center py-[100px]'>
            <motion.div initial='scale'
                        whileInView='scaleInView' variants={textVariants}
                        transition={{...transition, delay: .5}}
                        className='w-[100px] h-[100px] m-auto items-center justify-center flex rounded-2xl bg-primary shadow-lg shadow-orange-100'>
                <FontAwesomeIcon className='w-10 h-10 text-white' icon={faRocket}/>
            </motion.div>
            <motion.h1
                initial='initial'
                whileInView='inView' variants={textVariants}
                transition={{...transition, delay: .5}}
                className=' text-big font-semibold leading-tight'>Get Started
            </motion.h1>
            <motion.p initial='initial'
                      whileInView='inView' variants={textVariants}
                      transition={{...transition, delay: .5}}
                      className='font-medium text-[1.5rem] text-gray-400 w-[50%] m-auto '>Turn
                information
                into advantage! Start using Ramos today.
                Signup
                for a
                free
                trail.
            </motion.p>

            <div className='grid grid-cols-2 gap-4'>
                <div className='text-right'>
                    <motion.button initial='scale'
                                   whileInView='scaleInView' variants={textVariants}
                                   transition={{...transition, delay: 1}} type='button'
                                   className='bg-gray-200 rounded-lg px-5  px-6 py-4 text-base '>Request a demo
                    </motion.button>
                </div>
                <div className='text-left'>
                    <motion.button initial='scale'
                                   whileInView='scaleInView' variants={textVariants}
                                   transition={{...transition, delay: 1}} type='button'
                                   className='bg-primary text-white rounded-lg text-base  px-6 py-4 '>Start for
                        free
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Component;
