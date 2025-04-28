import React from 'react'
import {  FaCoffee, FaDollarSign, FaGalacticRepublic, FaHeading, FaHome } from 'react-icons/fa'
import { SiCloudflareworkers } from 'react-icons/si'
import { CiSettings } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function SupplierSide() {
  return (
    <div className='bg-white fixed border-r-1 border-gray-200 top-0 h-[100vh] flex flex-col gap-[20px] p-[10px] w-[200px]'>
        <div className='mb-4'>
        <img src="/images/logo1.jpg" className='h-[60px] w-[70px]' alt="" />
        </div>
        <div className='flex flex-row gap-2 items-center '>
            <FaHome className='text-[15px]'/>
            <Link to="/supplier/dashboard" className=' text-[15px] text-gray-600'>Dashboard</Link>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <FaCoffee className='text-[15px]'/>
            <Link to="/supplier/delivery" className='text-[15px]  text-gray-600'>Delivery Tracking</Link>
        </div>
        <div className='flex flex-row gap-2 items-center'>
       
            <SiCloudflareworkers className='text-[15px]' />
            <Link to="/supplier/result" className='text-[15px]  text-gray-600'>Mineral  Result</Link>
        </div>
        {/* <div className='flex flex-row gap-2 items-center'>
       
       <FaGalacticRepublic className='text-[15px]' />
       <Link to="/supplier/report" className='text-[15px]  text-gray-600'> Report</Link>
   </div> */}
   <div className='flex flex-row gap-2 items-center'>
       
       <FaHeading className='text-[15px]' />
       <Link to="/supplier/help" className='text-[15px]  text-gray-600'>Help And Support</Link>
   </div>
        <div className='flex flex-row gap-2 items-center'>
       
       <FaDollarSign className='text-[15px]' />
       <Link to="/supplier/payment" className='text-[15px]  text-gray-600'>Payment Information</Link>
   </div>
   <div className='flex flex-row gap-2 items-center'>
       
       <CiSettings className='text-[15px]' />
       <Link to="/supplier/settings" className='text-[15px]  text-gray-600'>Settings</Link>
   </div>
    </div>
  )
}

export default SupplierSide