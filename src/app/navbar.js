

"use client"

import logo from "../../public/logo.jpg";
import Image from "next/image";
import Link from 'next/link'
import SearchBar from "./search-bar";


export default function Navbar(){
    return(
        <nav className="">
            <div className=""> 
           <ul className="flex justify-between content-center">
            <Link href='/'>
       <li> <Image src={logo} width={140} height={25} alt='logo' /></li>
      </Link>
       
        <Link href='/female'><li>Female</li></Link>
        <Link href='/male'><li>Male</li></Link>
        <Link href='/kids'><li>Kids</li></Link>
        <Link href='/products'><li>All Products</li></Link>
      <li><SearchBar/></li>
      </ul>
      
      </div>
        </nav>
    )
}