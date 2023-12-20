import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='md:w-5/6 w-[100%] p-5'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
