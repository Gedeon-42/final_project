import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
function Help() {
  return (
    <div className='p-[20px] bg-[#f8f9fa] '>
      <div className='mb-[20px]'>
        <h1 className='text-[20px]'>Need Help? We've got your back</h1>
        <p>perhaps you can continue contact us</p>
      </div>
      <div className=" grid grid-cols-4 gap-4">
<div className="flex  flex-col items-center p-[20px] bg-white border rounded-[7px] border-gray-300">
  <MdOutlineAccountCircle className='text-[30px] text-gray-500'/>
  <div className="flex flex-col ml-[10px]">
    <h1 className='text-[18px]'>Grade & Weight</h1>
    <p className='text-gray-500'>what to change your password</p>
    </div>
</div>
<div className="flex flex-col items-center p-[20px]  bg-white border rounded-[7px] border-gray-300">
  <MdOutlineAccountCircle className='text-[30px] text-gray-500'/>
  <div className="flex flex-col ml-[10px]">
    <h1 className='text-[18px]'>Account && Login</h1>
    <p className='text-gray-500'>what to change your password</p>
    </div>
</div>
<div className="flex flex-col items-center p-[20px]  bg-white border rounded-[7px] border-gray-300">
  <MdOutlineAccountCircle className='text-[30px] text-gray-500'/>
  <div className="flex flex-col ml-[10px]">
    <h1 className='text-[18px]'>Payment</h1>
    <p className='text-gray-500'>what to change your password</p>
    </div>
</div>
<div className="flex flex-col items-center p-[20px]  bg-white border rounded-[7px] border-gray-300">
  <MdOutlineAccountCircle className='text-[20px] text-gray-500'/>
  <div className="flex flex-col ml-[10px]">
    <h1 className='text-[20px]'>Download Report</h1>
    <p className='text-gray-500 text-center'>Can't get or download your Report</p>
    </div>
</div>
<div className="flex flex-col items-center p-[20px]  bg-white border rounded-[7px] border-gray-300">
  <MdOutlineAccountCircle className='text-[20px] text-gray-500'/>
  <div className="flex flex-col items-center justify-center ">
    <h1 className='text-[17px]'>Batch Submission</h1>
    <p className='text-gray-500 text-center'>Have issue on submitting the Batch?</p>
    </div>
</div>
<div className="flex flex-col items-center p-[20px]  bg-white border rounded-[7px] border-gray-300">
  <MdOutlineAccountCircle className='text-[20px] text-gray-500'/>
  <div className="flex flex-col ml-[10px]">
    <h1 className='text-[17px]'>Account && Login</h1>
    <p className='text-gray-500 text-center'>what to change your password</p>
    </div>
</div>
<div className="flex flex-col items-center p-[20px] bg-white border rounded-[7px] border-gray-300">
  <MdOutlineAccountCircle className='text-[20px] text-gray-500'/>
  <div className="flex flex-col ml-[10px]">
    <h1 className='text-[17px]'>Contact Support</h1>
    <p className='text-gray-500 text-center'>contact us we are here for you</p>
    </div>
</div>

      </div>
    </div>
  )
}

export default Help