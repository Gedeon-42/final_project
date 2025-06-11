import React, { useEffect, useState } from "react";
import { 
  User, Bell, Settings, Search, Plus, Eye, MessageCircle, Calendar, 
  TrendingUp, Users, FileText, DollarSign, Clock, CheckCircle, 
  XCircle, AlertCircle, Edit, Trash2, Filter, Download, Star,
  MapPin, Briefcase, Mail, Phone, Globe, Building,
  
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,

  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from "recharts";
import { BsThreeDots } from "react-icons/bs";
import { FaCaretUp, FaDollarSign } from "react-icons/fa";
import axiosClient from "../axiosClient";
const barData = [
  { name: "january", expense: 300 },
  { name: "February", expense: 519 },
  { name: "March", expense: 200 },
  { name: "April", expense: 500 },
  { name: "May", expense: 600 },
  { name: "June", expense: 300 },
  { name: "July", expense: 460 },
  { name: "August", expense: 700 },
  { name: "September", expense: 300 },
  { name: "October", expense: 180 },
  { name: "November", expense: 180 },
  { name: "December", expense: 455 }
];

const lineData = [
  { date: "Jan 1", amount: 300, projected: 700 },
  { date: "Jan 2", amount: 800, projected: 400 },
  { date: "Jan 3", amount: 1200, projected: 700 },
  { date: "Jan 4", amount: 300, projected: 900 },
  { date: "Jan 5", amount: 560, projected: 560 },
  { date: "Jan 6", amount: 640, projected: 640 },
  { date: "Jan 7", amount: 576, projected: 470 },
  { date: "Jan 8", amount: 450, projected:800 },
  { date: "Jan 9", amount: 300, projected: 400 },
  { date: "Jan 10", amount: 550, projected: 500 },
  { date: "Jan 11", amount: 350, projected: 410 }
];

const pieData = [
  { name: "Income", value: 45000 },
  { name: "Expense", value: 27450 },
  { name: "Savings", value: 17550 }
];

const COLORS = ["#22c55e", "#ef4444", "#0ea5e9"];
 // Mock data
  const stats = {
    activeRequests: 0,
    talentViewed:0,
    responseRate: 0,
    avgResponseTime: '2'
  };



const Dashboard = () => {
 const [totalTalents, setTotalTalents] = useState(0);

    useEffect(() => {
        axiosClient
            .get("/orders/total")
            .then((response) => {
                setTotalTalents(response.data);
                console.log("Total Talents:", response.data);
              
            })
            .catch((error) => console.error(error));
    }, []);


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
 <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Samples</p>
              <p className="text-2xl font-bold text-gray-900">{totalTalents.total_orders}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600"> Active Results</p>
              <p className="text-2xl font-bold text-gray-900">{stats.talentViewed}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Suppliers</p>
              <p className="text-2xl font-bold text-gray-900">{stats.responseRate}%</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900">{stats.avgResponseTime}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>


    
    </div>
      <div className="flex gap-6 mt-6 w-[100%]">
        {/* Top 5 Expense Source */}
        <div className="col-span-2 w-[70%] bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Results Chart</h2>
          <ResponsiveContainer  height={300}>
            <BarChart data={barData.slice(0, 12)}>
            <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expense" barSize={10} radius={[10, 10, 0, 0]} fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Expenses */}
        <div className="bg-white w-[30%] p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Deliveries</h2>
          <ul className="space-y-4">
            <li className="flex justify-between text-sm">
              <div>
              <span>Fridge</span>
              <p className="text-gray-500">21 january</p>
              </div>
             
              <span className="font-medium">$550</span>
            </li>
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

</div>
<div className="flex gap-5 mt-4 w-[100%]">
      {/* Report Overview */}
      <div className="bg-white w-[30%] p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Report Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart >
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Activity */}
        <div className="col-span-2  w-[70%] bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Delivery Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="projected" stroke="#a3a3a3" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
</div>
      </div>
    
  );
};

export default Dashboard;
