import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data7Days = [
  { name: 'Day 1', thisMonth: 10000, lastMonth: 15000 },
  { name: 'Day 2', thisMonth: 20000, lastMonth: 12000 },
  { name: 'Day 3', thisMonth: 4509, lastMonth: 18000 },
  { name: 'Day 4', thisMonth: 15000, lastMonth: 8000 },
  { name: 'Day 5', thisMonth: 9000, lastMonth: 14000 },
  { name: 'Day 6', thisMonth: 18000, lastMonth: 11000 },
  { name: 'Day 7', thisMonth: 23000, lastMonth: 17000 }
];

const dataMonth = [
  { name: 'Week 1', thisMonth: 70000, lastMonth: 50000 },
  { name: 'Week 2', thisMonth: 85000, lastMonth: 65000 },
  { name: 'Week 3', thisMonth: 75000, lastMonth: 60000 },
  { name: 'Week 4', thisMonth: 90000, lastMonth: 80000 }
];

const SalesChart = () => {
  const [view, setView] = useState('7days');
  const chartData = view === '7days' ? data7Days : dataMonth;

  return (
    <div className="p-4 rounded-[30px] shadow-xl bg-white w-full">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Sale</h2>
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="border border-gray-300 rounded p-1"
        >
          <option value="7days">7 days</option>
          <option value="month">This month</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid 
            stroke="#d1d5db"   // Customize color
            strokeWidth={2}     // Customize thickness
            strokeDasharray="0" // Solid line, no dash
            horizontal={true}   // Show horizontal lines only
            vertical={false}    // No vertical lines
          />
          <XAxis dataKey="name" tick={false} axisLine={false} />
          <YAxis axisLine={false} /> {/* No Y=0 baseline */}
          <Tooltip />
          <Line type="monotone" dataKey="thisMonth" stroke="#3b82f6" dot={{ r: 6 }} />
          <Line type="monotone" dataKey="lastMonth" stroke="#f43f5e" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-4">
        <span className="flex items-center mr-4">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mr-1"></span>
          This Month
        </span>
        <span className="flex items-center">
          <span className="inline-block w-1 h-1 rounded-full bg-pink-500 mr-1"></span>
          Last Month
        </span>
      </div>
    </div>
  );
};

export default SalesChart;
