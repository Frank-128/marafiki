import React from 'react'

function JobCard({role,location,summary,responsibilities,requirements}) {
  return (
    <div className='space-y-4 rounded bg-slate-100 shadow-sm p-4'>
      <div>
        <h1 className='text-3xl font-black'>
          {role} 
        </h1>
        <div className='flex justify-between'>

        <h2>
          Location : <i>{location}</i>
        </h2>
        <span className='bg-green-300 text-green-900 text-sm rounded-md p-1'>Full time</span>
        </div>
      </div>
      
    <div>
      <h1 className="text-base font-black">Job Summary</h1>
      <p className='text-sm'>
      {summary}
      </p>
    </div>
 
    <div>
    
    <h1 className="text-base font-black">Key Responsibilites</h1>
    <ul className="list-disc text-sm ">
      {
        responsibilities.map((item,idx)=><li key={idx}>{item}</li>)
      }
      
    </ul>
    </div>
 
    <div>
    
    <h1 className="text-base font-black">Requirements</h1>
    <ul className="list-disc text-sm">
      {
        requirements.map((item,idx)=><li key={idx}>{item}</li>)
      }
      
    </ul>
    </div>

   
    </div>
  )
}

export default JobCard