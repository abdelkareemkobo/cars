import React from 'react'

const Lorem = ({title}) => {
  return (
    <div className="text-lg font-mono font-thin text-slate-600 w-1/2 mx-auto">
        <h1 className="text-6xl text-center font-extrabold my-3 text-pink-500">{title}</h1>
        <div className='text-2xl text-center text-purple-700 font-extrabold font-mono '>
          This is simple full stack application to manage working with our cars company 
        </div>
    </div>
  )
}

export default Lorem