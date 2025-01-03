
import Link from 'next/link';
import React from 'react'
import { VscClose } from "react-icons/vsc";
import { Input } from './ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';

import { SheetSide } from './sheet';

function UpperHeader() {
  return (

    <div className=" bg-white relative">
    {/* Top Banner */}
    <div className="w-full bg-black py-2 flex items-center justify-center">
      <p className="text-center text-white text:xs sm:text-sm">
        Sign up and get 20% off to your first order.{" "}
        <Link href={'/'}><span className="underline cursor-pointer ml-3">Sign Up Now</span></Link>
      </p>
      <VscClose className='text-white text-bold text-[24px] absolute right-10 hidden sm:block'/>
    </div>
    <header className="container width-full px-4 py-4 flex items-center justify-center gap-10">
    <SheetSide/>
        <h1 className="text-x-l sm:text-3xl font-bold pl-2">SHOP.CO</h1>
        <nav className="hidden md:flex items-center space-x-5">
          <select name="shop">
            <option value="shop">
              <Link href={'#'} >Shop</Link>
            </option>
          </select>
          <ul className='hidden md:block'>
            <li className='space-x-10'>
            <Link href="#" className="text-sm">On Sale</Link>
            <Link href="#" className="text-sm">New Arrivals</Link>
            <Link href="#" className="text-sm">Brands</Link>
            </li>
          </ul>
         
        </nav>
        <div className="flex items-center space-x-8">
          
          <div className="relative hidden md:flex items-center justify-center">
            <Input 
              type="search" 
              placeholder="Search for products..." 
              className="pl-10 w-[600px] bg-gray-100 border-none rounded-full"
            />
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          </div>
          <Link href="/cart"><ShoppingCart className="h-6 w-6" /></Link>
          <User className="h-6 w-6" />
        </div>
      </header>

    </div>
    
  )
}

export default UpperHeader