import React from 'react';
import logo from "../../public/Logo.webp";
import Image from "next/image";

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <Image src={logo}  alt="logo" className='w-40'/>
        <ul className='flex gap-x-3'>
            <li className='text-lg'>Female</li>
            <li className='text-lg'>Male</li>
            <li className='text-lg'>Kids</li>
            <li className='text-lg'>All Products</li>
        </ul> 
        <div className='h-10 w-10 rounded-full bg-gray-200'>

        </div>

    

    </div>
  )
}

export default Header