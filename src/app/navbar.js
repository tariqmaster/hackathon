

"use client"

import logo from "../../public/logo.png";
import Image from "next/image";
import Link from 'next/link'


export default function Navbar(){
    return(
        <nav className="bg-blue-300">
            <div className="flex"> 
            <Link href='/'>
        <Image src={logo} width={140} height={25} alt='logo' />
      </Link><div>
       <ul className="font-bold flex justify-between">
        <Link className="font-bold" href='/female'><li>Female</li></Link>
        <Link href='/male'><li>Male</li></Link>
        <Link href='/kids'><li>Kids</li></Link>
        <Link href='/products'><li>All Products</li></Link>
      </ul>
      </div>
      </div>
        </nav>
    )
}