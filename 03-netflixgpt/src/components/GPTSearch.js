import React from 'react'
import GPTSeachBar from './GPTSeachBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div className='absolute w-full h-full'>
    <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="bg-img"
        />
      </div>
      <GPTSeachBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
