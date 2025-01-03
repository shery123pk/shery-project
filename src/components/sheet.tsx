"use client"

import { Button } from "@/components/ui/button"

import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button >
            <IoMdMenu/>
            </Button>
          </SheetTrigger >
          <SheetContent side={side}>
          <ul className=''>
            <li className='grid grid-cols-1 gap-y-4'>

            <Link href="#" className="text-sm">On Sale</Link>
            <Link href="#" className="text-sm">New Arrivals</Link>
            <Link href="#" className="text-sm">Brands</Link>
            
            </li>
          </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
