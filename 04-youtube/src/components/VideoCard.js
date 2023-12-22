import React from 'react'

const VideoCard = ({info}) => {

  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;


  return (
    <div className='p-2 w-80'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt='video-thumbnail'/>
      <div>
        <h1 className='font-bold py-2'>{title}</h1>
        <h2 className='text-sm'>{channelTitle}</h2>
        <p className='text-sm'>{statistics.viewCount} views</p>
      </div>
    </div>
  )
}

export default VideoCard
