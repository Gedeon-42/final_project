import React from 'react'
import { FaTimes } from 'react-icons/fa'

function AddDeliveries({ handleModel }) {
  return (
    <div className="fixed z-[50] top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>

      {/* Modal content */}
      <form className="relative z-[60] space-y-4 bg-white p-6 rounded shadow-lg w-[90%] max-w-lg">
        <FaTimes
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onClick={handleModel}
        />
         <div>
          <label className="block text-[15px] font-semibold mb-1">
            Supplier/Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter  name"
            className="w-full p-[5px] text-[15px]  border border-gray-400 rounded"
          />
        </div>
        <div>
          <label className="block  text-[15px] font-semibold mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-[5px] border border-gray-400  rounded"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block  text-[15px] font-semibold mb-1">
              Mineral Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-[5px]  text-[15px] border border-gray-200  rounded"
              placeholder='Type of Minerals'
            />
          </div>
          <div className="flex-1">
            <label className="block text-[15px] font-semibold mb-1">
              Batch Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder='Enter Batch Number'
              className="w-full p-[5px]  text-[15px] border border-gray-200 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block  text-[15px] font-semibold mb-1">
              Gross Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-[5px]  text-[15px] border border-gray-200  rounded"
              placeholder='Type of Minerals'
            />
          </div>
          <div className="flex-1">
            <label className="block text-[15px] font-semibold mb-1">
              Net Weight<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder='Enter Batch Number'
              className="w-full p-[5px]  text-[15px] border border-gray-200 rounded"
            />
          </div>
        </div>

        <div >
          <label className="block text-[15px] font-semibold mb-1">
            Date 
          </label>
          <input type="Date" className="w-full p-[5px] border-gray-400 border rounded" />
        </div>

        <div>
          <label className="block text-[15px] font-semibold mb-1">
            Mineral Grade <span className="text-red-500">*</span>
          </label>
          <select className="w-full p-[7px] bg-gray-100 rounded">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div>
            <button className='bg-green-600 text-white p-[7px] rounded'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddDeliveries