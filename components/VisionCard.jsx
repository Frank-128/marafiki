import React from 'react'
import Image from 'next/image'

function VissionCard() {
  return (
    <div className="relative w-[80vw] sm:w-[30vw] bg-white rounded-lg shadow-md p-6">
    
    {/* Content inside the card */}
    <div className="flex flex-col items-center px-8">
      <Image src={'/svgs/eye.svg'} width={50} height={50} alt="vision" />
      <h1 className="font-black text-lg">Vision</h1>
      <h3 className="text-center text-xs">
      To become a trusted global partner in the coffee industry, known for connecting Tanzanian
coffee producers to the world, while enhancing the value of every bean through sustainable
practices, quality control, and a seamless supply chain.
      </h3>
    </div>
  </div>

    )
}

export default VissionCard