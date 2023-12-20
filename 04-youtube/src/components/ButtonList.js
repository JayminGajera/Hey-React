import React from 'react'
import Button from './Button'
import { buttonList } from '../utils/constants'

const ButtonList = () => {
  return (
    <div className='flex md:w-full w-[100%] md:gap-x-2 gap-x-1 overflow-x-scroll container-snap'>
      {
        buttonList.map((category) => {
          return (
            <Button key={category} name={category}/>
          )
        })
      }
      
    </div>
  )
}

export default ButtonList