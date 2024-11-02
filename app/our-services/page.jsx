import { services } from '@/constants/services'
import Image from 'next/image'
import React from 'react'
import { FaBullseye } from 'react-icons/fa'

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
   <h1 className='text-2xl font-semibold'>
     Our Clients
    </h1>
    <div className='text-md'>
Our Commitment to Buyers
  We serve a broad range of international buyers, including importers, specialty coffee roasters,
  cafés, and coffee shops seeking premium Tanzanian coffee. These buyers trust us to source high-
  quality, traceable coffee that meets their specific demands for flavor, sustainability, and

  quality.With this great trust, it comes with great responsibility and we fully understand the
  importance of fulfilling contract specifications and maintaining consistent quality. We equip our
  buyers with;
    </div>
    <div className='flex flex-col my-2 '>
      <div className='flex gap-2 items-center'>
        <FaBullseye className='text-red-500' />
        <h2 className='text-lg font-medium'>
        Regular updates and transparent communication throughout the sourcing, processing, and
        shipping stages.
        </h2>
      </div>
      <div className='flex gap-2 items-center'>
      <FaBullseye className='text-red-500' />
      <h2 className='text-lg font-medium'>
 Detailed quality control and grading reports to ensure all contract requirements are met.
     </h2> 
      </div>
      <div className='flex gap-2 items-center'>
      <FaBullseye className='text-red-500' />
      <h2 className='text-lg font-medium'>

Efficient logistics and timely delivery to maintain a smooth supply chain from Tanzania to
your destination.
      </h2>
      </div>
 <div className='flex gap-2 items-center'>
 <FaBullseye className='text-red-500' />
 <h2 className='text-lg font-medium'>

 Support in sourcing specialty coffees, sustainably certified beans, and unique regional
varieties to suit buyer preferences.
 </h2>
 </div>
 <div className='flex gap-2 items-center'>
 <FaBullseye className='text-red-500' />
 <h2 className='text-lg font-medium'>

Origin business trips to witness how everything is done on site, know the producers and
create stronger business models.
 </h2>
 </div>
</div>
    </div>
      </div>
  )
}

export default Services