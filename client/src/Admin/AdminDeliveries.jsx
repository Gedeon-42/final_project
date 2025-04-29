import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AddDeliveries from './Forms/AddDeliveries';
import EditDeliveries from './Forms/EditDeliveries';

const jobData = [
  {
    id: 1,
    type: ' cassiterit',
    postedDate: '12-01-2023',
    quanity: '450kg ',
    site:"Luna",
    status: 'Active',
  },
  {
    id: 2,
    type: 'cassiterit',
    postedDate: '12-01-2024',
    quanity: '450kg ',
    site:"Rutongo",
    status: 'Active',
  }, 
  {
    id: 3,
    type: ' coltan',
    postedDate: '12-01-2024',
    quanity: '450kg ',
    site:"Rutongo",
    status: 'Active',
  },
  {
    id: 4,
    type: ' cassiterit',
    postedDate: '12-01-2025',
    quanity: '450kg ',
    site:"Rutongo",
    status: 'Active',
  },
  {
    id: 5,
    type: ' coltan',
    postedDate: '12-01-2024',
    quanity: '450kg ',
    site:"Rutongo",
    status: 'Active',
  },
];

const AdminDeliveries = () => {

 const[model,setModal]= useState(false)
 const[editModel,setEditModal]=useState(false)

 const handleModel = ()=>{
  setModal(!model)
 }

 const handeEditModel = ()=>{
  setEditModal(!editModel)
 }
  return (
    <div className="overflow-x-auto relative">
      <Link onClick={handleModel} className='text-white bg-green-600 p-[7px] float-right m-[10px] border rounded-[7px] '>Add new</Link>
 {model && <>
 <AddDeliveries handleModel={handleModel}/>
 </>}
{/* Model to edit deleivery */}
{
  editModel && <>
  <EditDeliveries handeEditModel={handeEditModel}/>
  </>
}
      <table className="min-w-full bg-white mr-[20px] ml-[20px] mt-[30px] border border-gray-200  rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2  text-gray-700 text-left">No</th>
            <th className="px-4 py-2 text-gray-700 text-left">Mineral</th>
            <th className="px-4 py-2 text-gray-700 text-left">Delevery Date</th>
            <th className="px-4 py-2 text-gray-700 text-left">Quantity</th>
            <th className="px-4 py-2 text-gray-700 text-left">Site</th>
            <th className="px-4 py-2 text-gray-700 text-left">Status</th>
            <th className="px-4 py-2 text-gray-700 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={job.id} className="border-b border-sky-500 hover:bg-gray-50">
              <td className="px-4 py-2 text-[14px]">{index + 1}</td>

              <td className="px-4 py-2 text-[14px]">{job.type}</td>
              <td className="px-4 py-2 text-[14px]">{job.postedDate}</td>
              <td className="px-4 py- text-[14px]">{job.quanity}</td>
              <td className="px-4 py- text-[14px]">{job.site}</td>
              <td className="px-4 py-2 text-[14px]">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    job.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {job.status}
                </span>
              </td>
              <td className="px-4 py-2 flex space-x-2">
                {/* <button className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-200">
                  <FaEye />
                </button> */}
                <button onClick={handleModel} className="p-2 bg-gray-100 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200">
                  <FaEdit />
                </button>
                <button className="p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDeliveries;
