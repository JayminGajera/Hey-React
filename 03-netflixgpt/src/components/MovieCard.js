import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-[6.5rem] md:w-[10rem]'>
      <img src={IMG_CDN_URL + posterPath} alt='movie card' className='rounded-md'/>
    </div>
  )
}

export default MovieCard
