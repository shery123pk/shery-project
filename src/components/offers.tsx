import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function Offers() {
  return (
    <main className=' w-[1240px] h-[180px] bg-black text-white rounded-2xl flex justify-around items-center m-auto'>
        <div>
            <h1 className='text-[40px] font-bold '>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
        </div>
        <div>
        <Input
    type="email"
    placeholder="Enter your email address"
    className="bg-white text-gray-400 rounded-full px-6 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
  />
  <Button
    variant="secondary"
    className="whitespace-nowrap bg-white text-black rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition-all duration-300 mt-3"
  >
    Subscribe to Newsletter
  </Button>
        </div>
   
    </main>
  )
}

export default Offers