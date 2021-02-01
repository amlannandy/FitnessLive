import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const BarGraph = ({ healthData }) => {
  const data = healthData.map(data => {
    return {
      name: data.label,
      'Recommended Value':
        data.label === 'Activity'
          ? parseInt(data.limit) / 100
          : parseInt(data.limit),
      'User Value':
        data.label === 'Activity'
          ? parseInt(data.value) / 100
          : parseInt(data.value),
      amt:
        data.label === 'Activity'
          ? parseInt(data.value) / 100
          : parseInt(data.value),
    };
  });

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='User Value' fill='#8884d8' />
      <Bar dataKey='Recommended Value' fill='#82ca9d' />
    </BarChart>
  );
};

export default BarGraph;
