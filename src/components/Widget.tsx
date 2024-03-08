import React from 'react';

function Widget() {
    return (
        <div className='py-32 px-12 rounded-3xl bg-gray-200 space-y-12'>
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
            <div className='flex'>
                <div className='relative mr-3 flex p-5 bg-white rounded-lg border shadow-b-lg'>
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
                <div className='bg-black rounded-lg border shadow-b-lg'>
                    <p className='text-white text-center'>Wigdget control</p>
                    <p className='text-gray text-xs text-center'>Reports provide a comprehensive overview of important
                        aspects of
                        web analytics</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Widget;
