import Link from 'next/link'
import React from 'react'

function ServiceCard({icon:Icon ,id,title,desc}) {
  return (
    <div className='flex flex-col items-center p-2  shadow-sm sm:w-[20vw] w-[80vw]  '>
      <div>
        <Icon className='text-[#AACA33] text-3xl' />
      </div>
      <h1 className='font-slate-600 font-semibold text-center text-sm'>
      {title}

      </h1>
      <p className='text-xs text-center'>
      {desc}
      </p>
      <Link href={"/our-services#"+id} className='p-2 text-xs text-[#AACA33] cursor-pointer'>Read more... </Link>
    </div>
  )
}

export default ServiceCard