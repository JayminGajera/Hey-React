import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isDark = useSelector((store) => store.app.isDark);
  return (
    <div className={'md:w-5/6 w-[100%] p-5' + (isDark && ' bg-black text-white')}>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
