import React, { useEffect, useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import AddResult from './Forms/AddResult';
import { Link } from 'react-router-dom';
import EditResult from './Forms/EditResult';
import ViewResult from './Forms/ViewResult';
import axiosClient from '../axiosClient';
import { ClipLoader } from 'react-spinners';

 
const AdminResult = () => {
  const[model,setModal]= useState(false)
   const[editModel,setEditModal]=useState(false)
   const[viewModel,setViewModel]=useState(false)
   const [ results, setResults ] = useState([])
   const [loading,setLoading] = useState(true)

  const fetchResults = async ()=>{
    try {
      const response = await axiosClient.get('/results');
      setResults(response.data.orders.data);
       setLoading(false)
       console.log(response.data.orders.data) 
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  }
 useEffect(()=>{
  
 fetchResults()
 },[])

  
   const handleModel = ()=>{
    setModal(!model)
   }
  
   const handeEditModel = ()=>{
    setEditModal(!editModel)
   }

   const handleViewModel = ()=>{
    setViewModel(!viewModel)
   }


     if (loading) {
      return (
        <div className="h-[80vh] flex items-center justify-center">
        <ClipLoader size={40} color={"#36d7b7"} />
    </div>
      );
    }

  return (
    <div className="overflow-x-auto">
      <Link onClick={handleModel} className='text-white bg-green-600 p-[7px] float-right m-[10px] border rounded-[7px] '>Add new</Link>
      
      {model && <>
 <AddResult fetchResults={fetchResults} handleModel={handleModel}/>
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
      <table className="min-w-full m-4 border border-gray-200  rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mineral</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">weight</th>
            {/* <th className="px-4 py-2 text-gray-700 text-left">Grade</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Methodology</th>
            {/* <th className="px-4 py-2 text-gray-700 text-left">Test Performed</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
            
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supervisor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security Observers</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          { results &&results.map((job, index) => (
            <tr key={job.id} className="border-b border-gray-300 hover:bg-gray-50">
              <td className="px-4 py-[4px] text-[14px]">{index + 1}</td>

              <td className="px-4 py-[4px] text-[14px]">{job.mineral}</td>
              <td className="px-4 py-[4px] text-[14px]">{job.date}</td>
              <td className="px-4 py- text-[14px]">{job.gross_weight}</td>
              {/* <td className="px-4 py- text-[14px]">{job.grade}</td> */}
                <td className="px-4 py- text-[14px]">{job.methodology}</td>
                {/* <td className="px-4 py- text-[14px]">{job.test}</td> */}
                <td className="px-4 py-[4px] text-[14px]">{job.supplier_name}</td>
                <td className="px-4 py-[4px] text-[14px]">{job.supplier_email}</td>
                <td className="px-4 py-[4px] text-[14px]">{job.technician}</td>
                    <td className="px-4 py-[4px] text-[14px]">{job.supervisor}</td>
                    <td className="px-4 py-[4px] text-[14px]">{job.security}</td>
              <td className="px-4 py-[4px] text-[14px]">
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
              <td className="px-4 py-[4px] flex space-x-2">
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
