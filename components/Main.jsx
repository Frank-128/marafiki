"use client"
import {useState} from 'react';
import { Drawer, Popover} from "antd";
import {  useAppContext } from "./context/AppContext";
import Navbar from "./Navbar";
import { FaX } from "react-icons/fa6";
import { navlinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {FaPaperPlane,  FaWhatsapp} from "react-icons/fa";


function Main({ children }) {
    const {openSidebar,setOpenSidebar} = useAppContext()
    const [message,setMessage] = useState("");
    const pathname = usePathname()

    const handleMessage = ()=>{
        const theMessage = message + "* sent from Marafiki Coffee Website *"

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/+255658004980?text=${encodedMessage}`;


        window.open(whatsappURL, "_blank");
        setMessage("")
    }


    return (
        
        <main className={''}>
            <Navbar />
            <section className="pt-24 min-h-screen">
            {children}
            </section>
            <footer  className="min-h-[20rem] w-screen bg-footer bg-cover justify-between  flex flex-col px-10 sm:px-20">

                <div className={'flex max-2xl:flex-col'}>


                    <div
                        className="flex flex-col gap-y-4 sm:flex-row justify-around  basis-5/6 items-start py-4  sm:items-center  text-white text-center font-black">
                        <Image alt={'logo'} src={"/logo.png"} width={200} height={200}
                               className="sm:w-40 sm:h-40 w-20 h-20 p-2 bg-white rounded-sm shadow-blue-200 shadow-sm object-contain conver"/>
                        <div>
                            <div className="flex flex-col items-start">
                                <h1 className="font-bold text-yellowColor">Quick Links</h1>
                                {
                                    navlinks.map((item, i) => (<Link href={item.link} key={i}
                                                                     className="font-semibold hover:underline">{item.name}</Link>))
                                }
                            </div>
                        </div>
                        <div className="text-white flex flex-col items-start">
                            <h1 className={'text-yellowColor'}>Office Address</h1>
                            <h2 className="font-semibold">+255674663638</h2>
                            <h2 className="font-semibold">info@marafikicoffeemarketing.co.tz</h2>
                            <h2 className="font-semibold">Majengo, Mwanza</h2>
                            <h2 className="font-semibold">First floor</h2>
                            <h2 className="font-semibold">P.O.Box 11111 Tanzania</h2>

                        </div>

                    </div>
                    <section className="flex flex-col justify-center">
                        <div className="font-semibold sm:font-2xl font-xl text-yellowColor">Join our mailing list and hear more
                            from us
                        </div>
                        <div className="space-y-4 py-5">
                            <div>
                                <div className="w-full">
                                    <input placeholder="Email" type={'email'} className="p-3 w-full text-white focus:border-blue-600  bg-transparent outline-none border-b-2 border-[#d9d9d9]"/>
                                </div>
                            </div>

                            <div className="bg-redColor text-center p-2 rounded text-white">
                                Submit
                            </div>
                        </div>
                    </section>
                </div>
                <div className="">

                    <p className="basis-1/6 text-white font-bold w-full text-center   border-t-2 border-white">
                        Marafiki Coffee Marketing &copy; 2024
                    </p>
                </div>
            </footer>
            <Drawer
                title={<div className="flex  items-center gap-2">
                    <Image width={100} height={100} className="w-12 h-12 object-contain" src="/logo.png"
                           alt="logo"/>
                    <span className="font-bold">Marafiki Coffee Marketing</span>
                </div>}
                placement={"left"}
                closable={false}
                onClose={() => setOpenSidebar(false)}
                open={openSidebar}
                key={"left"}
                className="!sm:hidden !relative !px-0"
            >


                <ul className="gap-y-5 flex-col flex ">

                    {
                        navlinks.map((item, i) => (

                            <li key={i}>
                            <Link onClick={()=>setOpenSidebar(false)} className={`${pathname === item.link && "text-redColor underline underline-redColor"}`} href={item.link}>
                   {item.name}
                   </Link>
        </li>
        ))
    }

</ul>

    <FaX  onClick={()=>setOpenSidebar(false)} className="absolute left-1/2 bottom-0 my-4 bg-redColor text-white font-black h-6 w-6 rounded-full p-2" />

        </Drawer>
            <div>
                <Popover content={<div>

                    <div className={'flex items-center gap-x-2'}>

                    <input onChange={(e)=>setMessage(e.target.value)} className={'p-2 border-[1px] rounded focus:outline-yellowColor'} />
                        <button onClick={handleMessage} disabled={message.trim() === ""}>

                        <FaPaperPlane  className={'cursor-pointer'}  />
                        </button>
                    </div>
                </div>} title="Chat with us" trigger="hover">

                <FaWhatsapp className={'text-green-500 text-4xl fixed bottom-3 right-3'} />
                </Popover>
            </div>
        </main>
        
    );
}

export default Main;
