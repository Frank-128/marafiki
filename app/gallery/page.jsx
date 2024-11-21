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
    <div className='space-y-16'>
        <section className={'w-screen relative -mt-24'}>
            <Image width={1920} height={600} className={"object-cover h-[20rem] w-screen"} alt={"coffee crop"}
                   src={'/coffee-climate.jpg'}/>
            <h2 className="text-3xl font-bold text-brown-800">Explore the Marafiki Coffee Journey</h2>
            <p className="text-lg text-gray-700 mt-4">
                Welcome to our gallery, where we capture the vibrant world of Marafiki Coffee Marketing. Here, we
                showcase the essence of Tanzania’s coffee culture, from the lush, green coffee farms to the bustling
                marketplaces and every step in between.
            </p>
            <p className="text-   lg text-gray-700 mt-4">
                Every image reflects our commitment to quality, sustainability, and community, highlighting the
                dedication of our farmers and the journey each bean takes to reach your cup. Take a visual tour and
                immerse yourself in the beauty of Tanzanian coffee production, the proud faces behind every harvest, and
                the unique landscapes that make our coffee truly exceptional.
            </p>
            <p className="text-lg text-gray-700 mt-4">
                We invite you to explore these moments, as each one tells a story of passion, resilience, and the shared
                journey from farm to table.
            </p>
        </section>

        <Carousel arrows autoplay>
            {
                images.map((item, i) => (<div key={i}>
                    <Image alt="image gallery" src={item} className='w-full h-[75vh] object-cover' width={200} height={200} />
                </div>))
            }
        </Carousel>
        <h1 className='font-black text-center py-3 text-redColor'>Take a look at our daily activities </h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-12'>
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