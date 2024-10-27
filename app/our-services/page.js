import { services } from '@/constants/services'
import React from 'react'

function Services() {
  return (
    <div className='sm:px-20 px-10 flex flex-col sm:gap-6 gap-3 sm:py-14 py-6'>
          <h1 className='font-bold text-center sm:text-xl text-lg'>Our Services</h1>
      {
    services.map((item,i)=>(<div key={i} id={item.id} className='flex flex-col'>
      <h1 className='font-black sm:text-xl text-lg'>{item.title}</h1>
      <p>{item.description}</p>

    </div>))
    }
      </div>
  )
}

export default Services