import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

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
    <div className='flex flex-col items-center justify-center gap-3 h-[100vh] w-full '>
        {
            contacts.map((item,i)=><div key={i} className='flex gap-2 items-center'>
                <div className='text-xl text-gray-700 font-black'>{item.icon}</div>
                <div className='text-xl text-gray-700 font-black'>{item.name}</div>
                <div className='text-xl text-gray-700 font-black'>{item.value}</div>
                </div>)
        }
    </div>
  )
}

export default Contact