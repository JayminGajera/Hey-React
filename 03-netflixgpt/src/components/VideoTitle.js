import React from 'react'
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-12 absolute z-10 text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>

      <div className='flex gap-x-4'>
        <button className='bg-white text-black p-3 px-10 text-xl flex items-center gap-x-2 bg-opacity-80 hover:bg-opacity-100 rounded-lg'><span><FaPlay/></span> Play</button>
        <button className='bg-gray-600 text-white p-3 px-10 text-xl flex items-center gap-x-2 bg-opacity-80 hover:bg-opacity-100 rounded-lg'><span><LuInfo/></span> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
