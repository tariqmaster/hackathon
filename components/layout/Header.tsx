import React from 'react';
import logo from "../../public/Logo.webp";
import Image from "next/image";
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
// import Input from 

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <Image src={logo}  alt="logo" className='w-40'/>
        <ul className='flex gap-x-3'>
            <li className='text-lg'><Link href="/">Female</Link></li>
            <li className='text-lg'><Link href="/">Male</Link></li>
            <li className='text-lg'><Link href="/">Kids</Link></li>
            <li className='text-lg'><Link href="/">All Products</Link></li>
        </ul> 
<div>
  
</div>

        <div className='h-10 w-10 rounded-full bg-gray-200'>
          {/* <Input></Input> */}
        </div>

    

    </div>
  )
}

export default Header