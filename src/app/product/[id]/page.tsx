
"use client"

import React from 'react'
import { IoIosStar } from "react-icons/io";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Check, Minus, Plus } from 'lucide-react';

interface productlist{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string,
    img_url:string,
    img1:string,
    img2:string,
    img3:string
}

let products:productlist[] = [
    {
        title:"T-SHIRT WITH TAPE DETAILS",
        price:"$120",
        id:1,
        img_url:"/images/t-shirt.png",
        img1:"/product-images/image 1.png",
        img2:"/product-images/image 2.png",
        img3:"/product-images/image 3.png"
       
    },
    {
        title:"SKINNY FIT JEANS",
        price:"$260",
        old_price:"$300",
        id:2,
        img_url:"/images/image 8.png",
        img1:"/product-images/image 1.png",
        img2:"/product-images/image 2.png",
        img3:"/product-images/image 3.png"
    },
    {
        title:"CHECKERED SHIRT",
        price:"$120",
        id:3,
        img_url:"/images/Frame 34.png",
        img1:"/product-images/image 1.png",
        img2:"/product-images/image 2.png",
        img3:"/product-images/image 3.png"
       
    },
    {
        title:"SLEEVE STRIPED T-SHIRT",
        price:"$260",
        old_price:"$300",
        id:4,
        img_url:"/images/Frame 38.png",
        img1:"/product-images/image 1.png",
        img2:"/product-images/image 2.png",
        img3:"/product-images/image 3.png"
    },
]

let star=[<IoIosStar/>,<IoIosStar/>,<IoIosStar/>,<IoIosStar/>,<IoIosStar/>]
function Product_detail() {

    const params= useParams();
    const id = params.id // dynamic id
    const item = products.find((item) => item.id === Number(id))
    if(!item){
        return <h1>Product Not Found</h1>
    }

  return (
    <div className='flex flex-col md:flex-row justify-center sm:justify-evenly mt-10 p-5 sm:p-0'>
            {/* left-side */}

            <div className=' flex sm:flex-col justify-between items-center w-full sm:w-[152px]  order-2 sm:order-1'>
                {/* images 8*/}
                <Image src={item.img1} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] " alt={item.title} width={200} height={200}></Image>
                <Image src={item.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-2" alt={item.title} width={200} height={200}></Image>
                <Image src={item.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-2" alt={item.title} width={200} height={200}></Image>

            </div>

            {/* middle-side */}

            <div className='w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2'>
            <Image src={item.img1} className="w-full h-[95%] " alt={item.title} width={200} height={200}></Image>
            </div>

            {/* right-side */}
            <div className='w-[600px]  h-[500px] order-3'>
                <h1 className='text-2xl md:text-3xl font-bold'>ONE LIFE GRAPHIC T-SHIRT</h1>
            
            <div className='flex text-yellow-300 mt-2'>
            {star}
            </div>
            <p className='font-bold mt-3'>{item.price} <span className='text-gray-400 font-thin'>{item.old_price}</span></p>
            <p className='mt-5'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

            {/* selet-color */}
            <p className='mt-5 text-gray-500'>Select Colors</p>
            <div className='flex space-x-3 mt-5'>
                <div className='w-[50px] h-[50px] bg-[#4f4631] rounded-full  flex justify-center items-center'><Check className='text-white opacity-0 hover:opacity-100 cursor-pointer'/> </div>
                <div className='w-[50px] h-[50px] bg-[#314f4a] rounded-full flex justify-center items-center'><Check className='text-white opacity-0 hover:opacity-100 cursor-pointer'/></div>
                <div className='w-[50px] h-[50px] bg-[#31344f] rounded-full flex justify-center items-center'><Check className='text-white opacity-0 hover:opacity-100 cursor-pointer'/></div>
            </div>

             {/* select-size */}
             <p className='mt-5 text-gray-500'>Choose Size</p>
             <div className='mt-3 space-x-3'>

             <button className='w-[70px] h-[50px] bg-gray-200 rounded-3xl text-gray-500'>Small</button> 
             <button className='w-[100px] h-[50px] bg-gray-200 rounded-3xl  text-gray-500' >Medium</button> 
             <button className='w-[70px] h-[50px] bg-black text-white rounded-3xl '>Large</button> 
             <button className='w-[100px] h-[50px] bg-gray-200 rounded-3xl  text-gray-500'>X-Large</button>
             </div>
             

             <div className='flex mt-10 space-x-5'>
             <button className='w-[200px] h-[50px] bg-gray-200 rounded-3xl flex justify-evenly items-center '> <Minus/>1<Plus/></button> 
             <button className='w-[350px] h-[50px] bg-black text-white ml-200 rounded-3xl'>Add to Cart</button>
            
             </div>
             </div>
            
    </div>
  )
}

export default Product_detail