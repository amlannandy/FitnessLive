import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';

import Title from './Title';

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('13/02', 0),
  createData('14/02', 1),
  createData('15/02', 3),
  createData('16/02', 4),
  createData('17/02', 8),
  createData('18/02', 7),
  createData('19/02', 6),
  createData('20/02', 8),
  createData('21/02', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Statistics</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis dataKey='time' stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position='left'
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
              }}>
              No. of users
            </Label>
          </YAxis>
          <Line
            type='monotone'
            dataKey='amount'
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
