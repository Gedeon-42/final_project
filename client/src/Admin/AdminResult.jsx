import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import AddResult from './Forms/AddResult';
import { Link } from 'react-router-dom';
import EditResult from './Forms/EditResult';
import ViewResult from './Forms/ViewResult';

const jobData = [
  {
    id: 1,
  
    type: ' cassiterit',
    postedDate: '12-01-2023',
    quanity: '450kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"D",
    test:"Assay Of purity",
    status: 'Active',
    name:"eric",
    owner:"paccy",
    owner_email:"pacy@gmail.com"
  },
  {
    id: 2,
    type: 'cassiterit',
    postedDate: '12-01-2025',
    quanity: '450kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"A",
    test:"moisture",
    status: 'rejected',
    name:"Gedeon",
      owner:"paccy",
    owner_email:"pacy@gmail.com"
  }, 
  {
    id: 3,
    type: 'casetet',
    postedDate: '12-01-2024',
    quanity: '60kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"C",
    test:"Density",
    status: 'pending',
    name:"Peter",
      owner:"paccy",
    owner_email:"pacy@gmail.com"
  },
  {
    id: 4,
    type: 'Walframe',
    postedDate: '12-01-2025',
    quanity: '550kg ',
    custody:"lab technician",
    methodoly:"Manual testing",
    grade:"A",
    status: 'Active',
    name:"john",
    test:"Assay Of purity",
      owner:"eric",
    owner_email:"eric@gmail.com"
  },
  {
    id: 5,
    type: ' coltan',
    postedDate: '12-01-2024',
    quanity: '500kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"B",
    status: 'Active',
    test:"Assay Of purity",
    name:"jeanne",
      owner:"denny",
    owner_email:"deny@gmail.com"
  },
  {
    id: 6,
    type: ' coltan',
    postedDate: '12-01-2024',
    quanity: '500kg ',
    custody:"technician",
    methodoly:"X-ray fluorescence",
    grade:"A",
    status: 'Active',
    test:"Assay Of purity",
    name:"jeanne",
      owner:"pac",
    owner_email:"pacy@gmail.com"
  },
];

const AdminResult = () => {
  const[model,setModal]= useState(false)
   const[editModel,setEditModal]=useState(false)
   const[viewModel,setViewModel]=useState(false)
  
   const handleModel = ()=>{
    setModal(!model)
   }
  
   const handeEditModel = ()=>{
    setEditModal(!editModel)
   }

   const handleViewModel = ()=>{
    setViewModel(!viewModel)
   }
  return (
    <div className="overflow-x-auto">
      <Link onClick={handleModel} className='text-white bg-green-600 p-[7px] float-right m-[10px] border rounded-[7px] '>Add new</Link>
      
      {model && <>
 <AddResult handleModel={handleModel}/>
 </>}
{/* Model to edit deleivery */}
{
  editModel && <>
  <EditResult handeEditModel={handeEditModel}/>
  </>
}
{
  viewModel && <>
  <ViewResult handleViewModel={handleViewModel}/>
  </>
}
      <table className="min-w-full bg-white m-4 border border-gray-200  rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2  text-gray-700 text-left">No</th>
            <th className="px-4 py-2 text-gray-700 text-left">Mineral</th>
            <th className="px-4 py-2 text-gray-700 text-left">Date</th>
            <th className="px-4 py-2 text-gray-700 text-left">weight</th>
            {/* <th className="px-4 py-2 text-gray-700 text-left">Grade</th> */}
            <th className="px-4 py-2 text-gray-700 text-left">Methodoly</th>
            {/* <th className="px-4 py-2 text-gray-700 text-left">Test Performed</th> */}
            <th className="px-4 py-2 text-gray-700 text-left">Supplier</th>
            <th className="px-4 py-2 text-gray-700 text-left">email</th>
            
            <th className="px-4 py-2 text-gray-700 text-left">Technician</th>
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
              {/* <td className="px-4 py- text-[14px]">{job.grade}</td> */}
                <td className="px-4 py- text-[14px]">{job.methodoly}</td>
                {/* <td className="px-4 py- text-[14px]">{job.test}</td> */}
                <td className="px-4 py- text-[14px]">{job.owner}</td>
                <td className="px-4 py- text-[14px]">{job.owner_email}</td>
                <td className="px-4 py- text-[14px]">{job.name}</td>
              <td className="px-4 py-2 text-[14px]">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    job.status === 'Active'
                      ? 'bg-green-100 text-green-600' 
                       : job.status === 'pending'?'bg-orange-100 text-orange-400'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {job.status}
                </span>
              </td>
              <td className="px-4 py-2 flex space-x-2">
                <button onClick={handleViewModel} className="p-2 cursor-pointer bg-green-100 rounded-full text-green-600 hover:bg-green-200">
                  <FaEye />
                </button>
                <button onClick={handeEditModel}  className="p-2 cursor-pointer bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
                  <FaEdit />
                </button>
                <button className="p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200">
                  <FaTrash  className='text-[14px]'/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminResult;
