"use client"
import { Carousel } from 'antd'
import Image from 'next/image'
import React, {useState} from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function Gallery() {
    const [picType,setPicType] = useState("all")

    const images = [
        {photo:"/company photos/carriage-trucks.jpg",category:"transport"},
        {photo:"/company photos/coffee-godown.jpg",category: "transport"},
        {photo:"/company photos/coffee-godown2.jpg",category: "transport"},
        {photo:"/company photos/coffee-measured2.jpg",category: "activities"},
        {photo:"/company photos/coffee-trailer-full.jpg",category: "transport"},
        {photo:"/company photos/coffee-trailer.jpg",category: "transport"},
        {photo:"/company photos/coffee2.jpg",category: "farms"},
        {photo:"/company photos/coffee_crop.jpg",category: "farms"},
        {photo:"/company photos/coffee_measurement.jpg",category: "activities"},
        {photo:"/company photos/coffee_storage.jpg",category: "transport"},
        {photo:"/company photos/transport.jpg",category: "transport"},
        {photo:"/coffee-plantation.jpg",category: "farms"},


    ]
  return (
    <div className=''>
        <section className={'w-screen relative -mt-24'}>
           <div >
            <Carousel  arrows autoplay>
                {
                    images.map((item, i) => (<div key={i}>
                        <Image alt="image gallery" src={item.photo} className='w-full h-[30rem] object-cover' width={200} height={200} />
                    </div>))
                }
            </Carousel>
           </div>
            <div
                className={"w-full h-[30rem] bg-black/50 flex flex-col gap-y-8 px-10 items-center justify-center top-0 left-0 absolute "}>
                <h2 className="sm:text-3xl text-xl font-bold text-yellowColor">Explore the Marafiki Coffee Journey</h2>
                <p className="sm:text-lg text-sm text-white mt-4">
                    Welcome to our gallery, where we capture the vibrant world of Marafiki Coffee Marketing. Here, we
                    showcase the essence of Tanzania’s coffee culture, from the lush, green coffee farms to the bustling
                    marketplaces and every step in between.
                </p>

            </div>
        </section>

        <div className={'bg-deepGreenColor flex items-center flex-col space-y-5 py-6'}>
        <h1 className={'text-white font-black text-xl'}>Our Gallery</h1>
        <h1 className='font-semibold text-center py-3 text-sm text-yellowColor'>Take a look at our daily activities </h1>
        <div className={'flex gap-2 items-center'}>
            <div className={'border-2 border-white h-0 w-[30vw]'} />
            <MdCheckBoxOutlineBlank className={'text-yellowColor'} />
            <div className={'border-2 border-white h-0 w-[30vw]'} />
        </div>

         <div className={'flex items-center gap-2'}>
             <div onClick={()=>setPicType("all")} className={`rounded cursor-pointer ${picType === "all" && "bg-yellowColor" } border-[#d9d9d9] border-[1px] sm:w-[5rem] w-[3rem] text-xs p-2 font-black text-white text-center`}>All</div>
             <div onClick={()=>setPicType("farms")} className={`rounded cursor-pointer ${picType === "farms" && "bg-yellowColor" } border-[#d9d9d9] border-[1px] sm:w-[5rem] w-[4rem] text-xs p-2 font-black text-white text-center`}>Farms</div>
             <div onClick={()=>setPicType("transport")} className={`rounded cursor-pointer ${picType === "transport" && "bg-yellowColor" } border-[#d9d9d9] border-[1px]  w-[5rem] text-xs p-2 font-black text-white text-center`}>Transport</div>
             <div onClick={()=>setPicType("activities")} className={`rounded cursor-pointer ${picType === "activities" && "bg-yellowColor" } border-[#d9d9d9] border-[1px] w-[5rem]  text-xs p-2 font-black text-white text-center`}>Activities</div>
         </div>

        </div>
        <div className='bg-greenColor py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-10 pb-4 grid-cols-1 gap-x-4 gap-y-12'>
        {
                images.filter(item=>item.category === picType || picType === "all").map((item,i)=>(<div key={i} className={"border-white border-8"}>
                    <Image alt="image gallery" src={item.photo} className='lg:w-[25vw]  md:w-[30vw] sm:w-[50vw] w-[90vw] h-[25vh] object-cover' width={200} height={200} />
                </div>))
            }
        </div>
    </div>
  )
}

export default Gallery