import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function Ramos() {
    return (
        <div>
            <div className='p-8 space-y-5 divide-y '>
                <h2 className='text-7xl'> Maximize <span className='bg-gray-300'>efficiency</span>
                    with our intuitive
                </h2>
                <div className='flex justify-between items-center'>
                    <p>Explore traffic sources, page behaviour,conversions and more to gain deep insight into your
                        audience.
                        With us your business doesn't just adapt - it evolves </p>
                    <div className='flex'>
                        <button className='text-xs bg-gray-300 rounded-xl px-5 py-2 mr-2'>Request a demo</button>
                        <button className='text-xs text-white bg-primary px-5 py-2 rounded-xl'>Request a demo</button>
                    </div>
                </div>
            </div>

            <div>
                <div className='relative'>
                    <h2 className='mb-6 text-4xl '>turning data into real actions and ideas.</h2>

                    <div className='space-y-4'>
                        <div className='shadow-lg flex justify-between rounded-xl'>
                            <p>Instant insights</p>
                            <div className='rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                            </div>
                        </div>
                        <div className='shadow-lg flex justify-between rounded-xl'>
                            <p>Ai technology </p>
                            <div className='rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                            </div>
                        </div>
                        <div className='shadow-lg flex justify-between rounded-xl'>
                            <p>Easy Integration </p>
                            <div className='rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Ramos;
