import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import AddResult from "./Forms/AddResult";
import { Link } from "react-router-dom";
import EditResult from "./Forms/EditResult";
import ViewResult from "./Forms/ViewResult";
import AddUser from "./Forms/AddUser";
import axiosClient from "../axiosClient";
import { ClipLoader } from "react-spinners";

const DashUsers = () => {
  const [model, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [editModel, setEditModal] = useState(false);
  const [viewModel, setViewModel] = useState(false);
  const [suppliers, setSuppliers] = useState([]);

  const handleModel = () => {
    setModal(!model);
  };

  const handeEditModel = () => {
    setEditModal(!editModel);
  };

  const handleViewModel = () => {
    setViewModel(!viewModel);
  };
  const fetchSuppliers = async()=>{
try {
  
  const response = await axiosClient.get('/suppliers');
  setSuppliers(response.data);
  setLoading(false)
} catch (error) {
  console.error('Error fetching orders:', error);
}
}
  useEffect(() => {

fetchSuppliers()
  }, []);

 if (loading) {
      return (
        <div className="h-[80vh] flex items-center justify-center">
        <ClipLoader size={40} color={"#36d7b7"} />
    </div>
      );
    }

  return (
    <div className="overflow-x-auto">
      <Link
        onClick={handleModel}
        className="text-white bg-green-600 p-[7px] float-right m-[10px] border rounded-[7px] "
      >
        Add new
      </Link>

      {model && (
        <>
          <AddUser fetchSuppliers={fetchSuppliers} handleModel={handleModel} />
        </>
      )}
      {/* Model to edit deleivery */}
      {editModel && (
        <>
          <EditResult handeEditModel={handeEditModel} />
        </>
      )}

      {viewModel && (
        <>
          <ViewResult handleViewModel={handleViewModel} />
        </>
      )}
      <table className="w-full bg-white my-8 mx-3 border border-gray-200  rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Province</th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((job, index) => (
            <tr
              key={job.id}
              className="border-b border-gray-400 hover:bg-gray-50"
            >
              <td className="px-4 py-2 text-[14px]">{index + 1}</td>
              <td className="px-4 py-2 text-[14px]">{job.name}</td>
              <td className="px-4 py-2 text-[14px]">{job.email}</td>
              <td className="px-4 py-2 text-[14px]">{job.phone}</td>
              <td className="px-4 py-2 text-[14px]">{job.district}</td>
              <td className="px-4 py-2 text-[14px]">{job.province}</td>

              <td className="px-4 py-2 flex space-x-2">
                <button
                  onClick={handeEditModel}
                  className="p-2  cursor-pointer bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
                >
                  <FaEdit />
                </button>
                <button className="p-2 cursor-pointer bg-red-100 rounded-full text-red-600 hover:bg-red-200">
                  <FaTrash className="text-[14px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashUsers;
