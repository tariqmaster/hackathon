import React from 'react'
import {Badge} from "components/ui/badge"
import { Heart, Menu, ShoppingCart } from "lucide-react";
import Heroimage from "public/hero.jpg";
import { Button } from 'components/ui/button';
import Image from "next/image";

const hero = () => {
  return (
    <div className=' flex flex-col md:flex-row'>
    <div className='py-10  w-1/2'>
        <Badge className='rounded-lg  font-bold bg-blue-100 text-blue-700 px-3 py-2 text-lg'>Sale 70%</Badge>
        <br /> <br />
        <h1 className="scroll-m-20 text-8xl font-bold tracking-tight lg:text-6xl">
        An Industrial Take on Streetwear
        </h1> <br />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Anyone can beat you but no one can beat your outfit<br/> as long as you wear Dine outfits.
        </p> <br />
        <Button className="mt-4 px-9 py-9 text-lg"><ShoppingCart className="mr-2 h-6 w-6" />Start <br/>Shopping</Button>
   </div>
   
    <div className='rounded-full bg-red-200'>
    <Image src={Heroimage} alt="image"  />


        
    </div>

    </div>
       
  

    
  )
}

export default hero;