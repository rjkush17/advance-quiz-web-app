import React from 'react'

function Button({label, handleScreen}) {
  return (
    <div onClick={handleScreen} className='w-fit rounded-lg bg-primary text-white font-semibold  font-robo mt-6 mx-auto '>
        <button className='  py-2 px-6'>{label}</button>
    </div>
  )
}

export default Button