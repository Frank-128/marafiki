import React from 'react'

function ValuesCard({title,desc,variant}) {
    const getBackgroundClass = (variant) => {
        switch (variant) {
          case 'transparency':
            return 'bg-gradient-to-r from-red-500 to-red-200 ';
          case 'sustainability':
            return 'bg-gradient-to-r from-amber-700 to-amber-200';
          case 'quality':
            return 'bg-gradient-to-r from-green-700 to-green-200';
          default:
            return 'bg-red-500'; // fallback
        }
      };
    return (
    <div className={`${getBackgroundClass(variant)} shadow-md rounded sm:w-[30vw] w-[80vw] p-4`}>
        <h1 className='text-white font-black text-xl'>{title}</h1>
        <p className='text-sm p-2 text-gray-800'>{desc}</p>
    </div>
  )
}

export default ValuesCard