import React from 'react'
import { FaTimes } from 'react-icons/fa'

function ViewResult({handleViewModel}) {
  return (
    <div className="fixed z-[50] top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>

      {/* Modal content */}
      <form className="relative z-[60] space-y-4 bg-white p-6 rounded shadow-lg w-[90%] max-w-lg">
        <FaTimes
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onClick={handleViewModel}
        />
        <div className='flex flex-col gap-[10px]'>
            <h1 className='border-b border-gray-400  text-white p-[7px] mt-[20px] pb-[10px] bg-gray-500'>Suppier Informtion</h1>
        <div className="flex items-center gap-[4px]">
            <h1>Company name:</h1>
            <p className='text-[14px]'>Luna</p>

        </div>
        <div className="flex items-center gap-[4px]">
            <h1>Email:</h1>
            <p className='text-[14px]'>luna@gmail.com</p>
            
        </div>
        <h1 className='border-b border-gray-400 mt-[20px] text-white p-[7px] bg-gray-400'>Result Information</h1>
        <div className="flex items-center gap-[4px]">
            <h1>Mineral:</h1>
            <p className='text-green-600 text-[14px]'>Coltan</p>
            
        </div>
        <div className="flex items-center gap-[4px]">
            <h1>Weight:</h1>
            <p className='text-[14px]'>200kg</p>
            
        </div>
        <div className="flex items-center gap-[4px]">
            <h1>Purity Grade:</h1>
            <p className='text-[14px]'>A</p>
            
        </div>
        <div className="flex items-center gap-[4px]">
            <h1>Date:</h1>
            <p className='text-[14px]'>12/5/2025</p>
            
        </div>
        <div className="flex items-center gap-[4px]">
            <h1>Lab Technician:</h1>
            <p className='text-[14px]'>Umwizerwa Gedeon</p>
            
        </div>
        </div>

        
        <div>
            <button className='bg-green-600 cursor-pointer text-white p-[7px] rounded'>Notify Customer</button>
        </div>
      </form>
    </div>
  )
}

export default ViewResult