import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};

export default function RatingsChart({ ratings }) {
  
  const chartData = [...ratings].reverse();

  return (
   <div className="w-full max-w-2xl justify-center items-center">
      <ResponsiveContainer width="100%" aspect={2}> 
        
        <BarChart
          data={chartData}
          margin={margin}
          layout="vertical"
        >
          <XAxis type="number" stroke="#8884d8" />
          <YAxis type="category" dataKey="name" />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="#FB923C" barSize={30} />
        </BarChart>
        
      </ResponsiveContainer>
    </div>
  );
}