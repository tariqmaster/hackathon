"use client"


import Image from "next/image";
import Link from 'next/link'
import SearchBar from "./search-bar";
import { CgShoppingCart } from "react-icons/cg"
import React, { useState } from 'react'
// import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  // const {showCart, setShowCart, totalQty} = useStateContext();
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex">
      <div className=" bg-slate-500">
        <ul className="header">


          <Link href='/female'><li>Female</li></Link>
          <Link href='/male'><li>Male</li></Link>
          <Link href='/kids'><li>Kids</li></Link>
          <Link href='/products'><li>All Products</li></Link>
          {/* <li><SearchBar /></li> */}
        </ul>




      </div>
    </nav>
  )
}

export default Navbar;