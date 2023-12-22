import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Body = () => {
  const isDark = useSelector((store) => store.app.isDark);
  return (
    <div className={'flex gap-x-2 w-full ' + (isDark && 'bg-black')}>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
