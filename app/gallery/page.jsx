"use client"
import { Carousel } from 'antd'
import Image from 'next/image'
import React, {useState} from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function Gallery() {
    const [picType,setPicType] = useState("all")

    const images = [
        {photo:"/company photos/carriage-trucks.jpg",category:"activities"},
        {photo:"/company photos/coffee-godown.jpg",category:"farms"},
        {photo:"/company photos/coffee-godown2.jpg",category:"activities"},
        {photo:"/company photos/coffee-measured2.jpg",category:"transport"},
        {photo:"/company photos/coffee-trailer-full.jpg",category:"farms"},
        {photo:"/company photos/coffee-trailer.jpg",category:"activities"},
        {photo:"/company photos/coffee2.jpg",category:"transport"},
        {photo:"/company photos/coffee_crop.jpg",category:"transport"},
        {photo:"/company photos/coffee_measurement.jpg",category:"farms"},
        {photo:"/company photos/coffee_storage.jpg",category:"activities"},
        {photo:"/company photos/transport.jpg",category:"farms"},
        {photo:"/company photos/0409cf76-5404-4148-991f-07c5dc1f08a8.JPG",category:"activities"},
        {photo:"/company photos/06a14268-605a-4b29-8d84-e89de18bdaf6.JPG",category:"farms"},
        {photo:"/company photos/1a75f90c-e0c9-4d25-af19-e0ecada2a566.JPG",category:"transport"},
        {photo:"/company photos/30983dc0-c4a4-4ed9-89d2-c316e0eb860d.JPG",category:"activities"},
        {photo:"/company photos/343193cf-ef9f-4349-83ee-43697c93c1fd.JPG",category:"farms"},
        {photo:"/company photos/35bf5322-7da1-4558-b5f0-831782f31492.JPG",category:"transport"},
        {photo:"/company photos/44a4651d-31c9-4bc9-821f-1214388be9a8.JPG",category:"activities"},
        {photo:"/company photos/4d59a6de-be98-4a18-8c99-75d0aeb2a6c7.JPG",category:"farms"},
        {photo:"/company photos/565d0851-c3c1-4450-8e5f-7df4b9c46904.JPG",category:"transport"},
        {photo:"/company photos/5a8b63ae-a87e-4d43-86db-397c5d30a4ee.JPG",category:"activities"},
        {photo:"/company photos/6075ebfb-2a05-48ce-9ffe-37f1d8aaeeac.JPG",category:"farms"},
        {photo:"/company photos/88a7f692-b59e-4aa4-a84d-3f5ea264dcb1.JPG",category:"transport"},
        {photo:"/company photos/8c8176a3-de09-40d6-bdba-79e2debf2405.JPG",category:"activities"},
        {photo:"/company photos/9a1bd801-c77b-4085-92a9-cbc7ec678b9b.JPG",category:"farms"},
        {photo:"/company photos/ae357d61-5911-44d9-a2a9-ac0f76be3510.JPG",category:"transport"},
        {photo:"/company photos/af4d8904-2c3c-4b92-578acc0aaa4e.JPG",category:"activities"},
        {photo:"/company photos/bc1d53c3-5d92-4ab6-843a-291fc41ba6dd.JPG",category:"farms"},
        {photo:"/company photos/c6aa01c5-e94c-4af3-811e-3c603444cb51.JPG",category:"transport"},
        {photo:"/company photos/dcc9bf40-4333-49e6-8819-2e86468fed76.JPG",category:"activities"},
        {photo:"/company photos/f82b1b91-2e18-4549-85e5-8a519b798b76.JPG",category:"farms"},
        {photo:"/company photos/ff3683ff-025c-4a70-b81a-83054c7c5a3f.JPG",category:"transport"},
    ];

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