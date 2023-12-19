import React from 'react'
import Button from './Button'
import { buttonList } from '../utils/constants'

const ButtonList = () => {
  return (
    <div className='flex gap-x-2'>
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