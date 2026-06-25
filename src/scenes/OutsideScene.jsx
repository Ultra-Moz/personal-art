import React from 'react'

const OutsideScene = ({goTo}) => {
  return (
    <div className='bg-red-500'>    <h1 className='text-5xl text-white text-center'>We are currently Outside the house</h1>
    <div className='mt-24 cursor-pointer bg-green-300 rounded-xl p-3 text-xl text-center ' onClick={()=>{goTo("inside")}}>Click this to go inside</div>
    </div>

  )
}

export default OutsideScene