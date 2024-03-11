import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faPlay, faRocket} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Analytics() {

    return (
        <motion.div
            initial={{opacity: 0, translateY: 40}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}

            className='h-[100vh]'>
            <h1 className='relative flex text-big font-normal justify-center items-center  h-[500px] '>
                <div className='relative flex justify-center items-start'>
                    <div className='rounded-full w-20 h-20 flex items-center justify-center  bg-gray-100 text-orange'>
                        <FontAwesomeIcon width={15} className='w-6 h-6' icon={faRocket}/>
                    </div>
                    <div
                        className='rounded-full w-20 h-20 flex items-center justify-center relative left-[-10px] z-5  bg-primary text-white'>
                        <FontAwesomeIcon icon={faPlay} className='w-6 h-6'/>
                    </div>
                </div>
                <motion.p initial={{opacity: 0, translateY: 40}}
                          whileInView={{opacity: 1, translateY: 0}}
                          transition={{
                              duration: 0.8,
                              delay: 1,
                              ease: [0, 0.71, 0.2, 1.01]
                          }} className=' '>Analytics
                </motion.p>
                <motion.div

                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='absolute right-[-5%] top-[13%] video bg-gray-300 rounded-lg relative w-[450px] h-[300px]'>
                    <button type='button'
                            className='w-14 h-14  flex items-center justify-center bg-primary absolute left-[-5%] shadow-lg  top-[-7%] rounded-full text-white'>
                        <FontAwesomeIcon className='w-4 h-4'
                                         icon={faPlay}/></button>
                </motion.div>
                <motion.p initial={{opacity: 0, translateY: 40}}
                          whileInView={{opacity: 1, translateY: 0}}
                          transition={{
                              duration: 0.8,
                              delay: 1.2,
                              ease: [0, 0.71, 0.2, 1.01]
                          }} className='absolute text-big top-[65%] left-[5%]'>that <span
                    className='text-gray-300'>helps</span> you
                </motion.p>
                <motion.p initial={{opacity: 0, translateY: 40}}
                          whileInView={{opacity: 1, translateY: 0}}
                          transition={{
                              duration: 0.8,
                              delay: 1.5,
                              ease: [0, 0.71, 0.2, 1.01]
                          }} className='absolute flex top-[105%] items-center left-[20%] text-big'> shape <div
                    className='bg-secondary flex mx-6 justify-center items-center h-24 w-24 mx-2 rounded-full text-black'>
                    <FontAwesomeIcon className='w-8 h-8' icon={faAngleDoubleDown}/>
                </div> the future
                </motion.p>
            </h1>

        </motion.div>
    );
}

export default Analytics;
