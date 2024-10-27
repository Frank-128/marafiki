import { faqs } from '@/constants/faqs'
import { Collapse } from 'antd'
import React from 'react'

function FAQS() {
  return (
    <div className='sm:px-20 px-5 space-y-4 sm:py-10 py-4'>
        <p className='text-sm text-center font-black'>Have questions? We&apos;ve got some responses for the frequently asked questions!</p>
        <Collapse defaultActiveKey={['1']} ghost items={faqs} />
    </div>
  )
}

export default FAQS