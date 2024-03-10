import React from 'react';

function Metrics() {
    return (
        <div className='space-y-4 text-7xl p-8 mt-6'>
            <h1 className='leading-[85px] tracking-[-2px]'>
                <p className='w-[80%]'>We give you full </p>
                <p><span className='text-gray-300'>control</span> over your data </p></h1>
            <div className='grid grid-cols-2 gap-4'>
                <div
                    className='overflow-auto w-[95%] bg-bottom-[0px] bg-gray-100 relative bg-center bg-no-repeat space-y-5  rounded-2xl px-12 py-9 shadow-lg '>
                    <div
                        className="absolute bottom-0 opacity-50 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:38px_58px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]">

                    </div>
                    <img src="/images/png/revenue.png" className='relative z-10 w-[70%] m-auto' alt="revenue"/>
                    <p className='text-lg font-semibold w-[80%] m-auto text-center '>Improved customer service</p>
                    <p className=' w-[70%] m-auto text-center text-sm text-gray-700'> Analytics helps optimize service
                        processes by
                        providing
                        information on how
                        to improve interactions with customers and increase their satisfaction.</p>
                </div>
                <div
                    className=' relative overflow-auto bg-center bg-no-repeat space-y-5  rounded-2xl px-12 py-9  shadow-lg '>
                    <div
                        className="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:38px_58px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]">

                    </div>
                    <img src="/images/png/insights.png" className='relative z-10  w-[70%] m-auto' alt="insights"/>

                    <p className='text-lg w-[80%] font-semibold m-auto text-center'>Monitoring key indicators</p>
                    <p className=' w-[60%] m-auto text-center text-sm text-gray-700'> Analytics platforms allow
                        businesses to track
                        KPIs.an
                        important tool for
                        measuring success and achieving goals</p>
                </div>

            </div>
        </div>
    );
}

export default Metrics;
