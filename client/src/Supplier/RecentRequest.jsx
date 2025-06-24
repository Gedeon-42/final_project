import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient'
import { usestateContext } from '../Context/ContextProvider'

function RecentRequest({recentRequestst, getStatusIcon,getStatusColor}) {
const [recentRequests,setrecentRequests] = useState([])
const {user} = usestateContext()

useEffect(()=>{
     const fetchRecentRequests = async () => {
          if (!user || !user.id) return; // Guard clause
        try {
             const response  = await axiosClient.get(`/suppliers/${user.id}/orders`)
             setrecentRequests(response.data.orders)
             console.log("Recent requests:", response.data.orders)
        } catch (error) {
            console.error("Error fetching recent requests:", error);
        }
     }
     fetchRecentRequests()
}

,[user])

  return (
   
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-lg font-semibold text-gray-900 mb-4">Recent Samples</p>
          <div className="space-y-4">
            {recentRequests?.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-900">Mineral :{request.mineral}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}
                      <span>{request.status.replace('_', ' ')}</span>
                    </span>
                  </div>
                  <p>Grade: <span className="text-sm text-gray-600"> {request.grade}</span></p>
                  
                  <p>Net Weight:
                    <span className="text-xs text-gray-500">{request.net_weight}</span>
                  </p>
                  
                  <div>
                   <p> Date:<span className="text-xs text-gray-500">{request.date}</span>
                  </p>
                  </div>  
                  
                </div>
              </div>
            ))}
          </div>
        </div>

       
   
  )
}

export default RecentRequest