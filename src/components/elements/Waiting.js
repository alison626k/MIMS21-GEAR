import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

const data = [
  {
    name: "Never Wait",
    percentage: 10.23,
    amt: 100
  },
  {
    name: "Less than Half of The Time",
    percentage: 45.45,
    amt: 100
  },
  {
    name: "Half of The Time",
    percentage: 34.09,
    amt: 100
  },
  {
    name: "Most of The time",
    percentage: 10.23,
    amt: 100
  }
];

export default function Waiting() {
  return (
<div >
    <p style={{fontSize:'16px', textAlign:'center', color:'#33363A'}}>Frequency for Waiting a public charger </p>
    <BarChart
      width= {500}
      height={220}
      layout="vertical"
      data={data}
      margin={{
        top: -10,
        right: 0,
        left: -80,
        bottom:-10
      }}
    >

      <XAxis type="number" tickFormatter={(tick) => `${tick}%`} style={{fontSize: '11'}} domain={[0, 100]}/>
      <YAxis type="category" dataKey="name"   width={150} height={100} style={{fontSize: '12'}}/>
      <Tooltip formatter={(percentage) => `${percentage}%`}  wrapperStyle={{fontSize: "0.1em"}} />
      <Bar dataKey="percentage" fill="#96bb7c" height={100} background={{ fill: "#eee" }} />
    </BarChart>
    </div>

  );
}