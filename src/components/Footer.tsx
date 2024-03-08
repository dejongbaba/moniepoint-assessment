import React from 'react';

function Footer() {
    return (
        <div className='bg-black p-8 relative bottom'>
            <div className=" divide-y ">
                <div className='flex py-6 justify-between items-start'>
                    <ul className='flex space-x-2'>
                        <li><a href="#" className=' hover:text-white text-gray-300 transition '>About</a></li>
                        <li><a href="#" className=' hover:text-white text-gray-300 transition '>Why us</a></li>
                        <li><a href="#" className=' hover:text-white text-gray-300 transition '>Platform</a></li>
                        <li><a href="#" className=' hover:text-white text-gray-300 transition '>Pricing</a></li>
                        <li><a href="#" className=' hover:text-white text-gray-300 transition '>Contact</a></li>
                    </ul>
                    <h3 className='text-5xl text-white'>hello@ramos.com</h3>
                </div>
                <div className='grid grid-cols-4 py-6 '>
                    <div className='col-span-1'>
                        <h3 className='text-white'>Warrensville Heights</h3>
                        <p className='text-xs text-gray-300'>14418 Vineyard Drive, NC</p>
                        <p className='text-xs text-gray-300'>44128</p>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='text-white'>Saint Louis </h3>
                        <p className='text-xs text-gray-300'>1366 Penn Street</p>
                        <p className='text-xs text-gray-300'>63101</p>
                    </div>
                    <ul className='col-span-1 space-y-3 text-right'>
                        <li className='text-white font-normal text-xl'>Linkedin</li>
                        <li className='text-white font-normal text-xl'>Instagram</li>
                        <li className='text-white font-normal text-xl'>Facebook</li>
                    </ul>
                </div>
            </div>
            <ul className='flex items-center space-x-4 justify-between'>
                <li>
                    <img className='w-[400px]' src="/images/png/ramos-registered.png" alt="ramos registered logo"/>
                </li>
                <li className='text-gray-300'>
                    Privacy
                </li>
                <li className='text-gray-300'>
                    License agreement
                </li>
                <li>
                    <img className='w-[100px]' src="/images/png/barcode.png" alt="barcode"/>
                </li>
            </ul>


        </div>
    );
}

export default Footer;
