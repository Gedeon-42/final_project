import React, { useEffect, useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AddDeliveries from './Forms/AddDeliveries';
import EditDeliveries from './Forms/EditDeliveries';
import axiosClient from '../axiosClient';
import { ClipLoader } from 'react-spinners';
const AdminDeliveries = () => {
 const[model,setModal]= useState(false)
 const[editModel,setEditModal]=useState(false)
 const [ orders, setOrders ] = useState([])
   const [loading,setLoading] = useState(true)

  const fetchOrders = async ()=>{
    try {
      const response = await axiosClient.get('/orders');
      setOrders(response.data.orders.data);
       setLoading(false)
       console.log(response.data.orders.data) 
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  }
 useEffect(()=>{
  
 fetchOrders()
 },[])

 const handleModel = ()=>{
  setModal(!model)
 }

 const handeEditModel = ()=>{
  setEditModal(!editModel)
 }


  if (loading) {
      return (
        <div className="h-[80vh] flex items-center justify-center">
        <ClipLoader size={40} color={"#36d7b7"} />
    </div>
      );
    }

  return (
    <div className="max-w-full overflow-x-auto relative">
      <Link onClick={handleModel} className='text-white bg-green-600 p-[7px] float-right m-[10px] border rounded-[7px] '>Add new</Link>
 {model && <>
 <AddDeliveries fetchOrders={fetchOrders} handleModel={handleModel}/>
 </>}
{/* Model to edit deleivery */}
{
  editModel && <>
  <EditDeliveries handeEditModel={handeEditModel}/>
  </>
}
      <table className="min-w-full max-w-full bg-white mr-[20px] ml-[20px] mt-[30px] border border-gray-200  rounded-lg">
        
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mineral</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Weight</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Province</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map((item, index) => (
            <tr key={item.id} className="border-b border-sky-500 hover:bg-gray-50">
              <td className="px-4 py-2 text-[14px]">{index + 1}</td>

              <td className="px-4 py-2 text-[14px]">{item.mineral}</td>
              <td className="px-4 py-2 text-[14px]">{item.supplier_name}</td>
              <td className="px-4 py- text-[14px]">{item.supplier_email}</td>
              <td className="px-4 py- text-[14px]">{item.date}</td>
                <td className="px-4 py- text-[14px]">{item.net_weight}</td>
                           <td className="px-4 py- text-[14px]">{item.batch_number}</td>
              <td className="px-4 py-2 text-[14px]">{item.district}</td>
              <td className="px-4 py-2 text-[14px]">{item.province}</td>
              <td className="px-4 py-2 text-[14px]">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {item.status}
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
