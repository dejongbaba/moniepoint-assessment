import React from 'react';

function Metrics() {
    return (
        <div className='text-7xl p-8 mt-6'>
            <h1 className=' tracking-[-2px] space-y-1'>
                <p className='w-[80%] text-[8rem]'>We give you full </p>
                <p className='text-[8rem]'><span className='text-gray-300 '>control</span> over your data </p>
            </h1>
            <div className='grid grid-cols-2 gap-4 mt-[100px]'>
                <img src="/images/png/improved-customer.png" className=''
                     alt="revenue"/>
                <img src="/images/png/monitoring-key-indicator.png" className=''
                     alt="monitoring"/>
            </div>
        </div>
    );
}

export default Metrics;
