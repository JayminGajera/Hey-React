import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex mt-2 items-center gap-x-2'>
        <FaRegUserCircle className='text-3xl'/>
        <div>
            <p className='text-sm font-bold'>{name}</p>
            <p className='text-sm'>{text}</p>
        </div>
      
    </div>
  )
}

export default Comment
