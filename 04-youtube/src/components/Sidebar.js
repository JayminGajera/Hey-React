import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isOpen = useSelector(store => store.app.isMenuOpen);

    if(!isOpen) return null;

  return (
        <div className='h-screen col-span-1 place-items-center p-5 shadow-lg'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sport</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sport</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sport</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    
   
  )
}

export default Sidebar
