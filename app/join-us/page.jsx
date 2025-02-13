import JobCard from '@/components/job-card'
import { roles } from '@/constants/roles'
import Image from 'next/image'
import React from 'react'

function JoinUs() {
  return (
    <div>
        <section className={'w-screen relative -mt-24 our-services-welcome text-center '}>
                        <Image width={1920} height={600} className={"object-cover h-[30rem] w-screen"} alt={"coffee crop"}
                               src={'/coffee_people.jpg'}/>
                        <div
                            className={"w-full h-[30rem] bg-black/50 flex flex-col gap-y-8 items-center justify-center top-0 left-0 absolute "}>
                            <div className="sm:text-xl text-sm px-10  text-white font-semibold text-center">
                                <span
                                    className={'text-bold sm:text-3xl text-lg text-yellowColor'}>Join Our Team at Marafiki Coffee Marketing!</span> <br/>
                                    At Marafiki Coffee Marketing, we are dedicated to building a sustainable, transparent, and efficient coffee supply chain that connects Tanzania’s finest 
                                    coffee to global markets. As we continue to grow,
                                     we are looking for talented professionals to join our team in the following roles:  
                            </div>
                        </div>
        
        </section>
        <div className='px-10 space-y-4 py-10 '>
        {
            roles.map((item,idx)=><JobCard key={idx} {...item} />)
        }
        </div>
        <div className='px-10'>
                <span className='text-center text-sm font-black'>Why join Marafiki Coffee Marketing??</span>
               
               <h1>
                 Be part of a growing and impactful company shaping the future of Tanzanian coffee.  
                </h1>
                
                <ul className='list-disc '>
                    <li>
                    Work in a dynamic and collaborative environment with passionate professionals.  
                    </li> 
                    <li>
                    Opportunities for career growth in the coffee industry.  
                    </li>
                </ul>
        
                <div>
                📩 How to Apply:<br/>
                If you are passionate about coffee and meet the qualifications,<br/> we&apos;d love to hear from you! Send your CV and a cover letter to <b>info@marafikicoffeemarketing.co.tz</b> with the subject line &quot;Application – [Job Title]&quot;

                </div>
            </div>
        
        </div>
  )
}

export default JoinUs