import React from 'react'
import { IoIosStar } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';

interface productlist{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string,
    img_url:string
}

let products:productlist[] = [
    {
        title:"T-SHIRT WITH TAPE DETAILS",
        price:"$120",
        id:1,
        img_url:"/images/t-shirt.png",
       
    },
    {
        title:"SKINNY FIT JEANS",
        price:"$120",
        old_price:"$260",
        id:2,
        img_url:"/images/image 8.png",
       
    },
    {
        title:"CHECKERED SHIRT",
        price:"$120",
        id:3,
        img_url:"/images/Frame 34.png",
       
    },
    {
        title:"SLEEVE STRIPED T-SHIRT",
        price:"$120",
        old_price:"$160",
        id:4,
        img_url:"/images/Frame 38.png",
       
    },
]
let star=[<IoIosStar/>,<IoIosStar/>,<IoIosStar/>,<IoIosStar/>,<IoIosStar/>]
function Top_sell() {
  return (
    <div className='width-full h-[500px ] items-center justify-center  '>
        <h1 className='text-3xl  md:text-4xl font-bold text-center py-10'>TOP SELLING</h1>

        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between px-10 mt-2'>
            {
                products.map((data)=>{
                    return(
                        <div key={data.id}>
                           <Link href={`/product/${data.id}`}>
                           <div className='width-[295px] h-[298px]'>
                            <Image src={data.img_url} alt={data.title} width={295} height={298} 
                            className='rounded-[20px] width-full h-full'></Image>
                            </div>
                           </Link>
                               
                               
                               <div >
                               <p className='text-lg mt-2 font-bold'>{data.title}</p>
                                <p className='flex text-yellow-500'>{star}</p>
                                <p className='font-bold mt-1'>{data.price}<span className='line-through text-gray-400 pl-2 '>{data.old_price}</span></p>
                               
                               </div>
                               

                        </div>
                    )
                    
                })
            }
        </div>


        <button className='bg-white py-2 px-8 rounded-[16px] mt-4 text-sm text-black'>View All</button>
    </div>
  )
}

export default Top_sell