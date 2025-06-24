import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient'

function RecentSamples() {
     const[model,setModal]= useState(false)
 const[editModel,setEditModal]=useState(false)
 const [ orders, setOrders ] = useState([])
   const [loading,setLoading] = useState (true)

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

  return (
     <div className="bg-white w-[30%] p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Samples</h2>
          <ul className="space-y-4">
            {orders.map((order) => (
                <>
                    <li className="flex justify-between text-sm">
              <div>
              <span>{order.supplier_name}</span>
              <p className="text-gray-500">{order.date}</p>
              </div>
             
              <span className="font-medium">{order.mineral}</span>
            </li>
                </>
            ))}
        
            <li className="flex justify-between text-sm">
              <div>
              <span>Internet Bill</span>
              <p className="text-gray-500">23 February</p>
              </div>
            
              <span className="font-medium">$17</span>
            </li>
            <li className="flex justify-between text-sm">
            <div>
              <span>Casetelite </span>
              <p className="text-gray-500">22 March</p>
              </div>
  
              <span className="font-medium">$96</span>
            </li>
            <li className="flex justify-between text-sm">
            <div>
              <span>Copper Bill</span>
              <p className="text-gray-500">23 February</p>
              </div>
              
              <span className="font-medium">$11</span>
            </li>
          </ul>
        </div>
  )
}

export default RecentSamples