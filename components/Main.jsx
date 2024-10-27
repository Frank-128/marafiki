"use client"
import { Drawer } from "antd";
import {  useAppContext } from "./context/AppContext";
import Navbar from "./Navbar";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaX } from "react-icons/fa6";
import { navlinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
function Main({ children }) {
    const {openSidebar,setOpenSidebar} = useAppContext()
    const pathname = usePathname()
    return (
        
        <main>
            <Navbar />
            <section className="bg-slate-200  pt-24 min-h-screen">
            {children}
            </section>
            <footer  className="h-[50vh] w-screen bg-footer bg-cover flex justify-center items-center  text-white text-center font-black">
                    Marafiki Coffee Marketing &copy; 2024
            </footer>
            <Drawer
        title={<div className="flex  items-center gap-2">
            <Image width={100} height={100} className="w-12 h-12 object-contain" src="/coffee-beans.png" alt="logo" />
            <span className="font-bold">Rafiki Coffee Marketing</span>
        </div>}
        placement={"left"}
        closable={false}
        onClose={()=>setOpenSidebar(false)}
        open={openSidebar}
        key={"left"}
        className="!sm:hidden !relative !px-0"
      >
            
    
    
    <ul className="gap-y-5 flex-col flex ">

    {
        navlinks.map((item,i)=>(

            <li key={i}>
                   <Link onClick={()=>setOpenSidebar(false)} className={`${pathname == item.link && "text-redColor underline underline-redColor"}`} href={item.link}>
                   {item.name}
                   </Link>
        </li>
        ))
    }

</ul>

    <FaX  onClick={()=>setOpenSidebar(false)} className="absolute left-1/2 bottom-0 my-4 bg-redColor text-white font-black h-6 w-6 rounded-full p-2" />

        </Drawer>
        </main>
        
    );
}

export default Main;
