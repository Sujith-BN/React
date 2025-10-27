import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = () => {
  return (
    <div className=' py-18 px-16 h-[90vh] flex items-center gap-10 '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
