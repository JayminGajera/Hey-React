import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='p-2 py-1 bg-gray-300 rounded-md text-sm'>{name}</button>
    </div>
  )
}

export default Button
