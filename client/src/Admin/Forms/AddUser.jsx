import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axiosClient from "../../axiosClient";
import { toast, ToastContainer } from "react-toastify";

import {ClipLoader} from 'react-spinners';
function AddUser({ handleModel }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone:"",
 district:"",
    province:""
  });

  const [loading,setLoading] = useState(false)

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    try {
      await axiosClient.post("/supplier/register", formData);
   
      toast.success(" User Registered successfully!");
      setFormData({
        email: "",
        name:"",
        phone:"",
        district:"",
        province:""
      });
      setTimeout(() => {
        handleModel()
      }, 4000);
    } catch (error) {
      toast.error("Failed to Register User.");
      setLoading(false)
      console.error(error);
    }
  };

  return (
    <div className="fixed z-[50] top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      {/* Background overlay */}
      <ToastContainer/>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>
      {/* Modal content */}
      <form
        onSubmit={handleSubmit}
        className="relative z-[60] space-y-4 bg-white p-6 rounded shadow-lg w-full max-w-md "
      >
        <FaTimes
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onClick={handleModel}
        />
        <div className="">
          <div className="flex flex-col w-[100%] gap-[20px]">
            <div>
              <label className="block text-[15px] font-semibold mb-1">
                Supplier/Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={formData.name}
                name="name"
                placeholder="Enter Name"
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
                onChange={handleChange}
                value={formData.email}
                name="email"
                className="w-full p-[5px] border border-gray-400  rounded"
              />
            </div>
              <div>
              <label className="block  text-[15px] font-semibold mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Phone"
                onChange={handleChange}
                value={formData.phone}
                name="phone"
                className="w-full p-[5px] border border-gray-400  rounded"
              />
            </div>
               <div>
              <label className="block  text-[15px] font-semibold mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Phone"
                onChange={handleChange}
                value={formData.district}
                name="district"
                className="w-full p-[5px] border border-gray-400  rounded"
              />
            </div>
              <div>
              <label className="block  text-[15px] font-semibold mb-1">
                    Province <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Province"
                onChange={handleChange}
                value={formData.province}
                name="province"
                className="w-full p-[5px] border border-gray-400  rounded"
              />
            </div>
             <button className="bg-green-600 cursor-pointer text-white p-[7px] rounded">
               {
                loading ?(<><ClipLoader color="white" size={20} /></>):(<> Save</>)
               }
                
              </button>

            
            </div>
           
            </div>
         
         
       
      </form>
    </div>
  );
}

export default AddUser;
