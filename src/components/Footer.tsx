'use client'
import React from 'react';
import {motion} from "framer-motion";

function Footer() {
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
        <motion.div initial='initial'
                    whileInView='inView'
                    transition={{...transition, delay: .5}} variants={textVariants}
                    className='bg-black px-[30px] pt-[80px] pb-[80px] relative bottom'>
            <div className=" divide-y divide-gray-100 space-y-8">
                <motion.div
                    // initial={{opacity: 0, scale: 2, translateY: 40}}
                    // whileInView={{opacity: 1, scale: 1, translateY: 0}}
                    // transition={{
                    //     duration: 0.8,
                    //     delay: 0.5,
                    //     ease: [0, 0.71, 0.2, 1.01]
                    // }}
                    className='flex py-6 justify-between items-center'>
                    <ul className='flex font-light'>
                        <li><a href="#" className='text-xl hover:text-white text-gray-300 transition '>About</a></li>
                        <li><a href="#" className='text-xl mx-8 hover:text-white text-gray-300 transition '>Why us</a>
                        </li>
                        <li><a href="#"
                               className='text-xl mx-8 hover:text-white text-gray-300 transition '>Platform</a></li>
                        <li><a href="#"
                               className='text-xl mx-8 hover:text-white text-gray-300 transition '>Pricing</a></li>
                        <li><a href="#"
                               className='text-xl mx-8 hover:text-white text-gray-300 transition '>Contact</a></li>
                    </ul>
                    <motion.h3 initial='initial'
                               whileInView='inView'
                               transition={{...transition, delay: .5}} variants={textVariants}
                               className='text-[5rem] text-white'>hello@ramos.com
                    </motion.h3>
                </motion.div>
                <motion.div

                    className='grid grid-cols-4 py-[50px] '>
                    <div className='col-span-1'>
                        <h3 className='text-white font-normal text-xl'>Warrensville Heights</h3>
                        <p className=' text-gray-300 font-light text-base'>14418 Vineyard Drive, NC</p>
                        <p className=' text-gray-300 font-light text-base'>44128</p>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='text-white font-normal text-xl'>Saint Louis </h3>
                        <p className=' text-gray-300 font-light text-base'>1366 Penn Street</p>
                        <p className=' text-gray-300 font-light text-base'>63101</p>
                    </div>
                    <ul className='col-span-1 space-y-3 text-right font-thin '>
                        <li className='text-white  text-xl'>Linkedin</li>
                        <li className='text-white  text-xl'>Instagram</li>
                        <li className='text-white  text-xl'>Facebook</li>
                    </ul>
                </motion.div>
            </div>
            <ul className='flex items-center space-x-4 justify-between'>
                <li>
                    <motion.p
                        initial='initial'
                        whileInView='inView'
                        transition={{...transition, delay: .5}} variants={textVariants}
                        className='text-[10rem] text-white'>Ramos<span>&reg;</span></motion.p>
                </li>
                <li className='text-gray-300 font-thin'>
                    Privacy
                </li>
                <li className='text-gray-300 font-thin'>
                    License agreement
                </li>
                <li>
                    <motion.img
                        initial='scale'
                        whileInView='scaleInView'
                        transition={{...transition, delay: .5}} variants={textVariants}
                        className='w-[150px]' src="/images/png/barcode.png" alt="barcode"/>
                </li>
            </ul>


        </motion.div>
    );
}

export default Footer;
