import { services } from '@/constants/services'
import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <div className='sm:px-20 px-10 flex flex-col sm:gap-6 gap-3 sm:py-14 py-6'>
          <h1 className='font-bold text-center sm:text-xl text-lg'>Our Services</h1>
      {
    services.map((item,i)=>(
    <div key={i} className='flex flex-col sm:flex-row gap-3 pb-3 border-b-[0.8px] border-gray-400'>
      <Image src={item.img} alt="image data" width={200} height={200} className='basis-1/2 w-[90vw] sm:w-[30vw] h-[40vh] object-cover' />
    <div  id={item.id} className='flex flex-col basis-1/2 px-2'>
      <h1 className='font-black sm:text-xl text-lg'>{item.title}</h1>
      <p>{item.description}</p>
      </div>
    </div>))
    }
    <div>
    Our clients.
    </div>
      </div>
  )
}

export default Services