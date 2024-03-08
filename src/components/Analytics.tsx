import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faPlay, faRocket} from "@fortawesome/free-solid-svg-icons";

function Analytics() {
    return (
        <div className='min-h-[350px] p-8'>
            <h1 className='relative flex text-7xl justify-center'>
                <div className='circles relative flex justify-center'>
                    <div className='rounded-full w-20 h-20 flex items-center justify-center  bg-gray-100 text-orange'>
                        <FontAwesomeIcon width={15} className='w-6 h-6' icon={faRocket}/>
                    </div>
                    <div
                        className='rounded-full w-20 h-20 flex items-center justify-center relative left-[-10px] z-5  bg-primary text-white'>
                        <FontAwesomeIcon icon={faPlay} className='w-6 h-6'/>
                    </div>
                </div>
                <p className=' '>Analytics</p>
                <div
                    className='absolute right-[-2%] top-[10%] video bg-gray-300 rounded-lg relative w-[200px] h-[150px]'>
                    <button type='button'
                            className='w-10 h-10  shadow-sm flex items-center justify-center bg-primary absolute left-[-8%]  top-[-7%] rounded-full text-white'>
                        <FontAwesomeIcon className='w-4 h-4'
                                         icon={faPlay}/></button>
                </div>
                <p className='absolute text-7xl top-[57%] left-[20%]'>that <span
                    className='text-gray-300'>helps</span> you</p>
                <p className='absolute flex bottom-[-100px] left-[26%] text-7xl'> shape <div
                    className='bg-secondary flex justify-center items-center h-16 w-16 mx-2 rounded-full text-black'>
                    <FontAwesomeIcon className='w-6 h-6' icon={faAngleDoubleDown}/>
                </div> the future
                </p>
            </h1>

        </div>
    );
}

export default Analytics;