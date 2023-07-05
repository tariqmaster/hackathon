import Image from "next/image";
import "./layout";
import { Button } from "../../components/ui/button";
import ProductCard from "./ProductCard";
import { client } from "@/lib/sanityClient";
import {Image as IImage} from 'sanity';
import { urlForImage } from '../../sanity/lib/image';
import { Heart } from "lucide-react";


 const getProductData = async () => {
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
  <div className="m-6">
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Tariq
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
    <Button className="mt-4"><Heart className="mr-2 h-4 w-4" /> Love you sir</Button>
  </div>
    <div className='p-10 grid grid-cols-[auto,auto,auto] justify-center gap-x-5'>
      {data.map((item) => (
        <div>
        <ProductCard item={item} />
        </div>
      ))}
    </div>
    </>
  )}  