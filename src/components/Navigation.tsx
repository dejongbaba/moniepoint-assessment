import React from 'react';

function Navigation() {
    return (
        <div className='bg-black py-3 px-8 m-4 rounded-2xl'>
            <nav className='max-w-8xl mx-auto m-auto flex items-center justify-between'>
                <div className='flex items-center w-[100px]'>
                    <img src="/images/png/logo.png" alt="logo"/>
                </div>
                <ul className='menu flex items-center px-6 py-3 rounded-xl bg-gray-900'>
                    <li className='backdrop-blur-lg rounded-xl  cursor-pointer px-6 hover:bg-gray-600  py-3 text-xs ease-in-out transition-all text-white '>Dashboard</li>
                    <li className='backdrop-blur-lg rounded-xl  cursor-pointer px-6 hover:bg-gray-600  py-3 text-xs ease-in-out transition-all text-white '>Reports</li>
                    <li className='backdrop-blur-lg rounded-xl  cursor-pointer px-6 hover:bg-gray-600  py-3 text-xs ease-in-out transition-all text-white '>Documents</li>
                    <li className='backdrop-blur-lg rounded-xl  cursor-pointer px-6 hover:bg-gray-600  py-3 text-xs ease-in-out transition-all text-white '>History</li>
                    <li className='backdrop-blur-lg rounded-xl  cursor-pointer px-6 hover:bg-gray-600  py-3 text-xs ease-in-out transition-all text-white '>Settings</li>
                </ul>
                <div>
                    <button className='bg-white rounded-xl text-black font-normal text-sm px-8 py-3 '>Sign up</button>
                </div>
            </nav>
        </div>

    );
}

export default Navigation;
