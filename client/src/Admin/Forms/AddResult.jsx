import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axiosClient from "../../axiosClient";
import { toast, ToastContainer } from "react-toastify";
function AddResult({ handleModel }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    owner: "",
    mineral: "",
    date: "",
    email: "",
    batch_number: "",
    methodology: "",
    net_Weight: "",
    grade: "",
    technician: "",
    status: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosClient.post("/results", formData);
   
      toast.success("Result submitted successfully!");
      setFormData({
        owner: "",
        mineral: "",
        date: "",
        email: "",
        batch_number: "",
        methodology: "",
        net_Weight: "",
        grade: "",
        technician: "",
        status: "",
      });

      // handleModel()
    } catch (error) {
      alert("Failed to submit result.");
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
        className="relative z-[60] space-y-4 bg-white p-6 rounded shadow-lg w-[800px] "
      >
        <FaTimes
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onClick={handleModel}
        />
        <div className="flex gap-[20px]">
          <div className="flex flex-col w-[50%] gap-[20px]">
            <div>
              <label className="block text-[15px] font-semibold mb-1">
                Supplier/Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={formData.owner}
                name="owner"
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
                onChange={handleChange}
                value={formData.email}
                name="email"
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
                  onChange={handleChange}
                  value={formData.mineral}
                  name="mineral"
                  className="w-full p-[5px]  text-[15px] border border-gray-200  rounded"
                  placeholder="Type of Minerals"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[15px] font-semibold mb-1">
                  Batch Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.batch_number}
                  name="batch_number"
                  placeholder="Enter Batch Number"
                  className="w-full p-[5px]  text-[15px] border border-gray-200 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block  text-[15px] font-semibold mb-1">
                  Methodology <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.methodology}
                  name="methodology"
                  className="w-full p-[5px]  text-[15px] border border-gray-200  rounded"
                  placeholder="Methodolgy"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[15px] font-semibold mb-1">
                  Net Weight<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.net_Weight}
                  name="net_Weight"
                  placeholder="Enter Batch Number"
                  className="w-full p-[5px]  text-[15px] border border-gray-200 rounded"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[50%] gap-[20px]">
            <div>
              <label className="block text-[15px] font-semibold mb-1">
                Date
              </label>
              <input
                name="date"
                onChange={handleChange}
                value={formData.date}
                type="Date"
                className="w-full p-[5px] border-gray-400 border rounded"
              />
            </div>

            <div>
              <label className="block text-[15px] font-semibold mb-1">
                Mineral Grade <span className="text-red-500">*</span>
              </label>
              <select
                name="grade"
                onChange={handleChange}
                value={formData.grade}
                className="w-full p-[7px] bg-gray-100 rounded"
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div>
              <label className="block text-[15px] font-semibold mb-1">
                Name Of Lab Technician
              </label>
              <input
                name="technician"
                type="text"
                onChange={handleChange}
                value={formData.technician}
                placeholder="Name Of technician"
                className="w-full p-[5px] border-gray-400 border rounded"
              />
            </div>
            <div>
              <label className="block text-[15px] font-semibold mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                onChange={handleChange}
                value={formData.status}
                className="w-full p-[7px] bg-gray-100 rounded"
              >
                <option value="">Select</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div>
              <button className="bg-green-600 cursor-pointer text-white p-[7px] rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddResult;
