
import Fonts from "@/components/fonts";

import Products from "./products/page";
import Top_sell from "./products/sell";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/couresel";
import Hero from "@/components/hero";





export default function Home() {
  return (
    <div >
       
       <Hero/>
       <Fonts/>
       <Products/>
       <Top_sell/>
       <Dress/>
       <CustomerCarousel/>
      
    </div>  
  );
}
 