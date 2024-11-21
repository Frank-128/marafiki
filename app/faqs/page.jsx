"use client"
import { faqs } from '@/constants/faqs'
import { Checkbox, Collapse, Input, Select } from 'antd'
import React,{useState} from 'react'
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import {FaMinus, FaPlus} from "react-icons/fa";

function FAQS() {

  const AccordionButtonContent = ({ label }) => {
    const [isExpanded,setIsExpanded] = useState(false)

    return (
        <div className="flex justify-between">
          <h1 className="text-yellowColor">{label}</h1>
          {isExpanded ?    (
              <FaMinus className="text-yellowColor" />
          ) : (
              <FaPlus className="text-yellowColor" />
          )}
        </div>
    );
  };

  return (
      <div className=''>
        <section className={'w-screen relative -mt-24 our-services-welcome text-center '}>
          <Image width={1920} height={600} className={"object-cover h-[20rem] w-screen"} alt={"coffee crop"}
                 src={'/coffee-plantation.jpg'}/>
          <div
              className={"w-full h-[20rem] px-4 bg-black/70 flex flex-col gap-y-8 items-center justify-center top-0 left-0 absolute "}>
            <h1 className={'text-white font-black text-3xl'}>Frequently Asked Question</h1>
            <p className='text-md text-yellowColor text-center font-light space-y-4'>Have questions? We&apos;ve got some responses for
              the frequently asked questions!</p>
          </div>

        </section>
        <div className={'bg-deepGreenColor p-10 '}>
        {/*<Collapse defaultActiveKey={['1']} ghost items={faqs}/>*/}
          <Accordion allowZeroExpanded className={" py8 space-y-10"}>
            {faqs.map((item) => (
                <AccordionItem key={item.key}>
                  <AccordionItemHeading>
                    <AccordionItemButton>

                    <AccordionButtonContent label={item.label} />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>


                    {item.children}

                  </AccordionItemPanel>
                </AccordionItem>
            ))}
          </Accordion>

        </div>
        <div className="relative min-h-[70vh] w-screen  group">
              {/* Background image with blur */}
              <div
                  className="absolute w-full inset-0 bg-[url('/getintouch.png')] bg-cover bg-center bg-no-repeat blur-sm transition-all duration-300 "
              />

              {/* Optional dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"/>

              {/* Content container */}
              <div className="relative z-10 flex sm:h-[70vh] h-[100vh] sm:flex-row  flex-col items-center">
                <div
                    className='text-center sm:basis-1/2 basis-1/3 flex h-full justify-center sm:gap-y-8 gap-y-4 flex-col'>
                  <h1 className='text-white text-4xl'>Get in touch with us!</h1>
                  <p className='text-[#d3d3d3] group-hover:text-white group-hover:font-bold'>We&apos;d love to hear from
                    you. Whether you have question about us, our coffee,want to explore partnership opportunites or
                    simply wish to connect please fill out the form below</p>
                </div>
                <div className='sm:basis-1/2 basis-2/3 px-5  space-y-2 sm:space-y-0 flex-1'>
                  <div>
                    <span className='text-white font-bold'>Name</span>
                    <Input/>
                  </div>
                  <div>
                    <span className='text-white font-bold'>Email</span>
                    <Input/>
                  </div>
                  <div>
                    <span className='text-white font-bold'>Phone number</span>
                    <Input/>
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
                    <textarea/>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-white font-bold'>Preffered contact method</span>
                    <Checkbox onChange={() => {
                    }} className='!text-white'>Email</Checkbox>
                    <Checkbox onChange={() => {
                    }} className='!text-white'>Phone</Checkbox>
                  </div>

                </div>
              </div>
            </div>


          </div>
          )
          }

          export default FAQS