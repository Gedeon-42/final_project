import { Edit, Eye, MessageCircle, Plus, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { usestateContext } from '../Context/ContextProvider'
import axiosClient from '../axiosClient'

function Request({getStatusColor,getStatusIcon}) {
    const [recentRequests,setrecentRequests] = useState([])
const {supplier} = usestateContext()

useEffect(()=>{

     const fetchRecentRequests = async () => {
         if (!supplier || !supplier.id) return; // Guard clause
        try {
             const response  = await axiosClient.get(`/suppliers/${supplier.id}/orders`)
             setrecentRequests(response.data.orders)
             console.log("Recent requests:", response.data.orders)
        } catch (error) {
            console.error("Error fetching recent requests:", error);
        }
     }
     fetchRecentRequests()
}

,[supplier])

  return (
     <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-gray-900">Samples</p>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search requests..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Request</span>
          </button> */}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch_no</th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net_weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">#{request.batch_number}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{request.net_weight}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 w-fit ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      <span>{request.status.replace('_', ' ')}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{request.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{request.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Request