import React from "react";
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
const SupplierDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-4 mb-[30px] gap-4">
  <div className="border border-gray-300 rounded-md p-2 bg-white h-35 ">
    <div className="flex justify-between items-center">
      <FaDollarSign className="text-[20px] text-gray-500" />
      <BsThreeDots />
    </div>
    <div className="flex flex-col gap-[5px]">
      <h1 className="text-[17px]">Rejected</h1>
      <h1 className="font-bold">20</h1>
    </div>
  </div>
  <div className="border border-gray-300 rounded-md bg-[#22c55e] p-4 h-35 ">
    <div className="flex justify-between items-center">
      <FaDollarSign className="text-[20px] text-white" />
      <BsThreeDots className="text-white" />
    </div>
    <div className="flex flex-col gap-[5px]">
      <h1 className=" text-[17px] text-white">Completed</h1>
      <h1 className="font-bold text-white">22</h1>
    </div>
  </div>
  <div className="border border-gray-300 bg-white rounded-md  p-4 h-35">
    <div className="flex justify-between items-center">
      <FaDollarSign className="text-[20px] text-gray-500" />
      <BsThreeDots />
    </div>
    <div className="flex flex-col gap-[5px]">
      <h1 className="text-[#000] text-[15px]">Active Result</h1>
      <h1 className="font-bold ">10</h1>
    </div>
  </div>
  <div className="border-gray-300 border rounded-md bg-white p-4 h-35">
    <div className="flex justify-between items-center">
      <FaDollarSign className="text-[20px] " />
      <BsThreeDots className="" />
    </div>
    <div className="flex flex-col gap-[10px]">
      <h1 className=" text-[17px]">Pending Test</h1>
      <h1 className="font-bold">12</h1>
    </div>
  </div>
</div>
      <div className="flex gap-6">
        {/* Top 5 Expense Source */}
        <div className="col-span-2 w-[70%] bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Top 5 Expense Source</h2>
          <ResponsiveContainer  height={300}>
            <BarChart data={barData.slice(0, 12)}>
            <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expense" barSize={20} fill="#22c55e" />
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

export default SupplierDashboard;
