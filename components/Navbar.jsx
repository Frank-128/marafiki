"use client"
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { useAppContext } from './context/AppContext';
const { navlinks } = require("@/constants/links")


function Navbar() {

    const pathname = usePathname()
    const {setOpenSidebar} = useAppContext()

  return (

<nav className="w-screen !z-[99] absolute bg-transparent h-24   items-center  justify-between flex  px-2 py-6">
    <div className="flex  items-center gap-2 text-white">
        <Image width={100} height={100} className="w-12 h-12 object-contain" src={"/logo.png"} alt="logo" />
       <div className={'flex flex-col items-center'}>
        <span className="font-bold text-xl leading-none">Marafiki</span>
        <span className="font-light text-sm text-[#d9d9d9] "> Coffee Marketing</span>
       </div>
    </div>
    
    <HiMenuAlt3 fontSize={30} className='block text-redColor  sm:hidden text-3xl' onClick={()=>setOpenSidebar(true)} />
    <ul className="gap-x-10 sm:flex hidden">

    {
        navlinks.map((item,i)=>(

            <li key={i} className='text-lg text-white'>
                   <Link className={`${pathname == item.link && "text-yellowColor underline underline-offset-8 font-bold decoration-white"}`} href={item.link}>
                   {item.name}
                   </Link>
        </li>
        ))
    }

</ul>
<div/>
    

</nav>
  )
}

export default Navbar