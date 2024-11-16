import Link from 'next/link'
import React,{forwardRef} from 'react'

const ServiceCard = forwardRef(({ title, id, desc, icon:Icon }, ref)=> (
        <div ref={ref} className='flex flex-col items-center p-4  border  border-white shadow-sm sm:w-[20vw] w-[80vw]  '>
            <div>
                <Icon className='text-[#AACA33] text-3xl'/>
            </div>
            <h1 className='text-yellowColor font-bold text-center text-2xl '>
                {title}

            </h1>
            <p className='text-md text-center text-white'>
                {desc}
            </p>
            <Link href={"/our-services#" + id} className='p-2 text-xs text-[#AACA33] cursor-pointer'>Read
                more... </Link>
        </div>
    ))

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard