import React from 'react';

function Navigation() {
    return (
        <div className='bg-black py-3 px-8 m-4 rounded-2xl'>
            <nav className='max-w-8xl mx-auto m-auto flex items-center justify-between'>
                <div className='flex items-center w-[100px]'>
                    <img src="/images/png/logo.png" alt="logo"/>
                </div>
                <ul className='menu flex items-center px-8 space-x-2 py-3 rounded-xl bg-menu'>
                    <li className='rounded-xl  cursor-pointer px-6 bg-black  py-3 text-base ease-in-out transition-all text-white '>Dashboard</li>
                    <li className='rounded-xl  cursor-pointer px-6 hover:bg-gray-900  py-3 text-base ease-in-out transition-all text-white '>Reports</li>
                    <li className='rounded-xl  cursor-pointer px-6 hover:bg-gray-900  py-3 text-base ease-in-out transition-all text-white '>Documents</li>
                    <li className='rounded-xl  cursor-pointer px-6 hover:bg-gray-900  py-3 text-base ease-in-out transition-all text-white '>History</li>
                    <li className='rounded-xl  cursor-pointer px-6 hover:bg-gray-900  py-3 text-base ease-in-out transition-all text-white '>Settings</li>
                </ul>
                <div>
                    <button
                        className='bg-white rounded-xl text-black font-normal text-base px-8 py-3 hover:bg-opacity-90 '>Sign
                        up
                    </button>
                </div>
            </nav>
        </div>

    );
}

export default Navigation;
