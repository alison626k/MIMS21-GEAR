import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

const data = [
  {
    name: "Level 2 (220V) Free",
    percentage: 70.45,
    amt: 100
  },
  {
    name: "Level 1 (110V) Free",
    percentage: 40.91,
    amt: 100
  },
  {
    name: "Level 2 (220V) Payment",
    percentage: 38.64,
    amt: 100
  },
  {
    name: "Direct Current(DC) Fast Charger Free",
    percentage: 20.45,
    amt: 100
  },
  {
    name: "Direct Current(DC)  Fast Charger Payment",
    percentage: 15.19,
    amt: 100
  }
];

export default function ChargerTypeBar() {
  return (

    <BarChart
      width= {350}
      height={220}
      layout="vertical"
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >

      <XAxis type="number" tickFormatter={(tick) => `${tick}%`} style={{fontSize: '12'}} domain={[0, 100]}/>
      <YAxis type="category" dataKey="name"   width={165} style={{fontSize: '12'}}/>
      <Tooltip formatter={(percentage) => `${percentage}%`}  wrapperStyle={{fontSize: "0.1em"}} />
      <Bar dataKey="percentage" fill="#184d47" background={{ fill: "#eee" }} />
    </BarChart>

  );
}