import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex items-center flex-col gap-[20px] justify-center h-[100vh]'>

        <h1 className='text-[20px]'>Page Not Found</h1>
        <Link to="/" className='bg-green-600 text-white p-[10px] border rounded-[4px]'>Back Home</Link>
    </div>
  )
}

export default NotFound