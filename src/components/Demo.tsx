import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faRocket} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Demo() {
    return (
        <motion.div>
            <div className='p-8 space-y-5  '>
                <h2 className='text-9xl w-[80%]'> Maximize <span className='text-gray-300'>efficiency </span>
                    with our intuitive
                </h2>
                <div className='divide-y space-y-12'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='relative flex flex-1'>
                                <div
                                    className='bg-gray-200  w-[200px] relative z-10 flex items-center justify-center  h-[200px] rounded-full'>
                                    <FontAwesomeIcon icon={faRocket} className='z-10 w-12 h-12 text-primary'/>
                                    <div className="border border border-dotted w-[70%] absolute border-primary"></div>
                                </div>
                                <div
                                    className=' relative left-[-30px]  flex flex-col items-center justify-center  bg-secondary w-[200px] h-[200px] rounded-full'>
                                    <p className='text-4xl'>45%</p>
                                    <p className='text-center text-xs w-[60%] mx-auto'>System grow faster</p>
                                </div>
                            </div>
                            <marquee className='text-9xl p-8 w-[500px] rounded-full bg-secondary'>Analytic Services
                            </marquee>
                        </div>


                    </div>

                    <div className='flex justify-between items-center py-12'>
                        <p className='w-[50%]'>{`Explore traffic sources, page behaviour,conversions and more to gain deep
                            insight into your
                            audience.
                            With us your business doesn't just adapt - it evolves`} </p>
                        <div className='flex'>
                            <button className='text-xs bg-gray-300 rounded-xl px-6 py-3 mr-2'>Request a demo</button>
                            <button className='text-xs text-white bg-primary px-6 py-3 rounded-xl'>Start for free
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='p-16 bg-[#F9F9F9]  relative rounded-5xl	'>
                <div className='grid grid-cols-5'>
                    <div className='col-span-2 relative'>
                        <h2 className='mb-9 text-6xl  font-light '>Turning data into real actions and ideas.</h2>
                        <div className='space-y-6'>
                            <div className='shadow-2xl p-6 flex justify-between items-center font-light rounded-xl'>
                                <p className='text-lg '>Instant Insights</p>
                                <div className='rounded-full bg-gray-200  w-12 h-12 flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                                </div>
                            </div>
                            <div className='shadow-2xl p-6 flex justify-between items-center font-light rounded-xl'>
                                <p className='text-lg '>Ai technology </p>
                                <div className='rounded-full flex bg-gray-200 w-12 h-12  justify-center items-center'>
                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                                </div>
                            </div>
                            <div className='shadow-2xl p-6 flex justify-between items-center font-light rounded-xl'>
                                <p className='text-lg '>Easy Integration </p>
                                <div className='rounded-full flex bg-gray-200 w-12 h-12  justify-center items-center'>
                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/images/png/ramos-iphone.png" className='absolute left-[43%] z-10 top-[15%]'
                     alt="iphone with insights and demoes of ramos"/>
                <img src="/images/png/ramos-tablet.png"
                     className='absolute right-[-50px] top-0'
                     alt="iphone with insights and demoes of ramos"/>
                <div className='relative top-[-50px] text-primary font-semibold text-extra'>
                    Ramos
                </div>

            </div>
        </motion.div>

    );
}

export default Demo;
