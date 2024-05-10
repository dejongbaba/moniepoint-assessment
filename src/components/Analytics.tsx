import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faPlay, faRocket} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Analytics() {

    const textVariants = {
        initial: {
            // y: 0,
            // x: 0,
            opacity: 0,
            transform: `translate3d(0, 90px, 0.1px)`
        },
        scale: {
            // y: 0,
            // x: 0,
            opacity: 0,
            scale: 0,
        },
        scaleInView: {
            // y: 0,
            // x: 0,
            opacity: 1,
            scale: 1,
        },
        inView: {
            // y: [-45, 0, 20, 0],
            // x: [0, -45, 20, 0],
            opacity: 1,
            transform: `translate3d(0,0,0)`
            // transition: {
            //     type: "spring",
            //     bounce: 0.4,
            //     duration: 0.8
            // }
        }
    };
    const transition = {duration: 1, delay: 2, ease: [.25, 1, .45, 1]}
    return (
        <div className='min-h-screen'>
            <div className='relative   text-center mt-[7rem]'>
                {/* first line */}
                <motion.div initial='scale' whileInView='scaleInView' transition={transition} variants={textVariants}
                            className='absolute z-5 right-[4%] top-[12%] video bg-gray-300 rounded-lg  w-[320px] h-[270px]'>
                    <div className='relative w-full h-full'>
                        <span
                            className='w-12 h-12  flex items-center justify-center bg-primary absolute right-[92%] bottom-[89%] shadow-lg   rounded-full text-white'>
                            <FontAwesomeIcon className='w-4 h-4'
                                             icon={faPlay}/></span>
                    </div>

                </motion.div>
                <div className='flex justify-center items-start'>
                    <div className='flex shrink items-center justify-center pr-[5rem] mr-[8rem]'>
                        <div className='relative flex justify-center '>
                            <motion.div initial='scale' whileInView='scaleInView' variants={textVariants}
                                        transition={transition}
                                // viewport={{once: true}}
                                        className='rounded-full w-[120px] h-[120px] flex items-center justify-center  bg-gray-100 text-orange'>
                                <FontAwesomeIcon width={15} className='w-6 h-6' icon={faRocket}/>
                            </motion.div>
                            <motion.div initial='scale' whileInView='scaleInView' variants={textVariants}
                                        transition={transition}
                                // viewport={{once: true}}
                                        className='rounded-full w-[120px] h-[120px] flex items-center justify-center relative left-[-10px] z-5  bg-primary text-white'>
                                <FontAwesomeIcon icon={faPlay} className='w-6 h-6'/>
                            </motion.div>
                        </div>
                        {/* analytic */}
                        <motion.p initial='initial'
                                  whileInView='inView' variants={textVariants}
                                  transition={transition}
                            // viewport={{once: true}}
                                  className='font-urbanist  text-big leading-tight	'>Analytics
                        </motion.p>
                    </div>

                </div>


                {/* square box */}

                {/* middle line */}
                <motion.p
                    initial='initial'
                    whileInView='inView'
                    variants={textVariants}
                    transition={transition}

                    className=' text-big relative leading-none pr-[6rem] mr-[9rem]'>that <span
                    className='text-gray-300'>helps</span> you
                </motion.p>
                {/* bottom line */}
                <motion.p initial='initial'
                          whileInView='inView'
                          variants={textVariants}
                          transition={transition}
                          className='flex items-center justify-center leading-tight text-big'> shape <div
                    className='bg-secondary flex mx-6 justify-center items-center h-24 w-24 mx-2 rounded-full text-black'>
                    <FontAwesomeIcon className='w-8 h-8' icon={faAngleDoubleDown}/>
                </div> the future
                </motion.p>
            </div>

        </div>
    );
}

export default Analytics;
