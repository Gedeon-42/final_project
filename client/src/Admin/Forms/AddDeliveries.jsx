import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import axiosClient from '../../axiosClient';
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

function AddDeliveries({ fetchOrders,handleModel }) {
    const [suppliers, setSuppliers] = useState([]);
   const [formData, setFormData] = useState({
    supplier_id:"",
    mineral: "",
    date: "",
    email: "",
    batch_number: "",
    net_Weight: "",
    gross_weight:"",
    grade: "",
    status: "",
  });

  const [loading,setLoading] = useState(false)
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    useEffect(() => {
        axiosClient.get('suppliers')
            .then(res => setSuppliers(res.data))
            .catch(err => console.error('Error fetching suppliers:', err));
    }, []);

    const handleSupplierChange = (e) => {
  const selectedId = e.target.value;
  const selectedSupplier = suppliers.find(s => String(s.id) === selectedId);
  setFormData({
    ...formData,
    supplier_id: selectedId,
    email: selectedSupplier?.email || "",
    phone: selectedSupplier?.phone || ""
  });
};

    

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true)


    try {
      await axiosClient.post("/orders", formData);
    
      toast.success("Delivery submitted successfully!");
      setTimeout(() => {
        handleModel()
      }, 3000);
      fetchOrders();
      setLoading(false)
      setFormData({
        supplier_id: "",
        mineral: "",
        date: "",
        email: "",
        batch_number: "",
        gross_weight:"",
        net_Weight: "",
        grade: "",
    
        status: "",
      });

    
    } catch (error) {
  toast.error("Failed to submit result.");
    setLoading(false)
      console.error(error);
    }
  };

  return (
    <div className="fixed z-[50] top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>

<ToastContainer/>
      {/* Modal content */}
      <form  onSubmit={handleSubmit} className="relative z-[60] space-y-4 bg-white p-6 rounded shadow-lg w-[800px] ">
        <FaTimes
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onClick={handleModel}
        />

        <div className='flex gap-[20px]'>
        <div className='flex flex-col w-[50%] gap-[20px]'>
       
          <div>
                    <label className="block  text-[15px] font-semibold mb-1">Supplier: <span className="text-red-500">*</span></label>
                    <select className="w-full p-[5px] border border-gray-400  rounded" name="supplier_id"  value={formData.supplier_id}
  onChange={handleSupplierChange} required>
                        <option value="">Select a supplier</option>
                        {suppliers.map(supplier => (
                            <option key={supplier.id} value={supplier.id}>
                                {supplier.name}
                            </option>
                        ))}
                    </select>
                </div>
        <div>
          <label className="block  text-[15px] font-semibold mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}

            onChange={handleChange}
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
              name="mineral"
              value={formData.mineral}
              onChange={handleChange}
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
              name="batch_number"
              value={formData.batch_number}
              onChange={handleChange}
              placeholder='Enter Batch Number'
              className="w-full p-[5px]  text-[15px] border border-gray-200 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block  text-[15px] font-semibold mb-1">
              Gross Weight <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="gross_weight"
              value={formData.gross_weight}
              onChange={handleChange}
              className="w-full p-[5px]  text-[15px] border border-gray-200  rounded"
              placeholder='Gross Weight'
            />
          </div>
          <div className="flex-1">
            <label className="block text-[15px] font-semibold mb-1">
              Net Weight<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="net_Weight"
              value={formData.net_Weight}
              onChange={handleChange}
              placeholder='Enter Net Weight'
              className="w-full p-[5px]  text-[15px] border border-gray-200 rounded"
            />
          </div>
        </div>

          </div>
          <div className='flex flex-col w-[50%] gap-[20px]'>
          <div >
          <label className="block text-[15px] font-semibold mb-1">
            Date 
          </label>
          <input type="Date" name="date" value={formData.date} onChange={handleChange} className="w-full p-[5px] border-gray-400 border rounded" />
        </div>

        <div>
          <label className="block text-[15px] font-semibold mb-1">
            Mineral Grade <span className="text-red-500">*</span>
          </label>
          <select   name='grade' value={formData.grade} onChange={handleChange} className="w-full p-[7px] bg-gray-100 rounded">
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div>
          <label className="block text-[15px] font-semibold mb-1">
            Status <span className="text-red-500">*</span>
          </label>
          <select  name='status' value={formData.status} onChange={handleChange} className="w-full p-[7px] bg-gray-100 rounded">
           <option value=""> Select</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
        
          </select>
        </div>
        <div>
            <button className='bg-green-600 cursor-pointer text-white p-[7px] rounded'>
              { loading ?(<><ClipLoader color='white' size={15} /></>):(<>save</>)}
            </button>
        </div>
            </div>
        </div>
         
       
      </form>
    </div>
  )
}

export default AddDeliveries