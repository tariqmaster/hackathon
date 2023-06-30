import Image from "next/image";
import Navbar from "../../components/navbar";
import "./layout";
import { Button } from "../../components/ui/button";
import ProductCard from "./ProductCard";
import { client } from "@/lib/sanityClient";
import {Image as IImage} from 'sanity';
import { urlForImage } from '../../sanity/lib/image';


export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    description,
    title,
    image,
    category,
  }`);
  return res
}



interface IProduct {
  title: string,
  _id: string,
  description: string,
  price: number,
  image: IImage,
  category: {
    name: string,
  }
}

export default async function Home() {

  const data: IProduct[] = await getProductData()



  return (
    <>
    <Navbar/>
  
    <div className='p-10 grid grid-cols-[auto,auto,auto] justify-center gap-x-5'>
      {data.map((item) => (
        <div>
        <ProductCard item={item} />
        </div>
      ))}
    </div>
    </>
  )}  