import React from 'react'
import { FaBell, FaSearch, FaUser } from 'react-icons/fa'

function DashNav() {
  return (
    <div className='bg-[#f8f9fa] shadow-2xs sticky top-0  z-50 p-4 ml-[250px] flex justify-between items-center'>
        <div>
            
        </div>
        <div className='flex gap-1.5 items-center'>
            <FaBell/>
            <FaSearch/>
            <div className='bg-green-600 w-[30px] h-[30px] rounded-full flex justify-center items-center text-white font-bold text-2xl'>
                <FaUser className='text-white text-center text-[16px]'/>
            </div>
        </div>
    </div>
  )
}

export default DashNav