import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[10rem]'>
      <img src={IMG_CDN_URL + posterPath} alt='movie card' className='rounded-md'/>
    </div>
  )
}

export default MovieCard
