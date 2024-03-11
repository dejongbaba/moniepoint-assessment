import React from 'react';
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";

function Widget() {

    return (
        <motion.div

            className='py-32 px-12 rounded-3xl bg-gray-200 space-y-12'>
            <div className='flex justify-between items-center'>
                <div className='flex-1 text-6xl w-[50%]'>
                    <motion.p whileInView={{scale: 1, opacity: 1, translateY: 0}}
                              transition={{
                                  delay: .3, duration: 0.8,
                                  ease: [0, 0.71, 0.2, 1.01]
                              }}
                              initial={{scale: 0, opacity: 0, translateY: 160}}
                    >Your key to strategic
                    </motion.p>
                    <motion.p whileInView={{scale: 1, opacity: 1, translateY: 0}}
                              transition={{
                                  delay: .6, duration: 0.8,
                                  ease: [0, 0.71, 0.2, 1.01]
                              }}
                              initial={{scale: 0, opacity: 0, translateY: 160}}>Success through analytics
                    </motion.p>
                </div>
                <div className='  text-xl'>
                    <p className='w-[70%]'> Ready for exciting, instantaneous, all-accessible insights in real time ?
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3'>
                <div
                    className='col-span-3 overflow-auto relative mr-3 flex p-5 bg-white rounded-2xl border shadow-b-lg'>
                    <div className='w-[50%]'>
                        <motion.div whileInView={{scale: 1, opacity: 1, translateY: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: .5, ease: ['easeInOut'], damping: 2}}
                                    initial={{scale: 0, opacity: 0, translateY: -70}}
                                    className="inline-flex bg-secondary mb-[70px] p-4 rounded-2xl text-xs shadow-b-lg">
                            Setting up reports
                        </motion.div>
                        <div className='space-y-4'>
                            <h4 className='text-3xl font-semibold leading-normal w-[80%]'>Fast and easy access to
                                analytics</h4>
                            <p className='text-gray-400'>
                                One platform is a comprehensive system of solutions that will be the first step towards
                                digitalization of your business
                            </p>
                        </div>
                    </div>
                    <div
                        className='absolute space-y-4 right-0 bottom-0 left-[50%] border border-l border-gray-200  p-5 rounded-tl-3xl h-[250px] bg-white'>
                        <h2>Sales statistics</h2>
                        <div className='grid items-center  grid-cols-5 gap-3'>
                            <div
                                className='w-[60px] h-[60px] flex text-white bg-primary rounded-full justify-center items-center'>
                                <FontAwesomeIcon icon={faArrowDown} className='w-7 h-7'></FontAwesomeIcon>
                            </div>
                            <div className='col-span-2'>
                                <p className='text-gray-400 text-sm'>Total Profits</p>
                                <h3 className='text-3xl font-normal'><span className='text-lg'>$</span> 264.2k</h3>
                            </div>
                            <div className='col-span-2 bg-gray-100 rounded-2xl  p-4'>
                                <div className='text-sm '>Visitors</div>
                                <div className='relative my-1 py-2'>
                                    <p className='line border-1 h-[2px] absolute  w-full rounded-l-lg  bg-gray-200'></p>
                                    <p className='line border-1 h-[2px] absolute z-10 rounded-lg w-[50%]  bg-green-500'></p>
                                </div>
                                <div className='text-3xl font-light'>56k</div>
                            </div>
                        </div>
                    </div>
                    {/*<img src='/images/png/statistics.png' className='w-[22%] absolute right-0 '/>*/}
                </div>
                <div className='col-span-2 space-y-4 bg-black px-4 py-6 rounded-2xl border shadow-b-lg'>
                    <div className='flex justify-center'>
                        <div className=' space-y-4  border border-gray-100 text-center px-6 py-3 mr-2 rounded-3xl '>
                            <FontAwesomeIcon className='w-6 h-6 text-yellow-500' icon={faAngleDoubleDown}/>
                            <div className='flex relative items-center justify-center'>
                                <div
                                    className='w-[35px] h-[35px] border border-black relative left-[10px]  rounded-full bg-gray-300'></div>
                                <div
                                    className='w-[35px] h-[35px] border border-black rounded-full bg-orange-300 relative left-[-5px]'></div>
                            </div>
                        </div>
                        <div className='  p-4  border border-gray-100 rounded-3xl '>
                            <p>Transactions</p>
                            <div className='text-right'>
                                <span
                                    className='w-7 h-7 mr-4 rounded-full ml-auto flex items-center justify-center bg-green-500 text-white '>
                                    <FontAwesomeIcon icon={faArrowUp} className='w-4 h-4'/>
                                </span>
                            </div>
                            <h3 className='text-5xl font-light text-white'>
                                43k
                            </h3>
                        </div>
                    </div>
                    <p className='text-white text-center font-light text-2xl'>Widget control</p>
                    <p className='text-gray-400 font-normal w-[59%] mx-auto text-center'>Reports provide a comprehensive
                        overview of
                        important
                        aspects of
                        web analytics</p>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-3'>
                    <h3 className='text-right'>
                        <span className='text-2xl font-normal'>Up to</span> <span
                        className='text-9xl font-normal'>45%</span>
                    </h3>
                </div>
                <div className='col-span-3'>
                    <p className=' w-[50%] leading-normal'>
                        Increase your analytic efficiency by up to 45% unique algorithms provide insights from data,
                        reduce time for analytics and save time for making important, informed decisions
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Widget;
