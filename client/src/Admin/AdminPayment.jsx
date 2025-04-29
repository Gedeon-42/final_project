import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const jobData = [
  {
    id: 1,
    type: ' cassiterit',
    postedDate: '12-01-2023',
    quanity: '450kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"45%",
    status: 'Active',
  },
  {
    id: 2,
    type: 'cassiterit',
    postedDate: '12-01-2025',
    quanity: '450kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"45%",
    status: 'rejected',
  }, 
  {
    id: 3,
    type: ' coltan',
    postedDate: '12-01-2024',
    quanity: '60kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"45%",
    status: 'pending',
  },
  {
    id: 4,
    type: ' cassiterit',
    postedDate: '12-01-2025',
    quanity: '550kg ',
    custody:"lab technician",
    methodoly:"Manual testing",
    grade:"45%",
    status: 'Active',
  },
  {
    id: 5,
    type: ' coltan',
    postedDate: '12-01-2024',
    quanity: '500kg ',
    custody:"lab technician",
    methodoly:"X-ray fluorescence",
    grade:"45%",
    status: 'Active',
  },
];

const AdminPayment = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white m-4 border border-gray-200  rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2  text-gray-700 text-left">No</th>
            <th className="px-4 py-2 text-gray-700 text-left">Mineral</th>
            <th className="px-4 py-2 text-gray-700 text-left">Date</th>
            <th className="px-4 py-2 text-gray-700 text-left">weight</th>
            <th className="px-4 py-2 text-gray-700 text-left">Grade</th>
            <th className="px-4 py-2 text-gray-700 text-left">Methodoly</th>
            <th className="px-4 py-2 text-gray-700 text-left">Chain of custody</th>
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
              <td className="px-4 py- text-[14px]">{job.grade}</td>
                <td className="px-4 py- text-[14px]">{job.methodoly}</td>
                <td className="px-4 py- text-[14px]">{job.custody}</td>
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
                <button className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-200">
                  <FaEye />
                </button>
                <button className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
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

export default AdminPayment;
