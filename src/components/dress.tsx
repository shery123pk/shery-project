import React from 'react'
import Image from 'next/image'

function Dress() {
  return (
    <div className='w-full h-[500px] bg-[#F0F0F0] flex flex-col justify-start items-center'>
        {/* top div*/}
        <div>
            <h1 className='text-2xl font-bold mt-5'>BROWSE BY DRESS STYLE</h1>
        </div>
        {/* bottom div*/}
        <div className='w-[90%] h-[600px] flex flex-wrap justify-center items-center'>
            <div className='w-[400px] h-[200px] m-1'>
                <Image src={"/browseBystyle/casual.png"}  className='w-full h-full rounded-[20px]' alt='dress' width={100} height={100}></Image>

            </div>

            <div className='w-[600px] h-[200px] m-1'>
                <Image src={"/browseBystyle/2.png"}  className='w-full h-full rounded-[20px]' alt='dress' width={100} height={100}></Image>

            </div>

            <div className='w-[600px] h-[200px] m-1'>
                <Image src={"/browseBystyle/3.png"}  className='w-full h-full rounded-[20px]' alt='dress' width={100} height={100}></Image>

            </div>

            <div className='w-[400px] h-[200px] m-1'>
                <Image src={"/browseBystyle/1.png"}  className='w-full h-full rounded-[20px]' alt='dress' width={100} height={100}></Image>

            </div>

        </div>
        </div>
            
  )
}

export default Dress