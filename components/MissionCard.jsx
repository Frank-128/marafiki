import React from 'react'
import Image from 'next/image'

function MissionCard() {
  return (
    <div className="relative w-[80vw] sm:w-[30vw] bg-white rounded-lg shadow-md p-6">
    
    {/* Content inside the card */}
    <div className="flex flex-col items-center px-8">
      <Image src={'/svgs/dart.svg'} width={50} height={50} alt="mission" />
      <h1 className="font-black text-lg">Mission</h1>
      <h3 className="text-center text-xs">
        To elevate the Tanzanian Coffee Industry by providing access to better global markets while
        delivering premium, ethically sourced coffee to our international partners.
      </h3>
    </div>
  </div>

    )
}

export default MissionCard