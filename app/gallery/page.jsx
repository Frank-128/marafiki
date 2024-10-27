import { Carousel } from 'antd'
import Image from 'next/image'
import React from 'react'

function Gallery() {
    const images = [
"/company photos/carriage-trucks.jpg",
"/company photos/coffee-godown.jpg",
"/company photos/coffee-godown2.jpg",
"/company photos/coffee-measured2.jpg",
"/company photos/coffee-trailer-full.jpg",
"/company photos/coffee-trailer.jpg",
"/company photos/coffee2.jpg",
"/company photos/coffee_crop.jpg",
"/company photos/coffee_measurement.jpg",
"/company photos/coffee_storage.jpg",
"/company photos/transport.jpg"
    ]
  return (
    <div className='px-4 py-2'>
        <h1 className='text-center font-black text-2xl text-redColor'>Our gallery</h1>
        <Carousel arrows autoplay >
            {
                images.map((item,i)=>(<div key={i}>
                    <Image alt="image gallery" src={item} className='w-full h-[75vh] object-cover' width={200} height={200} />
                </div>))
            }
        </Carousel>
        <h1 className='font-black text-center py-3 text-redColor'>Take a look at our daily activities </h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {
                images.map((item,i)=>(<div key={i}>
                    <Image alt="image gallery" src={item} className='lg:w-[25vw] md:w-[30vw] sm:w-[50vw] w-[90vw] h-[25vh] object-cover' width={200} height={200} />
                </div>))
            }
        </div>
    </div>
  )
}

export default Gallery