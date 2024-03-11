import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faRocket} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Demo() {
    return (
        <motion.div className='relative'>
            <div className='p-8 space-y-5  '>
                <motion.h2 initial={{opacity: 0, scale: 2, translateY: 40}}
                           whileInView={{opacity: 1, scale: 1, translateY: 0}}
                           transition={{
                               duration: 0.8,
                               delay: 0.5,
                               ease: [0, 0.71, 0.2, 1.01]
                           }} className='text-9xl w-[80%]'> Maximize <span className='text-gray-300'>efficiency </span>
                    with our intuitive
                </motion.h2>
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

            <div className='px-[16px] py-[30px] bg-[#F9F9F9]  relative rounded-5xl	'>
                <div className='grid grid-cols-5'>
                    <div className='col-span-2 relative z-30'>
                        <h2 className='mb-9 text-6xl  font-light '>Turning data into real actions and ideas.</h2>
                        <motion.div initial={{opacity: 0, scaleY: 2, translateY: 40}}
                                    whileInView={{opacity: 1, scaleY: 1, translateY: 0}}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }} className='space-y-8'>
                            <div
                                className='shadow-2xl bg-white p-6 flex justify-between items-center font-light rounded-xl'>
                                <p className='text-lg '>Instant Insights</p>
                                <div className='rounded-full bg-gray-200  w-12 h-12 flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                                </div>
                            </div>
                            <div
                                className='shadow-2xl bg-white p-6 flex justify-between items-center font-light rounded-xl'>
                                <p className='text-lg '>Ai technology </p>
                                <div className='rounded-full flex bg-gray-200 w-12 h-12  justify-center items-center'>
                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                                </div>
                            </div>
                            <div
                                className='shadow-2xl bg-white p-6 flex justify-between items-center font-light rounded-xl'>
                                <p className='text-lg '>Easy Integration </p>
                                <div className='rounded-full flex bg-gray-200 w-12 h-12  justify-center items-center'>
                                    <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.img initial={{opacity: 0, translateY: 100}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} src="/images/png/ramos-iphone.png" className='absolute left-[43%] z-10 top-[15%]'
                            alt="iphone with insights and demoes of ramos"/>
                <motion.img initial={{opacity: 0, translateY: 40}}
                            whileInView={{opacity: 1, translateY: 0}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} src="/images/png/ramos-tablet.png"
                            className='absolute right-[-50px] top-0'
                            alt="iphone with insights and demoes of ramos"/>
                <motion.div initial={{opacity: 0, rotateX: 100, translateX: -100}}
                            whileInView={{opacity: 1, rotateX: 0, translateX: 0}}
                            transition={{
                                duration: 0.8,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} className='relative top-[-50px] text-primary font-semibold text-extra'>
                    Ramos
                </motion.div>


            </div>
            {/*<div className='h-full flex flex-col flex-reverse absolute w-fulls'>*/}
            <div
                className=" rotate-180 opacity-50 z-[5]	 absolute bottom-0 left-0 right-0 top-0 flex flex-reverse bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:38px_58px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]">

            </div>
            {/*</div>*/}

        </motion.div>

    );
}

export default Demo;
