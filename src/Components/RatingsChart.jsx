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

// 1. We now accept a 'ratings' prop (which is your app.ratings array)
export default function RatingsChart({ ratings }) {
  
  // 2. We reverse a *copy* of the data so "5 star" shows on top
  const chartData = [...ratings].reverse();

  return (
   <div className="w-full max-w-2xl justify-center items-center">
      {/* 2. Wrap your chart component */}
      <ResponsiveContainer width="100%" aspect={2}> 
      {/* 'aspect={2}' means width is 2x height. Adjust as you like. */}
        
        <BarChart
          // 3. REMOVE fixed width and height from here
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