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
            <FaHome className='text-[16px]'/>
            <Link to="/supplier/dashboard" className=' text-[16px]'>Dashboard</Link>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <FaCoffee className='text-[16px]'/>
            <Link className='text-[16px]'>Delivery Tracking</Link>
        </div>
        <div className='flex flex-row gap-2 items-center'>
       
            <SiCloudflareworkers className='text-[16px]' />
            <Link className='text-[16px]'>Mineral  Result</Link>
        </div>
        <div className='flex flex-row gap-2 items-center'>
       
       <FaGalacticRepublic className='text-[16px]' />
       <Link className='text-[16px]'> Report</Link>
   </div>
   <div className='flex flex-row gap-2 items-center'>
       
       <FaHeading className='text-[16px]' />
       <Link className='text-[16px]'>Help And Support</Link>
   </div>
        <div className='flex flex-row gap-2 items-center'>
       
       <FaDollarSign className='text-[16px]' />
       <Link className='text-[16px]'>Payment Information</Link>
   </div>
   <div className='flex flex-row gap-2 items-center'>
       
       <CiSettings className='text-[16px]' />
       <Link className='text-[16px]'>Settings</Link>
   </div>
    </div>
  )
}

export default SupplierSide