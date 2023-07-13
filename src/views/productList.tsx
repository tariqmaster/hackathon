import React from 'react';
import P1 from 'public/p1.webp';
import Image from 'next/image';

const ProductList = () => {
  return (
    <div className='py-10'>
        <Image src={P1} alt="product" />
        <h3 className='font-bold text-lg mt-3'>Flex Sweatshirt</h3>
        <h3 className='font-bold text-lg'>$104</h3>
    </div>
  )
}

export default ProductList;