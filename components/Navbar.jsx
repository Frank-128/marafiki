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

<nav className="w-[100vw] !z-[99] fixed h-24 border-gray-600 border-b-[0.8px] items-center bg-white justify-between flex sm:px-36 px-2 py-6">
    <div className="flex  items-center gap-2">
        <Image width={100} height={100} className="w-12 h-12 object-contain" src="/coffee-beans.png" alt="logo" />
        <span className="font-bold">Rafiki Coffee Marketing</span>
    </div>
    
    <HiMenuAlt3 fontSize={30} className='block text-redColor  sm:hidden text-3xl' onClick={()=>setOpenSidebar(true)} />
    <ul className="gap-x-5 sm:flex hidden">

    {
        navlinks.map((item,i)=>(

            <li key={i}>
                   <Link className={`${pathname == item.link && "text-redColor underline underline-redColor"}`} href={item.link}>
                   {item.name}
                   </Link>
        </li>
        ))
    }

</ul>

    

</nav>
  )
}

export default Navbar