import React from 'react';
import logo from "../../public/Logo.webp";
import Image from "next/image";
import Link from 'next/link';
import {ShoppingCart} from "lucide-react";

const Header = () => {
  return (
    <div className='flex justify-between items-center py-6 px-8'>
        <Image src={logo}  alt="logo" className='w-40'/>
        <ul className='flex gap-x-3'>
            <li className='text-lg'><Link href={"/"}>Female</Link></li>
            <li className='text-lg'><Link href={"/"}>Male</Link></li>
            <li className='text-lg'><Link href={"/"}>Kid</Link></li>
            <li className='text-lg'><Link href={"/"}>All Products</Link></li>
        </ul> 
        <div className='h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
            <ShoppingCart />
        </div>

    

    </div>
  )
}

export default Header