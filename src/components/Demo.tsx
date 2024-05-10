import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faRocket} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

function Demo() {
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
        <div className='relative py-[10rem] overflow-auto'>
            <div className='p-12 space-y-5  '>
                <motion.h2 initial='initial' whileInView='inView'
                           transition={{...transition, delay: .5}}
                           variants={textVariants}
                           className='text-big font-medium leading-[3rem]'> Maximize <span
                    className='text-gray-300'>efficiency </span>
                </motion.h2>
                <motion.h2
                    initial='initial' whileInView='inView'
                    transition={{...transition, delay: .5}}
                    variants={textVariants}
                    className='text-big font-medium w-[80%]'>
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
                            <marquee scrollAmount="20"
                                     className='text-9xl p-8 w-[500px] rounded-[5rem] bg-secondary'>Analytic Services
                            </marquee>
                        </div>


                    </div>

                    <div className='flex justify-between items-center py-12'>
                        <p className='w-[50%] text-base'>{`Explore traffic sources, page behaviour,conversions and more to gain deep
                            insight into your
                            audience.
                            With us your business doesn't just adapt - it evolves`} </p>
                        <div className='flex gap-4'>
                            <button className='text-base bg-gray-300 rounded-xl px-6 py-3 '>Request a demo</button>
                            <button className='text-base text-white bg-primary px-6 py-3 rounded-xl'>Start for free
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='px-[30px] py-[80px] bg-[#F9F9F9]  relative rounded-[80px]	'>
                <div className='grid grid-cols-5'>
                    <div className='col-span-2 relative z-30'>
                        <motion.h2 initial='initial' whileInView='inView'
                                   transition={{...transition, delay: .5}}
                                   variants={textVariants} className='mb-9 text-6xl font-medium '>Turning data
                            into
                            real
                            actions and ideas.
                        </motion.h2>
                        <motion.div
                            initial='initial' whileInView='inView'
                            transition={{...transition, delay: 1.5}}
                            variants={textVariants}
                            className='space-y-8'>
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
                <motion.img
                    initial='initial' whileInView='inView'
                    transition={{...transition, delay: 1}}
                    variants={textVariants}
                    src="/images/png/ramos-iphone.png" className='absolute left-[43%] z-10 top-[15%]'
                    alt="iphone with insights and demoes of ramos"/>
                <motion.img
                    initial='initial' whileInView='inView'
                    transition={{...transition, delay: .5}}
                    variants={textVariants}
                    src="/images/png/ramos-tablet.png"
                    className='absolute left-[50%] top-10'
                    alt="iphone with insights and demoes of ramos"/>
                <motion.div
                    initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
                    whileInView={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}
                    // viewport={{once: true}}
                    transition={{duration: 3}}
                    className='relative top-[-50px] z-5 text-primary font-semibold text-extra'>
                    Ramos
                </motion.div>
                <div
                    className=" rotate-180 opacity-50  absolute bottom-0 left-0 right-0 top-0 flex flex-reverse bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:38px_58px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]">

                </div>
            </div>

        </div>

    );
}

export default Demo;
