import Link from 'next/link';
import React from 'react'

function ValuesCard({title,desc,variant,readMore=false,link}) {
    const getBackgroundClass = (variant) => {
        switch (variant) {
          case 'transparency':
            return 'bg-gradient-to-r from-red-500 to-red-400 ';
          case 'sustainability':
            return 'bg-gradient-to-r from-amber-700 to-amber-400';
          case 'quality':
            return 'bg-gradient-to-r from-green-700 to-green-400';
          case 'fair-trade':
            return 'bg-gradient-to-r from-blue-700 to-blue-400';
          default:
            return 'bg-red-500';
        }
      };
    return (
    <div id={link} className={`${getBackgroundClass(variant)} shadow-md rounded ${readMore ? 'h-[16rem]':'h-[30rem]'} w-[80vw] sm:w-[20rem]  p-4`}>
        <h1 className='text-white font-black text-xl'>{title}</h1>
        <p className='text-sm p-2 text-[#d9d9d9]'>{desc}</p>
        {readMore && <Link href={link} className='rounded border p-2 my-2 text-center shadow-sm text-white font-black cursor-pointer'>Read More</Link>}
    </div>
  )
}

export default ValuesCard