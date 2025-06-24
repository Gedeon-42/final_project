import React from 'react'
import {  FaCoffee, FaDollarSign, FaGalacticRepublic, FaHeading, FaHome, FaJediOrder, FaUserAlt } from 'react-icons/fa'
import { SiCloudflareworkers } from 'react-icons/si'
import { CiSettings } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { ListOrdered } from 'lucide-react'

function DashSidebar() {
  return (
    <div className='bg-white fixed top-0 h-[100vh] flex flex-col gap-[20px] max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8'>
        <div className='mb-4'>
        <img src="/images/logo1.jpg" className='h-[60px] w-[70px]' alt="" />
        </div>
        <div className='flex flex-row gap-2 items-center '>
            <FaHome className='text-[15px]'/>
            <Link to="/admin/dashboard" className=' text-[15px] text-gray-600'>Dashboard</Link>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <FaJediOrder className='text-[15px]'/>
            <Link to="/admin/deliveries" className='text-[15px]  text-gray-600'>Samples</Link>
        </div>
        <div className='flex flex-row gap-2 items-center'>
       
            <SiCloudflareworkers className='text-[15px]' />
            <Link to="/admin/result" className='text-[15px]  text-gray-600'>Results</Link>
        </div>
        
        <div className='flex flex-row gap-2 items-center'>
       
       <FaUserAlt className='text-[15px]' />
       <Link to="/admin/users" className='text-[15px]  text-gray-600'>Suppliers</Link>
   </div>
   {/* <div className='flex flex-row gap-2 items-center'>
       
       <FaHeading className='text-[15px]' />
       <Link to="/admin/help" className='text-[15px]  text-gray-600'>Help And Support</Link>
   </div> */}
        <div className='flex flex-row gap-2 items-center'>
       
       <FaDollarSign className='text-[15px]' />
       <Link to="/admin/payment" className='text-[15px]  text-gray-600'>Payment Information</Link>
   </div>
   <div className='flex flex-row gap-2 items-center'>
       
       <CiSettings className='text-[15px]' />
       <Link to="/admin/settings" className='text-[15px]  text-gray-600'>Settings</Link>
   </div>
    </div>
  )
}

export default DashSidebar