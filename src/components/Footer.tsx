'use client'
import React from 'react';
import {motion} from "framer-motion";

function Footer() {
    return (
        <motion.div className='bg-black px-[30px] py-[40px] relative bottom'>
            <div className=" divide-y divide-gray-100 space-y-8">
                <motion.div
                    initial={{opacity: 0, scale: 2, translateY: 40}}
                    whileInView={{opacity: 1, scale: 1, translateY: 0}}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='flex py-6 justify-between items-center'>
                    <ul className='flex font-light'>
                        <li><a href="#" className='hover:text-white text-gray-300 transition '>About</a></li>
                        <li><a href="#" className='mx-8 hover:text-white text-gray-300 transition '>Why us</a></li>
                        <li><a href="#" className='mx-8 hover:text-white text-gray-300 transition '>Platform</a></li>
                        <li><a href="#" className='mx-8 hover:text-white text-gray-300 transition '>Pricing</a></li>
                        <li><a href="#" className='mx-8 hover:text-white text-gray-300 transition '>Contact</a></li>
                    </ul>
                    <h3 className='text-5xl text-white'>hello@ramos.com</h3>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 2, translateY: 40}}
                    whileInView={{opacity: 1, scale: 1, translateY: 0}}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='grid grid-cols-4 py-[50px] '>
                    <div className='col-span-1'>
                        <h3 className='text-white'>Warrensville Heights</h3>
                        <p className=' text-gray-300 font-thin'>14418 Vineyard Drive, NC</p>
                        <p className=' text-gray-300 font-thin'>44128</p>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='text-white font-normal'>Saint Louis </h3>
                        <p className=' text-gray-300 font-thin'>1366 Penn Street</p>
                        <p className=' text-gray-300 font-thin'>63101</p>
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
                        initial={{opacity: 0, scale: 2, translateY: 40}}
                        whileInView={{opacity: 1, scale: 1, translateY: 0}}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='text-9xl text-white'>Ramos<span>&reg;</span></motion.p>
                    {/*<img className='w-[400px]' src="/images/png/ramos-registered.png" alt="ramos registered logo"/>*/}
                </li>
                <li className='text-gray-300 font-thin'>
                    Privacy
                </li>
                <li className='text-gray-300 font-thin'>
                    License agreement
                </li>
                <li>
                    <motion.img
                        initial={{opacity: 0, scale: 2, translateY: 40}}
                        whileInView={{opacity: 1, scale: 1, translateY: 0}}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='w-[100px]' src="/images/png/barcode.png" alt="barcode"/>
                </li>
            </ul>


        </motion.div>
    );
}

export default Footer;
