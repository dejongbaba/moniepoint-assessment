import React from 'react';
import {faAngleDoubleDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";

function Widget() {

    return (
        <motion.div

            whileInView={{scale: 1, y: 0, opacity: 1}}
            viewport={{once: true}}
            initial={{scale: 0, y: 105, opacity: 0}}

            className='py-32 px-12 rounded-3xl bg-gray-200 space-y-12'>
            <div className='flex justify-between'>
                <div className='flex-1 text-5xl w-[50%]'>
                    <p>Your key to strategic </p>
                    <p>Success through analytics </p>
                </div>
                <div className='w-[40%] m-auto text-xs'>
                    <p> Ready for exciting, instantaneous, all-accessible insights in real time ?
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3'>
                <div className='col-span-3 relative mr-3 flex p-5 bg-white rounded-lg border shadow-b-lg'>
                    <div>
                        <div className="inline-flex bg-secondary mb-6 p-3 rounded-lg text-xs shadow-b-lg">
                            Setting up reports
                        </div>
                        <div className='space-y-4'>
                            <h4 className='text-3xl w-[80%]'>Fast and easy access to analytics</h4>
                            <p className='text-gray-400'>
                                One platform is a comprehensive system of solutions that will be the first step towards
                                digitalization of your business
                            </p>
                        </div>
                    </div>
                    <img src='/images/png/statistics.png' className='w-[22%] absolute right-0 '/>
                </div>
                <div className='col-span-2 space-y-4 bg-black rounded-lg border shadow-b-lg'>
                    <div className='flex justify-center'>
                        <div className=' w-20 space-y-4 h-20 border border-gray-100 mr-2 rounded-xl '>
                            <FontAwesomeIcon className='w-6 h-6' icon={faAngleDoubleDown}/>
                            <div className='flex relative'>
                                <div className='w-6 h-6 border-1 border-black rounded-full bg-gray-300'></div>
                                <div
                                    className='w-6 h-6 border-1 border-black rounded-full bg-orange-300 relative left-[-10px]'></div>
                            </div>
                        </div>
                        <div className=' w-20 h-20 border border-gray-100 rounded-xl '>
                            <p>Transactions</p>
                            <div className='text-right'>
                                <span className='w-7 h-7 mr-4 rounded-full bg-green-500 text-white '>
                                    <FontAwesomeIcon icon={faArrowUp} className='w-5 h-5'/>
                                </span>
                            </div>
                            <h3 className='text-5xl text-white'>
                                43k
                            </h3>
                        </div>
                    </div>
                    <p className='text-white text-center'>Wigdget control</p>
                    <p className='text-gray-300 text-xs text-center'>Reports provide a comprehensive overview of
                        important
                        aspects of
                        web analytics</p>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3'>
                <div className='col-span-2'>
                    <h3 className='text-right'>
                        <span>Up to</span> <span className='text-7xl'>45%</span>
                    </h3>
                </div>
                <div className='col-span-3'>
                    <p className='text-xs w-[50%] leading-normal'>
                        Increase your analytic efficiency by up to 45% unique algorithms provide insights from data,
                        reduce time for analytics and save time for making important, informed decisions
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Widget;
