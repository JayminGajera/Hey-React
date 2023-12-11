import React from 'react'

const Contect = () => {
  return (
    <div className='contect-form'>
      <h1 className='contect'>
        Contect Us
      </h1>
      <div className='contect-field'>
        <label>First Name</label>
        <input placeholder='name' type='text'/>

        <label>Last Name</label>
        <input type='text'/>

        <label>Email Id</label>
        <input type='email'/>

        <button type='submit'>Submit</button>
      </div>
      
    </div>
    
  )
}

export default Contect
