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
            <section className="w-screen bg-black/60 px-4 flex items-center flex-col justify-center">
                <div className="font-black sm:font-3xl font-xl text-white">Join our mailing list and hear more from us</div>
                <div className="space-y-4 py-5">
                    <div>
                        <div className="w-full">
                            <input placeholder="Name" className="p-3 w-full" />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1  gap-3">
                    <input placeholder="Email" className="p-3 " />
                    <input placeholder="Phonenumber" className="p-3 " />
                    </div>
                    <div className="bg-redColor text-center p-2 rounded text-white">
                        Submit
                    </div>
                </div>
            </section>
            <footer  className="min-h-[50vh] w-screen bg-footer bg-cover  flex flex-col">
                <div className="flex flex-col gap-y-4 sm:flex-row justify-around  basis-5/6 items-start py-4 px-10 sm:items-center  text-white text-center font-black">
                    <Image alt={'logo'} src='/logo.png' width={200} height={200} className="sm:w-40 sm:h-40 w-20 h-20 p-2 bg-white rounded-sm shadow-blue-200 shadow-sm object-contain conver" />
                    <div>
                       <div className="flex flex-col items-start">
                        <h1 className="font-bold">Quick Links</h1>
                        {
                          navlinks.map((item,i)=>(<Link href={item.link} key={i} className="font-semibold hover:underline">{item.name}</Link>))  
                        }
                        </div>
                    </div>
                    <div className="text-white flex flex-col items-start">
                        <h1>Office Address</h1>
                        <h2 className="font-semibold">+255674663638</h2>
                        <h2 className="font-semibold">info@marafikicoffeemarketing.co.tz</h2>
                        <h2 className="font-semibold">Majengo, Mwanza</h2>
                        <h2 className="font-semibold">First floor</h2>
                        <h2 className="font-semibold">P.O.Box 11111 Tanzania</h2>

                    </div>

                    </div>  
                    <div className="px-10 sm:px-20">

                    <p className="basis-1/6 text-white font-bold w-full text-center   border-t-2 border-white">
                        Marafiki Coffee Marketing &copy; 2024
                    </p>
                    </div>
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
