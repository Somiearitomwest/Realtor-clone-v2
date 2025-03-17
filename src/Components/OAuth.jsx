import React from 'react'
import { FcGoogle } from 'react-icons/fc';

export default function OAuth() {
  return (
    
    <button className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:shadow-lg rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out mt-4
    '>
      <FcGoogle className=' bg-white rounded-full mr-2'/>
      Continue with Google
    </button>
  )
}
