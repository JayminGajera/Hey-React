import React from 'react'
import { useSelector } from 'react-redux';

const Button = ({name}) => {
  const isDark = useSelector((store) => store.app.isDark);
  return (
    <div>
      <button className={'p-2 py-1 bg-gray-300 rounded-md text-sm' + (isDark && ' bg-gray-800 text-white')}>{name}</button>
    </div>
  )
}

export default Button
