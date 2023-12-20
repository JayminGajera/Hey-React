import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-x-2 py-2'>
      <FaRegUserCircle className='text-2xl'/>
        <div className='flex gap-x-4'>
            <p className='text-sm font-bold'>{name}</p>
            <p className='text-sm'>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage
