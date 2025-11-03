import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
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
    <BarChart
      width={1500}
      height={300}
      data={chartData} // 3. Use the dynamic data from the prop
      margin={margin}
      layout="vertical"
    >
      <XAxis type="number" stroke="#8884d8" />
      <YAxis type="category" dataKey="name" />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      
      {/* 4. THIS IS THE KEY: 
        Change dataKey from "uv" to "count" to match your JSON data.
        I also changed the fill color to orange to match your image.
      */}
      <Bar dataKey="count" fill="#FB923C" barSize={30} />
      
      {/* (I removed the <Legend /> component because your 
        example image didn't have one and it's cleaner without it) 
      */}
    </BarChart>
  );
}