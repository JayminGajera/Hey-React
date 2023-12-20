import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex gap-x-2 w-full'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
