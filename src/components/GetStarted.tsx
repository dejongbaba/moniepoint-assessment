import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function div() {
    return (
        <div className='space-y-5 text-center py-[100px]'>
            <motion.div
                // initial={{opacity: 0, scale: 2}}
                // whileInView={{opacity: 1, scale: 1}}
                // transition={{
                //     duration: 0.8,
                //     delay: 0.5,
                //     ease: [0, 0.71, 0.2, 1.01]
                // }}

                className='w-[80px] h-[80px] m-auto items-center justify-center flex rounded-lg bg-primary shadow-lg'>
                <FontAwesomeIcon className='w-7 text-white' icon={faRocket}/>
            </motion.div>
            <motion.h1 initial={{opacity: 0, scale: 2, translateY: 40}}
                       whileInView={{opacity: 1, scale: 1, translateY: 0}}
                       transition={{
                           duration: 0.8,
                           delay: 0.5,
                           ease: [0, 0.71, 0.2, 1.01]
                       }} className=' text-big font-semibold'>Get Started
            </motion.h1>
            <p className='text-gray-400 w-[28%] m-auto '>Turn information into advantage! Start using Ramos today.
                Signup
                for a
                free
                trail.</p>

            <div className='grid grid-cols-2 gap-2'>
                <div className='text-right'>

                    <button type='button' className='bg-gray-200 rounded-lg px-5  px-6 py-4 text-xs '>Request a demo
                    </button>
                </div>
                <div className='text-left'>

                    <button type='button' className='bg-primary text-white rounded-lg text-xs  px-6 py-4 '>Start for
                        free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default div;
