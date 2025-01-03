
import Fonts from "@/components/font";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import UpperHeader from "@/components/upperHeader";
import Products from "./product/page";
import Top_sell from "./product/sell";
import Dress from "@/components/dress";
import CustomerCarousel, { CarouselSpacing } from "@/components/carousel";
import Offers from "@/components/offers";


export default function Home() {
  return (
    <>
   <UpperHeader/>
   <Hero/>
   <Fonts/>
   <Products/>
   <Top_sell/>
   <Dress/>
   {/* <CarouselSpacing/> */}
   <CustomerCarousel/>
   <Offers/>
   <Footer/>
   
    
    </>
  );
}
