import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient'
import { usestateContext } from '../Context/ContextProvider'

function RecentRequest({recentRequests, getStatusIcon,getStatusColor}) {
const [recentRequestst,setrecentRequests] = useState([])
const {supplier} = usestateContext()

useEffect(()=>{
     const fetchRecentRequests = async () => {
         if (!supplier || !supplier.id) return; // Guard clause
        try {
             const response  = await axiosClient.get(`/suppliers/${supplier.id}/orders`)
             setrecentRequests(response.data.orders.data)
             console.log("Recent requests:", response.data.orders.data)
        } catch (error) {
            console.error("Error fetching recent requests:", error);
        }
     }
     fetchRecentRequests()
}

,[supplier])

  return (
   
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-lg font-semibold text-gray-900 mb-4">Recent Requests</p>
          <div className="space-y-4">
            {recentRequests?.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-900">Talent #{request.talentId}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      <span>{request.status.replace('_', ' ')}</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{request.position}</p>
                  <p className="text-xs text-gray-500">{request.budget}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

       
   
  )
}

export default RecentRequest