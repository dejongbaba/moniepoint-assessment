import React from 'react';

function Navigation() {
    return (
        <div className='bg-black p-3 m-4 rounded-lg'>
            <nav className='max-w-8xl mx-auto m-auto flex items-center justify-between'>
                <div className='flex items-center w-[100px]'>
                    <img src="/images/png/logo.png" alt="logo"/>
                </div>
                <ul className='menu flex items-center'>
                    <li className='backdrop-blur-lg bg-gray-800  cursor-pointer p-3  text-xs transition text-white rounded-l-lg'>Dashboard</li>
                    <li className='backdrop-blur-lg bg-gray-800  cursor-pointer p-3  text-xs transition text-white '>Reports</li>
                    <li className='backdrop-blur-lg bg-gray-800  cursor-pointer p-3  text-xs transition text-white '>Documents</li>
                    <li className='backdrop-blur-lg bg-gray-800  cursor-pointer p-3  text-xs transition text-white '>History</li>
                    <li className='backdrop-blur-lg bg-gray-800  cursor-pointer p-3  text-xs transition text-white rounded-r-lg'>Settings</li>
                </ul>
                <div>
                    <button className='bg-white rounded-lg text-black font-normal text-sm p-3 '>Sign up</button>
                </div>
            </nav>
        </div>

    );
}

export default Navigation;
