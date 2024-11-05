"use client"
import { faqs } from '@/constants/faqs'
import { Checkbox, Collapse, Input, Select } from 'antd'
import React from 'react'

function FAQS() {
  return (
    <div className='sm:px-20 px-5  sm:pt-10 py-4'>
        <p className='text-sm text-center font-black space-y-4'>Have questions? We&apos;ve got some responses for the frequently asked questions!</p>
        <Collapse defaultActiveKey={['1']} ghost items={faqs} />
        <div className="relative min-h-[70vh] w-screen sm:-ml-20 -ml-5 group">
  {/* Background image with blur */}
  <div 
    className="absolute w-full inset-0 bg-[url('/getintouch.png')] bg-cover bg-center bg-no-repeat blur-sm transition-all duration-300 "
  />
  
  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
  
  {/* Content container */}
  <div className="relative z-10 flex sm:h-[70vh] h-[100vh] sm:flex-row  flex-col items-center">
          <div className='text-center sm:basis-1/2 basis-1/3 flex h-full justify-center sm:gap-y-8 gap-y-4 flex-col'>
            <h1 className='text-white text-4xl'>Get in touch with us!</h1>
            <p className='text-[#d3d3d3] group-hover:text-white group-hover:font-bold'>We'd love to hear from you. Whether you have question about us, our coffee,want to explore partnership opportunites or simply wish to connect please fill out the form below</p>
          </div>
          <div className='sm:basis-1/2 basis-2/3 px-5  space-y-2 sm:space-y-0 flex-1'>
            <div>
              <span className='text-white font-bold'>Name</span>
              <Input />
            </div>
            <div>
              <span className='text-white font-bold'>Email</span>
              <Input />
            </div>
            <div>
              <span className='text-white font-bold'>Phone number</span>
              <Input />
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-bold'>Subject</span>
              <Select>
                <Select.Option>General Inquiry</Select.Option>
                <Select.Option>Partnership opportunity</Select.Option>
                <Select.Option>Other(specify)</Select.Option>
              </Select>
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-bold'>Message</span>
              <textarea />
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-bold'>Preffered contact method</span>
              <Checkbox onChange={()=>{}} className='!text-white'>Email</Checkbox>
              <Checkbox onChange={()=>{}} className='!text-white'>Phone</Checkbox>
            </div>

          </div>
        </div>
</div>
       
       
       
    </div>
  )
}

export default FAQS