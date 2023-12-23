import React from 'react'
import Button from './Button'
import { buttonList } from '../utils/constants'

const ButtonList = () => {
  return (
    <div className='flex md:w-full w-[100%] md:gap-x-2 gap-x-1 overflow-x-scroll container-snap'>
      {
        buttonList.map((category,index) => {
          return (
            <Button key={category+index} name={category}/>
          )
        })
      }
      
    </div>
  )
}

export default ButtonList