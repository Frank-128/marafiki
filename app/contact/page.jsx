import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Image from 'next/image'
import {FaLocationPin, FaMessage} from "react-icons/fa6";

function Contact() {
    const contacts = [
        {
            name:"Phone number",
            value:"+255674663638",
            icon:<FaWhatsapp className='text-green-500' />
        },
        {
            name:"Phone number",
            value:"+255674663638",
            icon:<FaPhone className='text-gray-600'  />
        },
        {
            name:"Email",
            value:"marafikicoffeemarketing@gmail.com",
            icon:<HiMail />
        }
    ]
  return (
    <div className='flex flex-col   min-h-[100vh] w-full '>
        <div className={'w-screen relative -mt-24'}>
            <Image width={1920} height={600} className={"object-cover h-[20rem] w-screen"} alt={"coffee crop"} src={'/coffee_crop.jpg'} />
            <div className={"w-full h-[20rem] bg-black/50 flex flex-col gap-y-8 items-center justify-center top-0 left-0 absolute "}>
                <h1 className={'font-bold sm:text-5xl text-xl text-white'}>Contacts</h1>

                <div className={'flex gap-3 items-center'}>
                <h1 className={'sm:text-xl text-sm text-yellowColor'}>Contact Us</h1>
                <h1 className={'sm:text-xl text-sm text-white'}>Marafiki Coffee Marketing</h1>
                </div>
            </div>
        </div>
        <div className={"w-screen bg-deepGreenColor  pt-24 px-4 flex max-lg:flex-col"}>
        <div className={"basis-1/2 p-4 space-y-4"}>
            <h1 className={'text-2xl font-semibold text-yellowColor'}>Get in Touch</h1>
            <h2 className={"text-5xl font-black text-white"}>Where coffee meets creativity in marketing</h2>
            <h3 className={"text-[#d9d9d9] text-2xl font-light"}>
                Contact Marafiki Coffee Marketing today and unlock the full potential of your coffee business!
            </h3>
        </div>

            <div className={"basis-1/2 h-fit py-4"}>
                <h1 className={'text-3xl font-semibold text-white pb-8 '}>Visit Us</h1>
                <div className={"space-y-5"}>
                    <div className={"flex gap-x-3"}>
                        <FaLocationPin className={"text-white"}/>
                        <b className={'text-yellowColor font-semibold'}>Balewa Rd, Mwanza 00000</b>
                    </div>
                    <div className={"flex gap-x-3"}>
                        <FaPhone className={"text-white"}/>
                        <b className={'text-yellowColor font-semibold'}>+255674663638</b>
                    </div>
                    <div className={"flex gap-x-3"}>
                        <FaMessage className={"text-white"}/>
                        <b className={'text-yellowColor font-semibold'}>info@marafikicoffeemarketing.co.tz</b>
                    </div>
                </div>
                <div style={{width: '100%', height: '400px'}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3985.990452043395!2d32.900318474351415!3d-2.510003297468522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-2.5099819!2d32.9029363!4m5!1s0x19ce7bfd74ac4caf%3A0x92f4ce8e96436e8!2sBalewa%20Rd%2C%20Mwanza%2000000!3m2!1d-2.5100032999999997!2d32.902893399999996!5e0!3m2!1sen!2stz!4v1732128053390!5m2!1sen!2stz"
                        className={"sm:w-[600px] w-[300px] h-[400px]"} style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </div>


    </div>
  )
}

export default Contact